// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCxfYCKWRQqJj0l0xR87sJ1Xpozx8vzkWw",
    authDomain: "js4proj.firebaseapp.com",
    projectId: "js4proj",
    storageBucket: "js4proj.firebasestorage.app",
    messagingSenderId: "462228693046",
    appId: "1:462228693046:web:fb71ba9c98edb3d5eff897"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);