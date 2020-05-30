import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5yapd7ATGm2MhFlBp7GdaqHkuMv9PHk8",
  authDomain: "crwn-clothing-781d8.firebaseapp.com",
  databaseURL: "https://crwn-clothing-781d8.firebaseio.com",
  projectId: "crwn-clothing-781d8",
  storageBucket: "crwn-clothing-781d8.appspot.com",
  messagingSenderId: "309219618566",
  appId: "1:309219618566:web:57b6484131d5dd0e357887",
  measurementId: "G-3QZ8X7QGDK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
