// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLx-lePD6AZqjjlThgb2lyQeLtnr7PClg",
  authDomain: "jobr-portal.firebaseapp.com",
  projectId: "jobr-portal",
  storageBucket: "jobr-portal.firebasestorage.app",
  messagingSenderId: "666303725517",
  appId: "1:666303725517:web:516df9740123305c320e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app