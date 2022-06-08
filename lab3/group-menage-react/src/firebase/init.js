// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADeKeoeIYzMyk0fAsWQS8Yww5UBUJQVD4",
  authDomain: "children-day-89231.firebaseapp.com",
  projectId: "children-day-89231",
  storageBucket: "children-day-89231.appspot.com",
  messagingSenderId: "230580975886",
  appId: "1:230580975886:web:ce30d09db808a70ff63f5f",
  measurementId: "G-7RBLKNWCF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);