// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogging-app-9e505.firebaseapp.com",
  projectId: "blogging-app-9e505",
  storageBucket: "blogging-app-9e505.appspot.com",
  messagingSenderId: "205258945537",
  appId: "1:205258945537:web:c763b32b99e5c6b99bbc00",
  measurementId: "G-5VVN4JXGL0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

 