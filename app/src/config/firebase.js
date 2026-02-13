// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe0qsKy_iky8XfS6oJ0PpnNrYshSJrySs",
  authDomain: "vite-contact-481a1.firebaseapp.com",
  projectId: "vite-contact-481a1",
  storageBucket: "vite-contact-481a1.firebasestorage.app",
  messagingSenderId: "792007173909",
  appId: "1:792007173909:web:3d4577a55e5d3412b2eb1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);