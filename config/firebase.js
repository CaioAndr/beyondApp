import { initializeApp } from "firebase/app";7
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHjLQ70xw4STIDNYZRnrddL1KAMXVRjBg",
  authDomain: "beyondapp-1a924.firebaseapp.com",
  projectId: "beyondapp-1a924",
  storageBucket: "beyondapp-1a924.appspot.com",
  messagingSenderId: "658618128038",
  appId: "1:658618128038:web:9cae0ee3e5c7ceeb750667",
  measurementId: "G-GZ7M2VX5BS"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();