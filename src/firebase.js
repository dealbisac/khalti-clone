import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1x-i4QMstVW8hs5zcJ6uIwOycPLai2Ds",
    authDomain: "khalti-clone.firebaseapp.com",
    databaseURL: "https://khalti-clone.firebaseio.com",
    projectId: "khalti-clone",
    storageBucket: "khalti-clone.appspot.com",
    messagingSenderId: "892322715275",
    appId: "1:892322715275:web:798284f286dc62176a668e",
    measurementId: "G-W68GTDBNPH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;