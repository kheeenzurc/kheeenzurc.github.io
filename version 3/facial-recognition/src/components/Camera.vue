<template>
  <v-card>
    <v-card-text>
      <video autoplay playsinline muted id="webcam"></video>
    </v-card-text>
  </v-card>
</template>

<script>
  import {Webcam} from '../assets/webcam'

  export default {
    data: () => ({
      webcam: null,
    }),
    mounted: function(){
      this.loadWebcam();
    },
    methods: {
      loadWebcam: function(){
        this.webcam = new Webcam(document.getElementById('webcam'));
        this.webcam.setup();
      }
    }
  };
</script>

<style scoped>
  #webcam{
    margin: 0;
    width: 100%;
  }
</style>