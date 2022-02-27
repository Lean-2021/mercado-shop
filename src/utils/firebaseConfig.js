// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBOtFb3g6Mm_unxOhu6xwgYEmbCLaunA8",
  authDomain: "mercado-shop-8dc2a.firebaseapp.com",
  projectId: "mercado-shop-8dc2a",
  storageBucket: "mercado-shop-8dc2a.appspot.com",
  messagingSenderId: "674563217249",
  appId: "1:674563217249:web:38dbea96a986285cb95720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;