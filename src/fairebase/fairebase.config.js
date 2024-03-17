// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZQuoCjHIsufBN7lY8PfNE-lEC-Idop68",
  authDomain: "fairebase-auth-87377.firebaseapp.com",
  projectId: "fairebase-auth-87377",
  storageBucket: "fairebase-auth-87377.appspot.com",
  messagingSenderId: "984454482977",
  appId: "1:984454482977:web:e351aef9b0064920c5e760",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
