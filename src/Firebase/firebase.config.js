// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsizYrU5qHWDoXVLbn7GGb4zEjyIys-3o",
  authDomain: "task-management-a1cca.firebaseapp.com",
  projectId: "task-management-a1cca",
  storageBucket: "task-management-a1cca.appspot.com",
  messagingSenderId: "883982883125",
  appId: "1:883982883125:web:b2cefeec7d354cb5fe547c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

 export default auth;

