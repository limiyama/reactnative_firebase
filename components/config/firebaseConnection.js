import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBVluZdyI3OmM8V631vZJhGZSSbr3_uXQE",
  authDomain: "fir-pam-e1cdc.firebaseapp.com",
  projectId: "fir-pam-e1cdc",
  storageBucket: "fir-pam-e1cdc.appspot.com",
  messagingSenderId: "36932690095",
  appId: "1:36932690095:web:27fd0f0316cd619090f45a"
};

if(!firebase.app.length == 0) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;