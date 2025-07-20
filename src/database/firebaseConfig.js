import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgHkl50YAg2QQfib3odSicvwoJG3foCq4",
  authDomain: "johr2025-c2faa.firebaseapp.com",
  projectId: "johr2025-c2faa",
  storageBucket: "johr2025-c2faa.firebasestorage.app",
  messagingSenderId: "60054786573",
  appId: "1:60054786573:web:050d80e7c232a0b5077b44",
  measurementId: "G-V4XEPE3YKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth};
