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
  appId: "1:71538177535:web:44baa1928757492ef5a3ca",
  measurementId: "G-GJJMQXK83E",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log("createUserProfileDocument -> snapShot", snapShot, "////////");
    if (!snapShot.exists) {
      //if user dont exists, create new user
      const { displayName, email } = userAuth;
      console.log("createUserProfileDocument -> displayName", displayName);
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("createUserProfileDocument -> error", error.message);
      }
    }
    return userRef;
  }
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
