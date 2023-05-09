// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6SN4aP5JngNQ1haIDM0_ARECsA18J1IA",
  authDomain: "smokingarea-7a3cd.firebaseapp.com",
  databaseURL: "https://smokingarea-7a3cd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smokingarea-7a3cd",
  storageBucket: "smokingarea-7a3cd.appspot.com",
  messagingSenderId: "556525028072",
  appId: "1:556525028072:web:2f659282ef14077dc6ff5d",
  measurementId: "G-4VNHD2WH70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);