// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxX0pRvpt2O5GPZsvnxdYqw8m7Lr1l_o8",
  authDomain: "realtor-clone.firebaseapp.com",
  projectId: "realtor-clone",
  storageBucket: "realtor-clone.appspot.com",
  messagingSenderId: "1066681886913",
  appId: "1:1066681886913:web:bd4c1c2ebb343df318cc40"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()