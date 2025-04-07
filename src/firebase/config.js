import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJS8qYWwa841wB9zuzOKIOZQeitEtPNmg",
  authDomain: "work-692a7.firebaseapp.com",
  projectId: "work-692a7",
  storageBucket: "work-692a7.firebasestorage.app",
  messagingSenderId: "954118310311",
  appId: "1:954118310311:web:a18bdd0794a1361e4a4e82"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();