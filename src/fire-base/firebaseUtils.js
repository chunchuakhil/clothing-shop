import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC7q2roTT7qh0iu9cSptIlo_BmI0f4NsB0",
  authDomain: "crwn-db-89b7e.firebaseapp.com",
  databaseURL: "https://crwn-db-89b7e.firebaseio.com",
  projectId: "crwn-db-89b7e",
  storageBucket: "crwn-db-89b7e.appspot.com",
  messagingSenderId: "71538177535",
  appId: "1:71538177535:web:610093da423dd4cdf5a3ca",
  measurementId: "G-E7MLEX62S2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
