// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbIHlSALsehfLPw_0CuONmN0XfLtzFzcQ",
    authDomain: "slewbites.firebaseapp.com",
    projectId: "slewbites",
    storageBucket: "slewbites.appspot.com",
    messagingSenderId: "1016724249512",
    appId: "1:1016724249512:web:1aba0c252a94b058791b9d",
    measurementId: "G-47F52GN04B"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);