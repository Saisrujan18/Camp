// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOOqkBD0WJoUPCgnlovUwXvZzKQLy47tM",
  authDomain: "camp-977d1.firebaseapp.com",
  projectId: "camp-977d1",
  storageBucket: "camp-977d1.appspot.com",
  messagingSenderId: "510694038798",
  appId: "1:510694038798:web:5781b67bcf9c35ed840b5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;