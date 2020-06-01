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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userAuth.uid);
  const snapshot = await userRef.get();
  console.log(userRef);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
