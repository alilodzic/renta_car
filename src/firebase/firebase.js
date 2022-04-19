// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaI1Fv7QwnO3PC2-yiQvVeC-RT5UH1lRU",
  authDomain: "auth-test-3c220.firebaseapp.com",
  projectId: "auth-test-3c220",
  storageBucket: "auth-test-3c220.appspot.com",
  messagingSenderId: "716100776456",
  appId: "1:716100776456:web:10ffef3d17942a6f5357bd",
  measurementId: "G-QR1S5HZWQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);