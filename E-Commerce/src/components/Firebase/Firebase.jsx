import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB2vqTJTupViRS5KUWKRjVFwmrl88pmYeY",
    authDomain: "candy-land-fe095.firebaseapp.com",
    projectId: "candy-land-fe095",
    storageBucket: "candy-land-fe095.firebasestorage.app",
    messagingSenderId: "526932090018",
    appId: "1:526932090018:web:34f1201ed0579cbcbc8bfb",
    measurementId: "G-RJZEYQPNPZ",
    databaseURL: "https://candy-land-fe095-default-rtdb.firebaseio.com"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);