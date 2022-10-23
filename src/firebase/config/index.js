// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-dAel9Eg_CuIl-O3_DJj61bEmMuWYbAE",
  authDomain: "invitein-17723.firebaseapp.com",
  projectId: "invitein-17723",
  storageBucket: "invitein-17723.appspot.com",
  messagingSenderId: "1014822304964",
  appId: "1:1014822304964:web:6e9403a8a30bf7cfc95d91",
  measurementId: "G-PVEV2QD88C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };