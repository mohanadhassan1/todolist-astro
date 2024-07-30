// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqZ0sn89W-TOzkhUB04DMwaWJm1pe8_8",
  authDomain: "todo-auth-bc993.firebaseapp.com",
  projectId: "todo-auth-bc993",
  storageBucket: "todo-auth-bc993.appspot.com",
  messagingSenderId: "429050150627",
  appId: "1:429050150627:web:956fec6f2517a84f0c8fd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectAuth = getAuth(app);