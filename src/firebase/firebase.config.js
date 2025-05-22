// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB58IX50fnVS-7rRMNDH3hQ3yVvTI7SptI",
  authDomain: "dragon-daily-news.firebaseapp.com",
  projectId: "dragon-daily-news",
  storageBucket: "dragon-daily-news.firebasestorage.app",
  messagingSenderId: "620659465412",
  appId: "1:620659465412:web:e8942714cbf12b34237d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;