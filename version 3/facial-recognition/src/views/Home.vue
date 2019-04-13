<template>
  <div>
    <v-layout>
      <v-flex class="text-xs-center">
        <template v-if="mode == 'train'">
            <h1>Take pictures that define your different moods in the dropdown</h1>
        </template>
        <template v-else>
            <h1>Take a picture to let us know how you feel about our service</h1>
        </template>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="mt-5">
      <v-flex md5>
        <v-card>
          <v-card-text>
            <!-- <select id="use_case" v-on:change="changeOption()">
                <option value="train">Train</option>
                <option value="test">Test</option>
            </select> -->
            <v-layout>
              <v-flex>
                <v-btn block @click="changeOption('test')">Test</v-btn>
              </v-flex>
              <v-flex>
                <v-btn block @click="changeOption('train')">Train</v-btn>
              </v-flex>
            </v-layout>
            <Camera></Camera>
            <template v-if="mode == 'train'">
                <!-- <select id="emotion_options">
                    <template v-for="(emotion, index) in emotions">
                        <option :key="index" :value="index">{{emotion}}</option>
                    </template>
                </select> -->
                <v-radio-group id="emotion_options" v-model="__class">
                  <v-radio
                    v-for="(emotion, indx) in emotions"
                    :key="indx"
                    :label="emotion"
                    :value="indx"
                    name="test"
                  ></v-radio>
                </v-radio-group>
                <v-btn color="info" block v-on:click="trainModel()">Train Model</v-btn>
            </template>
            <template v-else>
                <v-btn block color="info" v-on:click="getEmotion()">Get Emotion</v-btn>
            </template>
            <v-card light v-if="detected_e">
              <v-card-text>{{ detected_e }}</v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Camera from "@/components/Camera.vue";
import * as tf from '@tensorflow/tfjs';
import * as mobilenetModule from '@tensorflow-models/mobilenet';
import * as knnClassifier from '@tensorflow-models/knn-classifier';
import axios from 'axios';

export default {
  name: "Home",
  components: {
    Camera
  },
  data: function(){
      return {
          emotions: ['angry','neutral', 'happy'],
          classifier: null,
          mobilenet: null,
          __class: null,
          detected_e: null,
          mode: 'train'
      }
  },
  mounted: function(){
      this.init();
  },
  methods: {
      async init(){
        // load the load mobilenet and create a KnnClassifier
        this.classifier = knnClassifier.create();
        this.mobilenet = await mobilenetModule.load();
      },
      trainModel(){
        const videoElement = this.$children[0].$children[2].webcam.webcamElement
        const img= tf.fromPixels(videoElement);
        const logits = this.mobilenet.infer(img, 'conv_preds');
        this.classifier.addExample(logits, parseInt(this.__class));
        console.log(this.__class, logits)
      },
      async getEmotion(){
        const img = tf.fromPixels(this.$children[0].webcam.webcamElement);
        const logits = this.mobilenet.infer(img, 'conv_preds');
        const pred = await this.classifier.predictClass(logits);
        console.log(pred);
        this.detected_e = this.emotions[pred.classIndex];
        this.registerEmotion();
      },
      changeOption(mode){
          this.mode = mode;
      },
      registerEmotion(){
          axios.post('http://localhost:3128/callback', {
              'emotion': this.detected_e
          }).then( () => {
              alert('Thanks for letting us know how you feel');
          });
      }
    }
};
</script>
