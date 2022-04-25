import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJZn00J5DF7qsEBDAEfuNiGhdvSltcGck",
  authDomain: "clone-71a06.firebaseapp.com",
  projectId: "clone-71a06",
  storageBucket: "clone-71a06.appspot.com",
  messagingSenderId: "826759839449",
  appId: "1:826759839449:web:4e6db4462ab0da28fcc8c8",
  measurementId: "G-6NC4193V44",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
