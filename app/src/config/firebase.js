
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDSuJJEf0j79GV-h4Mv7Kz5Jpa8_FZNd8s",
  authDomain: "product-management-syste-3f326.firebaseapp.com",
  projectId: "product-management-syste-3f326",
  storageBucket: "product-management-syste-3f326.appspot.com",
  messagingSenderId: "113533166461",
  appId: "1:113533166461:web:29a9bea786e7c8fa052214",
  measurementId: "G-HLSV99VM4B"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app);