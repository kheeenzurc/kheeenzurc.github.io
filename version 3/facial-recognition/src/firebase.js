import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {};

const config = {
  apiKey: "AIzaSyAenH3ieswlwDrb3NIlTgOZebKUPkzav0g",
  authDomain: "https://facial-recognition-ef4da.firebaseio.com",
  databaseURL: "https://facial-recognition-ef4da.firebaseio.com",
  projectId: "facial-recognition-ef4da",
  storageBucket: ""
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
