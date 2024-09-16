// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmmL9_E70I5zRX28Dx4LvHK0PWbHvFjFM",
    authDomain: "paradise-d1981.firebaseapp.com",
    projectId: "paradise-d1981",
    storageBucket: "paradise-d1981.appspot.com",
    messagingSenderId: "377598144856",
    appId: "1:377598144856:web:8f8a2f9655a937fcfdb52d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };