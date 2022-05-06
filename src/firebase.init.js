// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB8q4QoflgEw1RBtRSZp1POsonJK1GsDog",
    authDomain: "tirez-bfac7.firebaseapp.com",
    projectId: "tirez-bfac7",
    storageBucket: "tirez-bfac7.appspot.com",
    messagingSenderId: "242898591846",
    appId: "1:242898591846:web:0a30e314e90fab628e0da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
