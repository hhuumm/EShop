import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getStorage,  ref, uploadBytes } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDVcgckAqqHt4RbvqMhwkSNwx2wA2BkUD0",
    authDomain: "eshop-8d566.firebaseapp.com",
    projectId: "eshop-8d566",
    storageBucket: "eshop-8d566.appspot.com",
    messagingSenderId: "498140630425",
    appId: "1:498140630425:web:15acb05ef1573bd91dd708",
    measurementId: "G-GBKJ33FLJK"
  };

  const app =initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const storageref=ref(storage,'images')

  function upload()
  {
    
  }


  export {auth, db, storage}