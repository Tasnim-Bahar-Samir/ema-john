// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmAoQhC-u14WLUOuIDx9sjT-lgZB9qdrc",
  authDomain: "simple-emajohn-ecommerce.firebaseapp.com",
  projectId: "simple-emajohn-ecommerce",
  storageBucket: "simple-emajohn-ecommerce.appspot.com",
  messagingSenderId: "253217576257",
  appId: "1:253217576257:web:5d1c7d013ba771d4577dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;