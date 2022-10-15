// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgccERj9svQOtEkITShSjRmih_ma1Kp80",
  authDomain: "simple-firebase-authenti-44927.firebaseapp.com",
  projectId: "simple-firebase-authenti-44927",
  storageBucket: "simple-firebase-authenti-44927.appspot.com",
  messagingSenderId: "337560874210",
  appId: "1:337560874210:web:e8345e62987c21996d82bb",
  measurementId: "G-Y0WCF2GR5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;