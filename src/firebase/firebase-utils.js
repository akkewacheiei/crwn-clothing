import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBKlyJ_F0H_w0hG5-g0BNeu_0ch0NPNve0",
  authDomain: "crwn-db-c4ca0.firebaseapp.com",
  databaseURL: "https://crwn-db-c4ca0.firebaseio.com",
  projectId: "crwn-db-c4ca0",
  storageBucket: "crwn-db-c4ca0.appspot.com",
  messagingSenderId: "431119325466",
  appId: "1:431119325466:web:77769b734ad1ef026434a3",
  measurementId: "G-FE12BQ9VC0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;