import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJEHIkES8iKpJji2wy6NprnbRa94iZb6o",
  authDomain: "todo-list-clone.firebaseapp.com",
  projectId: "todo-list-clone",
  storageBucket: "todo-list-clone.appspot.com",
  messagingSenderId: "751459418733",
  appId: "1:751459418733:web:3c8a75d976f4882a60f564",
  measurementId: "G-VTNHS308WC",
});

const db = firebaseApp.firestore();

export default db;
