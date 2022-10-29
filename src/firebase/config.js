// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdK4CklQy19aw1QSW0sTdRrgGD_3Z8woA",
  authDomain: "computacion-otto.firebaseapp.com",
  projectId: "computacion-otto",
  storageBucket: "computacion-otto.appspot.com",
  messagingSenderId: "1068249582427",
  appId: "1:1068249582427:web:f116927ca45b45e271e87e",
  measurementId: "G-E5C4KKWK1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);