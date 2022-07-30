// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4AzqUvrTH9B9BDRIFthI-Sa2S3ikju_w",
  authDomain: "challenge-13276.firebaseapp.com",
  projectId: "challenge-13276",
  storageBucket: "challenge-13276.appspot.com",
  messagingSenderId: "168577556670",
  appId: "1:168577556670:web:a4147dfec50fbbf22c7eef",
  measurementId: "G-1FW9K2RDNC"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };