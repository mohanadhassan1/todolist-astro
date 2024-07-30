// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-g7_UtMtWpH4GQi8BQW4x-lV5w_zKM2c",
  authDomain: "todolist-astro.firebaseapp.com",
  projectId: "todolist-astro",
  storageBucket: "todolist-astro.appspot.com",
  messagingSenderId: "284719666072",
  appId: "1:284719666072:web:5a8db6954256418de351ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectAuth = getAuth(app);