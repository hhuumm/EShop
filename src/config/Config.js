import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage' 


const firebaseConfig = {
    apiKey: "AIzaSyDVcgckAqqHt4RbvqMhwkSNwx2wA2BkUD0",
    authDomain: "eshop-8d566.firebaseapp.com",
    projectId: "eshop-8d566",
    storageBucket: "eshop-8d566.appspot.com",
    messagingSenderId: "498140630425",
    appId: "1:498140630425:web:15acb05ef1573bd91dd708",
    measurementId: "G-GBKJ33FLJK"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();


  export {auth, db, storage}