// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlgqwPc7NkCX3tasZZMGvCixZuomwTm78",
  authDomain: "clone-3e502.firebaseapp.com",
  projectId: "clone-3e502",
  storageBucket: "clone-3e502.appspot.com",
  messagingSenderId: "1090093555890",
  appId: "1:1090093555890:web:37cbbe9336c35d663169ab",
  measurementId: "G-369X5ZGE5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);