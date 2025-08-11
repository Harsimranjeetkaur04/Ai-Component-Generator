// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBQG_Pqf2OvHb8NEoCy6oiMVdkeQ0bYeEY",
  authDomain: "component-generator-bca73.firebaseapp.com",
  projectId: "component-generator-bca73",
  storageBucket: "component-generator-bca73.firebasestorage.app",
  messagingSenderId: "640929017449",
  appId: "1:640929017449:web:f0475a14151c3189803cf8",
  measurementId: "G-FZEPZ1CNEK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };

