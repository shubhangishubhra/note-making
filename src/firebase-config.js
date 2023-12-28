// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN5gF1e-qse81tvmmpPh-EsWcWGUNYg68",
  authDomain: "noteapp-5ec0c.firebaseapp.com",
  projectId: "noteapp-5ec0c",
  storageBucket: "noteapp-5ec0c.appspot.com",
  messagingSenderId: "186673390887",
  appId: "1:186673390887:web:1cb4c923ebf04790def502",
  measurementId: "G-YVLXFKFZRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
