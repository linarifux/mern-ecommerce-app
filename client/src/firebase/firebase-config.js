// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD1jV318M6L_lcFKEWkC2GdBHJyVPYsc4Q",
    authDomain: "react-auth-test-e0392.firebaseapp.com",
    projectId: "react-auth-test-e0392",
    storageBucket: "react-auth-test-e0392.appspot.com",
    messagingSenderId: "11640398294",
    appId: "1:11640398294:web:c0c170c9d3e031710e4477",
    measurementId: "G-9CVG8XJ1LC"
};

const app = initializeApp(firebaseConfig)


export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
        console.log(result);
    }).catch(e => {
        console.log(e)
    })
}
