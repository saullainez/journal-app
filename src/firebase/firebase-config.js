import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "",
    authDomain: "react-journal-app-816a5.firebaseapp.com",
    projectId: "react-journal-app-816a5",
    storageBucket: "react-journal-app-816a5.appspot.com",
    messagingSenderId: "123486549875",
    appId: "1:123486549875:web:79c3d8e4e68520082e3706"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}