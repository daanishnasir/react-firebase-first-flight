
  /* eslint-disable */ 

import firebase from 'firebase'; 

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCSKM7R90iTephYGA-b9VVMetxht3urgyI",
    authDomain: "fir-uno-1ec98.firebaseapp.com",
    databaseURL: "https://fir-uno-1ec98.firebaseio.com",
    projectId: "fir-uno-1ec98",
    storageBucket: "",
    messagingSenderId: "120071096873"
  };

  firebase.initializeApp(config);

  export default config; 

  export const database = firebase.database();


