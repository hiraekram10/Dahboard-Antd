
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_NH8D-i2QZ4U0f2p8MKhb7OmXulEPxrc",
  authDomain: "myinhale-9c79f.firebaseapp.com",
  projectId: "myinhale-9c79f",
  storageBucket: "myinhale-9c79f.firebasestorage.app",
  messagingSenderId: "939774046421",
  appId: "1:939774046421:web:8c59f1909732db310ab25c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged}