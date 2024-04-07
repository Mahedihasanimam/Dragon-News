// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpiROgvrtxNB8EmtRnb1m1SsyJheZPOVQ",
  authDomain: "dragon-news-509de.firebaseapp.com",
  projectId: "dragon-news-509de",
  storageBucket: "dragon-news-509de.appspot.com",
  messagingSenderId: "975261607425",
  appId: "1:975261607425:web:70c1bbd6130abca6130200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;