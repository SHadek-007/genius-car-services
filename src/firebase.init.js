// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId
  apiKey: "AIzaSyASMEZkp6tgcttPCFidvCyIjlmNIVzHllk",
  authDomain: "genius-car-services-m60.firebaseapp.com",
  projectId: "genius-car-services-m60",
  storageBucket: "genius-car-services-m60.appspot.com",
  messagingSenderId: "383987115490",
  appId: "1:383987115490:web:0c730d48aca4f7458a85bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;