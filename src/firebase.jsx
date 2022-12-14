// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzBY6RACHpYMKAe9DSvjTRipy6NbLgOIY",
  authDomain: "adopt-a-friend-d3b81.firebaseapp.com",
  projectId: "adopt-a-friend-d3b81",
  storageBucket: "adopt-a-friend-d3b81.appspot.com",
  messagingSenderId: "215177113692",
  appId: "1:215177113692:web:695db5058f3e78ebbe7699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);
export const provider = new GoogleAuthProvider();

export {auth}
