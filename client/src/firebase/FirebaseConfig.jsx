import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import

const firebaseConfig = {
  apiKey: "AIzaSyCosbeGMfFt5WaSutFWkyI6h-Xz_jpAeV8",
  authDomain: "projectcsit-9b815.firebaseapp.com",
  projectId: "projectcsit-9b815",
  storageBucket: "projectcsit-9b815.appspot.com",
  messagingSenderId: "160352478407",
  appId: "1:160352478407:web:643263d2c0795343768ae2",
  measurementId: "G-F7GTY9GJLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app); // Use firestore directly
const auth = getAuth(app); // Use auth directly
const storage = getStorage(app);

export { fireDB, auth, storage };
