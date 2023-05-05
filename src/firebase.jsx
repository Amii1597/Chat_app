import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwLHBw8mUXZwDfXAnmTmGHIpdOAtqsTkE",
    authDomain: "amishachat-5aa54.firebaseapp.com",
    projectId: "amishachat-5aa54",
    storageBucket: "amishachat-5aa54.appspot.com",
    messagingSenderId: "689152393369",
    appId: "1:689152393369:web:98474ca9ed812c0bf83808"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
//   const auth = firebase.auth();
  export default db;