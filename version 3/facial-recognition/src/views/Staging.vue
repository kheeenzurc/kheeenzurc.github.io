<template>
  <div>
    <v-layout>
      <v-flex class="text-xs-center">
        <template v-if="mode == 'train'">
          <h1>Take pictures that define your different moods</h1>
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
            </select>-->
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
              </select>-->
              <v-radio-group id="emotion_options" v-model="classification">
                <v-radio
                  v-for="(emotion, indx) in emotions"
                  :key="indx"
                  :label="emotion"
                  :value="indx"
                  name="test"
                ></v-radio>
              </v-radio-group>
              <v-btn color="info" block v-on:click="newModel()">Train Model</v-btn>
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
import * as tf from "@tensorflow/tfjs";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import axios from "axios";
import firebase from "../firebase";

export default {
  name: "Staging",
  components: {
    Camera
  },
  data: function() {
    return {
      emotions: ["satisfied", "neutral", "unsatisfied"],
      classifier: null,
      mobilenet: null,
      classification: null,
      detected_e: null,
      mode: "train",
      boards: [],
      errors: [],
      ref: firebase.firestore().collection("trainnings"),
      selectedBoard: null
    };
  },

  methods: {
    getTrainings(){
      this.ref.onSnapshot(querySnapshot => {
        this.boards = [];
        querySnapshot.forEach(doc => {
          this.boards.push({
            key: doc.id,
            data: doc.data()
          });
        });
        this.boards.forEach(document => {
          console.log("fetch data for", document.key)
          this.getLogit(document.key);
        });
      });
    },

    getLogit(key) {
      const ref = this.ref.doc(key);
      const vm = this;

      ref.get().then(doc => {
        if (doc.exists) {
          const log = doc.data();
          const img = document.createElement("img"),
                videoElement = this.$children[0].$children[2].webcam.webcamElement,
                aspectRatio = videoElement.width / videoElement.height;
          img.src = log.image

          img.width = videoElement.width,
          img.height = videoElement.height

          if (videoElement.width >= videoElement.height) {
            img.width = aspectRatio * videoElement.height;
          } else if (videoElement.width < videoElement.height) {
            img.height = videoElement.width / aspectRatio;
          }

          this.loadTraining(img, log.classification)

        } else {
          console.log(key, "No such document!");
        }
      })
    },

    loadTraining(source, classification){
      const img = tf.fromPixels(source);
      const logits = this.mobilenet.infer(img, "conv_preds");

      console.log(logits, "classification: ", classification);
      this.classifier.addExample(logits, parseInt(classification));
      console.log("training registered")
    },

    async init() {
      // load the load mobilenet and create a KnnClassifier
      this.classifier = knnClassifier.create();
      this.mobilenet = await mobilenetModule.load();
      this.getTrainings()
    },

    newModel() {
      const videoElement = this.$children[0].$children[2].webcam.webcamElement,
            img = tf.fromPixels(videoElement),
            sourceCanvas = document.createElement("canvas"),
            sourceCanvasCTX = sourceCanvas.getContext("2d"),
            aspectRatio = videoElement.width / videoElement.height;

      let width = videoElement.width,
          height = videoElement.height

      if (videoElement.width >= videoElement.height) {
        width = aspectRatio * videoElement.height;
      } else if (videoElement.width < videoElement.height) {
        height = videoElement.width / aspectRatio;
      }
      
      sourceCanvasCTX.drawImage(videoElement, 0, 0, width, height);

      const base64 = sourceCanvas.toDataURL(),
            logits = this.mobilenet.infer(img, "conv_preds"),
            classification = this.classification + 0;

      console.log(logits);
      this.fbRegister(logits, classification, base64, sourceCanvas)
    },

    
    fbRegister(logits, cls, base64, canvas) {
      
      const newTraining = {
        classification: cls,
        image: base64
      }

      this.ref.add(newTraining).then(docRef => {
        console.log("docREF", docRef);
        console.log("logits", logits)
        console.log("document added to FB")

        const img = document.createElement("img")
        img.src = base64;
        img.height = canvas.height
        img.width = canvas.height

        this.loadTraining(img, cls)
      })
    },

    async getEmotion() {
      const img = tf.fromPixels(this.$children[0].$children[2].webcam.webcamElement);
      const logits = this.mobilenet.infer(img, "conv_preds");
      const pred = await this.classifier.predictClass(logits);
      this.detected_e = this.emotions[pred.classIndex];
    },
    
    changeOption(mode) {
      this.mode = mode;
      this.detected_e = null;
    }
    
  },
  mounted: function() {
    this.init();
  },
  created: function() {
    console.clear();
  }
};
</script>