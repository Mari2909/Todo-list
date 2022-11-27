// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCz38vjNyrqJfQpiQ7qGUZRzM3Dq6asta8",
    authDomain: "to-do-fd9b5.firebaseapp.com",
    projectId: "to-do-fd9b5",
    storageBucket: "to-do-fd9b5.appspot.com",
    messagingSenderId: "907983366615",
    appId: "1:907983366615:web:5da13d249781bf1e668392",
    measurementId: "G-BL8PHSYVR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);