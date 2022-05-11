import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX-FxSFh83FXyPEXAO46YH7mXrtZfcMdw",
    authDomain: "react-todolist-2d9f4.firebaseapp.com",
    projectId: "react-todolist-2d9f4",
    storageBucket: "react-todolist-2d9f4.appspot.com",
    messagingSenderId: "533956036953",
    appId: "1:533956036953:web:489b8064422d95c13ce448"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Referencia a Base de Datos - Fire Store */
const db = firebase.firestore();

/* Permite hacer autenticación con Google */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}