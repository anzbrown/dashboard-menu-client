import firebase from 'firebase/app';
import 'firebase/auth';
const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseApp = firebase.initializeApp({
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
});
export const auth = firebase.auth();
auth.useDeviceLanguage();

// FB Auth provider config
export const fbAuthProvider = new firebase.auth.FacebookAuthProvider();
fbAuthProvider.addScope('user_birthday');
fbAuthProvider.setCustomParameters({
    display: 'popup',
});

// Google Auth provider config
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope(
    'https://www.googleapis.com/auth/contacts.readonly'
);
googleAuthProvider.setCustomParameters({
    login_hint: 'user@example.com',
});
export default firebaseApp;
