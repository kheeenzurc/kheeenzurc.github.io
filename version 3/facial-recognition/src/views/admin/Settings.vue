<template>
  <v-container>
    <v-layout
      wrap
      justify-center="true"
    >
      <v-flex text-xs-center xs12>
        <h1 class="title text-uppercase">Take a picture to let us know how you feel</h1>
        <p class="subheading font-weight-thin">about our service</p>
      </v-flex>
      <v-flex sm7 md6>
        <Camera />
        <div class="my-3">
          <v-card>
            <v-card-text>
              <v-radio-group v-model="emotion">
                <v-radio  label="Satisfied" value="0"></v-radio>
                <v-radio  label="Neutral" value="1"></v-radio>
                <v-radio  label="Unsatisfied" value="3"></v-radio>
              </v-radio-group>
            </v-card-text>
          </v-card>
        </div>
        <v-btn @click="trainModel" large block color="primary" dark>train</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Camera from "@/components/Camera";
  import * as tf from '@tensorflow/tfjs';
  import * as mobilenetModule from '@tensorflow-models/mobilenet';
  import * as knnClassifier from '@tensorflow-models/knn-classifier';
  import axios from 'axios';

  export default {
    components: {
      Camera
    },
    data: () => ({
      emotion: "satisfied",
      classifier: null,
      mobilenet: null
    }),
    methods: {
      async init(){
        // load the load mobilenet and create a KnnClassifier
        this.classifier = knnClassifier.create();
        this.mobilenet = await mobilenetModule.load();
      },
      trainModel(){
        const WEBCAM = document.getElementById('webcam')
        console.log(tf)
        
        try{
          const img= tf.fromPixels(this.$children[0].webcam.webcamElement);
          const logits = this.mobilenet.infer(img, 'conv_preds');

          this.classifier.addExample(logits, parseInt(this.emotion));

        } catch (error) {
          console.log(error)
        }
      },
    }
  }
</script>

<style>

</style>
