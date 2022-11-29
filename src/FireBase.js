import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAHw2zCK3FCZor6CadvXEGKU05CGTaXRp0",
    authDomain: "maxflix-64cb4.firebaseapp.com",
    projectId: "maxflix-64cb4",
    storageBucket: "maxflix-64cb4.appspot.com",
    messagingSenderId: "23491704126",
    appId: "1:23491704126:web:6a48cb1c8ca841b6b2a86f"
  };

const app = firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth()
export {auth}