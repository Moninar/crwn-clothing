import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdtJ2_8FCn2y3stJcjKRO_aHugIALDVLo",
    authDomain: "crwn-db-d18ae.firebaseapp.com",
    databaseURL: "https://crwn-db-d18ae.firebaseio.com",
    projectId: "crwn-db-d18ae",
    storageBucket: "",
    messagingSenderId: "470018787015",
    appId: "1:470018787015:web:915fc28525801be4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;