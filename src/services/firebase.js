// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdYj-lztv-ts_Pp_z3v_Zd5eteSmARrgM",
  authDomain: "students-app-9ed67.firebaseapp.com",
  projectId: "students-app-9ed67",
  storageBucket: "students-app-9ed67.firebasestorage.app",
  messagingSenderId: "633486808198",
  appId: "1:633486808198:web:2766d4f1c1460f6d996d07",
  measurementId: "G-JGJ1BHKE6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}