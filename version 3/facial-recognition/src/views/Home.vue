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
			<v-btn @click="capture" large block color="primary" dark>capture</v-btn>
		</v-flex>
  	</v-layout>

	<v-dialog v-model="modal" persistent width="800">
	  	<v-card>
	  		<v-card-title>
	  			<h3 class="font-weight-light display-1">Review</h3>
	  		</v-card-title>
	  		<v-card-text>
	  			<v-layout wrap>
	  				<v-flex sm4 md4>
	  					<div id="result-image"></div>
	  					<p class="result">{{review.emotion}}</p>
	  				</v-flex>
					<v-flex sm8 md8>
						<div class="px-3">
							<div class="pb-1">
								<label>Name: <i class="grey--text">Optional</i></label>
					          	<v-text-field v-model="review.name"></v-text-field>
				          	</div>
				          	<div class="pb-1">
								<label>Comments: <i class="grey--text">Optional</i></label>
								<v-textarea v-model="review.comment"></v-textarea>
							</div>
						</div>
					</v-flex>
	  			</v-layout>
	  		</v-card-text>
	  		<v-card-actions class="mt-4">
	  			<v-spacer></v-spacer>
				<v-btn flat color="success">
					Submit
				</v-btn>
				<v-btn flat color="secondary" @click="resumeCamera">
					Cancel
				</v-btn>
	  		</v-card-actions>
	  	</v-card>
	  </v-dialog>
  </v-container>
</template>

<script>
	import Camera from '../components/Camera'
	import * as tf from '@tensorflow/tfjs';
	import * as mobilenetModule from '@tensorflow-models/mobilenet';
	import * as knnClassifier from '@tensorflow-models/knn-classifier';
	import axios from 'axios';

	export default {
		components: {
		  Camera
		},
		data: () => ({
			modal: false,
			review: {
				emotion: "",
				name: "",
				comment: ""
			}
		}),
		methods: {
			async init(){
				// load the load mobilenet and create a KnnClassifier
				this.classifier = knnClassifier.create();
				this.mobilenet = await mobilenetModule.load();
			},
			capture(){
				const WEBCAM = document.getElementById('webcam');
				const canvas = document.createElement('canvas')
				const IMGCONT = document.getElementById("result-image");

				canvas.width = 300;
				canvas.height = 300;

				const context = canvas.getContext('2d');
				const constraints = { video: true, };

				context.drawImage(WEBCAM, 0, 0, canvas.width, canvas.height);
				
				IMGCONT.innerHTML = "";
				IMGCONT.appendChild(canvas)

				// WEBCAM.srcObject.getVideoTracks().forEach(track => track.stop());

				WEBCAM.pause();

				this.review.emotion = "satisfied"
				this.modal = true;
			},
			resumeCamera(){
				this.modal = false;
				document.getElementById('webcam').play();
			}
		}
	}
</script>

<style>
	label > i {
		float: right;	
	}

	.darken-1 label{
		color: white;
	}

	img{
		width: 100%
	}

	.result{
		letter-spacing: 5px;
		font-size: 18pt;
		text-transform: uppercase;
		text-align: center;
	}

	#result-image > canvas{
		width: 100%;
		border-radius: 3px;
	}
</style>
