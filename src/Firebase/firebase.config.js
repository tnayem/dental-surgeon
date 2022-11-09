// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm_WI3SCgCQJ0ONgAyvxHmz6gjEGDAALI",
  authDomain: "dental-surgeon-ca9a1.firebaseapp.com",
  projectId: "dental-surgeon-ca9a1",
  storageBucket: "dental-surgeon-ca9a1.appspot.com",
  messagingSenderId: "211524794366",
  appId: "1:211524794366:web:b7c76ccf8b1300452bf2af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;