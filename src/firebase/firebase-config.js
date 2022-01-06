import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDoW8NaoBIT39oHU-V040KhR7-gwL6L8rs",
  authDomain: "journal-app-1b475.firebaseapp.com",
  projectId: "journal-app-1b475",
  storageBucket: "journal-app-1b475.appspot.com",
  messagingSenderId: "714365970484",
  appId: "1:714365970484:web:2b6b8356d078d483dc0261"
};


const firebase = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}