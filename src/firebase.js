//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGlEJGTmJykzFhxg9TWtFpfIk0-h3dXEc",
    authDomain: "ecommerce-52e9a.firebaseapp.com",
    projectId: "ecommerce-52e9a",
    storageBucket: "ecommerce-52e9a.appspot.com",
    messagingSenderId: "763231577534",
    appId: "1:763231577534:web:fd8be4e0af83511902c5ef",
    measurementId: "G-GZX22KHRNS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

