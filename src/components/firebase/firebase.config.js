// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuRXk42EVDnF8774dOuJFUQt5l9VLKX_I",
    authDomain: "learning-platform-server-ef4a6.firebaseapp.com",
    projectId: "learning-platform-server-ef4a6",
    storageBucket: "learning-platform-server-ef4a6.appspot.com",
    messagingSenderId: "787135473470",
    appId: "1:787135473470:web:ebe7f6e14e1bafdb22ee6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app