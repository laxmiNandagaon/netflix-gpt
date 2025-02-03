// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlBx1d4OU82-tMSE6hhtSnFPV3j67C-x4",
  authDomain: "test-proj-e4778.firebaseapp.com",
  projectId: "test-proj-e4778",
  storageBucket: "test-proj-e4778.firebasestorage.app",
  messagingSenderId: "729968353099",
  appId: "1:729968353099:web:b53e91e15bc759a91f92ce",
  measurementId: "G-EEYXFVJ1NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth=getAuth()