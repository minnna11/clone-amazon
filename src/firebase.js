import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlyifygiac_yMA2WKpv5FCMQurla4md8I",
    authDomain: "clone-d25b7.firebaseapp.com",
    projectId: "clone-d25b7",
    storageBucket: "clone-d25b7.appspot.com",
    messagingSenderId: "558853888597",
    appId: "1:558853888597:web:3b11f0863929ba44a012dc",
    measurementId: "G-P79EWJCCZC"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
  
export { db, auth, provider };