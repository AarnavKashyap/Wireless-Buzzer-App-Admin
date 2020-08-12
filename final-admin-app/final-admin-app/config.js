import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVpNjmTcWUoGKqK_Qpc0gCcS5oAmq0pZM",
  authDomain: "wireless-buzzer-31081.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-31081.firebaseio.com",
  projectId: "wireless-buzzer-31081",
  storageBucket: "wireless-buzzer-31081.appspot.com",
  messagingSenderId: "98961364023",
  appId: "1:98961364023:web:523ea4f4be0c965ea0dbb2"
};


// Initialize Firebase

  firebase.initializeApp(firebaseConfig);


export default  firebase.database()