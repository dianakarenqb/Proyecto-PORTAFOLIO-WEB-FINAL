import firebase from 'firebase/app'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyBu5UhhOl8ujrZ-MEW7zfN7ZUpHUA8KzxE",
    authDomain: "mi-portafolio-578b8.firebaseapp.com",
    projectId: "mi-portafolio-578b8",
    storageBucket: "mi-portafolio-578b8.appspot.com",
    messagingSenderId: "416738328838",
    appId: "1:416738328838:web:d277ad7b39fc56474b1e87"
  };
  
const fb =  firebase.initializeApp(firebaseConfig);
export const db =  fb.firebase()