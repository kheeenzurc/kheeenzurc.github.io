<template>
  <div>
    <v-layout>
      <v-flex>
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
            <select id="use_case" v-on:change="changeOption()">
                <option value="train">Train</option>
                <option value="test">Test</option>
            </select>
            <Camera></Camera>
            <template v-if="mode == 'train'">
                <select id="emotion_options">
                    <template v-for="(emotion, index) in emotions">
                        <option :key="index" :value="index">{{emotion}}</option>
                    </template>
                </select>
                <v-btn color="info" v-on:click="trainModel()">Train Model</v-btn>
            </template>
            <template v-else>
                <v-btn color="info" v-on:click="getEmotion()">Get Emotion</v-btn>
            </template>

            <h1>{{ detected_e }}</h1>
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
          class: null,
          detected_e: null,
          mode: 'train',
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
        let selected = document.getElementById("emotion_options");
        this.class = selected.options[selected.selectedIndex].value;
        this.addExample();
      },
      addExample(){
        const img= tf.fromPixels(this.$children[0].webcam.webcamElement);
        const logits = this.mobilenet.infer(img, 'conv_preds');
        this.classifier.addExample(logits, parseInt(this.class));
        console.log(this.classifier, logits)
      },
      async getEmotion(){
        const img = tf.fromPixels(this.$children[0].webcam.webcamElement);
        const logits = this.mobilenet.infer(img, 'conv_preds');
        const pred = await this.classifier.predictClass(logits);
        console.log(pred);
        this.detected_e = this.emotions[pred.classIndex];
        this.registerEmotion();
      },
      changeOption(){
          const selected = document.getElementById("use_case");
          this.mode = selected.options[selected.selectedIndex].value;
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
