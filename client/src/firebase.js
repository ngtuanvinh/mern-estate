// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-72054.firebaseapp.com",
  projectId: "mern-estate-72054",
  storageBucket: "mern-estate-72054.appspot.com",
  messagingSenderId: "246600876706",
  appId: "1:246600876706:web:d5731774ecf6b05b618dfb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
