// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0QtvXblGjqt9DAN2W_JNcvtcCE8lHZuk",
  authDomain: "mern-developer.firebaseapp.com",
  projectId: "mern-developer",
  storageBucket: "mern-developer.appspot.com",
  messagingSenderId: "858051295383",
  appId: "1:858051295383:web:6f3fe23ea602b9e99251d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;