import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection,addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDutvMcYHzUXAdbOAp_oNUf2webqCEPoHo",
  authDomain: "zerror-studios.firebaseapp.com",
  projectId: "zerror-studios",
  storageBucket: "zerror-studios.appspot.com",
  messagingSenderId: "44327319742",
  appId: "1:44327319742:web:710d2d049ad61d700446ef",
  measurementId: "G-52Y25Z4KH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db,collection,addDoc}
export default app