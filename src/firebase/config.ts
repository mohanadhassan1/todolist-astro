// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEIQhonDmQ5NWnkJUxyhltFd4HEgZ0GA",
  authDomain: "todolist-astro-1ce70.firebaseapp.com",
  projectId: "todolist-astro-1ce70",
  storageBucket: "todolist-astro-1ce70.appspot.com",
  messagingSenderId: "74756304858",
  appId: "1:74756304858:web:eab6942429933eac6b1ae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectAuth = getAuth(app);