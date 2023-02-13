// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4zRZMWMMjWW9QkGNHVPuaJq7D0kSRDG8",
  authDomain: "remote-coders-test.firebaseapp.com",
  projectId: "remote-coders-test",
  storageBucket: "remote-coders-test.appspot.com",
  messagingSenderId: "788334770070",
  appId: "1:788334770070:web:cd4c5a48d7b6e9ed3b4fb7",
  measurementId: "G-8LE9PS4QJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export{ db }