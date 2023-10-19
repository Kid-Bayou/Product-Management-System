// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSuJJEf0j79GV-h4Mv7Kz5Jpa8_FZNd8s",
  authDomain: "product-management-syste-3f326.firebaseapp.com",
  projectId: "product-management-syste-3f326",
  storageBucket: "product-management-syste-3f326.appspot.com",
  messagingSenderId: "113533166461",
  appId: "1:113533166461:web:29a9bea786e7c8fa052214",
  measurementId: "G-HLSV99VM4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);