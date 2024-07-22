// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALrTYZaBbXsP36t-rXYW70OP-0D_zuL1E",
  authDomain: "mailbox-f1c27.firebaseapp.com",
  projectId: "mailbox-f1c27",
  storageBucket: "mailbox-f1c27.appspot.com",
  messagingSenderId: "21877759332",
  appId: "1:21877759332:web:d2d238fc82b98c5e2eae71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{auth,db};