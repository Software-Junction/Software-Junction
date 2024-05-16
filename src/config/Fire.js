import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");
require("firebase/storage")

const config = {

  apiKey: "AIzaSyCiNQ5FEquvK8dTGfMvqTxaIyeyG033yEs",
  authDomain: "software-bazaar.firebaseapp.com",
  databaseURL: "https://software-bazaar-default-rtdb.firebaseio.com",
  projectId: "software-bazaar",
  storageBucket: "software-bazaar.appspot.com",
  messagingSenderId: "235966636194",
  appId: "1:235966636194:web:5ba8fe41fbaa6e5ebf77fb",
  measurementId: "G-751JK6N41E"

};

const fire = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();

export default fire;