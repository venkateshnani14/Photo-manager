// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage,ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhvnTjosPPuIz_luN2D4Py901ir65bFzk",
  authDomain: "photo-manager-ead0f.firebaseapp.com",
  projectId: "photo-manager-ead0f",
  storageBucket: "photo-manager-ead0f.appspot.com",
  messagingSenderId: "961249343150",
  appId: "1:961249343150:web:4d48e5ab58fcf58394df3f",
  measurementId: "G-T5VC4WVEMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const auth = getAuth(app);
export { app, analytics, projectStorage, projectFirestore,auth };