
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDb9cxD9dhJ01ze69slRy3RwBg50J5qGMg",
  authDomain: "portfolio-bfe5b.firebaseapp.com",
  projectId: "portfolio-bfe5b",
  storageBucket: "portfolio-bfe5b.appspot.com",
  messagingSenderId: "475267906431",
  appId: "1:475267906431:web:f59d8b6bda74c6ee4ef84a",
  measurementId: "G-T5HYE17JJ3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);