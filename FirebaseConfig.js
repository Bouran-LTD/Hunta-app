// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCawmUbF61yaNHsX5dJLPHopZqIZemug6A",
  authDomain: "hunta-app-4089b.firebaseapp.com",
  projectId: "hunta-app-4089b",
  storageBucket: "hunta-app-4089b.appspot.com",
  messagingSenderId: "667014751989",
  appId: "1:667014751989:web:bfc7ba19c32541e7a307bc",
  measurementId: "G-3FFQLZTHP2",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
