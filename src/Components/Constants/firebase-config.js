import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7a1zUAl7T2RVMBI5oYkorhvp31xObW_I",
  authDomain: "netflix-b4f64.firebaseapp.com",
  projectId: "netflix-b4f64",
  storageBucket: "netflix-b4f64.appspot.com",
  messagingSenderId: "655459203216",
  appId: "1:655459203216:web:8f6d7674e9d2dc3eefc015",
  measurementId: "G-E6V20YT71L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);