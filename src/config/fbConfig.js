import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDk3AJWGAjWy17D2cGYXJIhGDL25U1Tnmk",
  authDomain: "net-ninja-daa8f.firebaseapp.com",
  databaseURL: "https://net-ninja-daa8f.firebaseio.com",
  projectId: "net-ninja-daa8f",
  storageBucket: "net-ninja-daa8f.appspot.com",
  messagingSenderId: "132263180378"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
