
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCczAVvttvs_Kpcnm1gjGjPdiQx6A8NlOg",
    authDomain: "react-preentrega-alaniz.firebaseapp.com",
    projectId: "react-preentrega-alaniz",
    storageBucket: "react-preentrega-alaniz.appspot.com",
    messagingSenderId: "493785407562",
    appId: "1:493785407562:web:8cd7f33115dcf205f2c6b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);