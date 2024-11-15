import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import { useEffect, useState } from "react";
import {getFirestore, collection, addDoc, getDoc, query, where, updateDoc} from 'firebase/firestore'

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


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

const firestore = getFirestore(app)

// Store data in Real Time Database in Tree Structure
const putData = (key, data) => set(ref(database, key), data)

// Here to handle promises we can also use await and async......
const cretaeUer = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(val => {console.log("SignUp Successfully", val)})
}

const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(val => {console.log("Login Successfully", val)})    
}


// Login through Google Auth
const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((val) => {console.log("Google Login Successful:", val)});
}


// For change status login or logout 
const [user, setUser] = useState(null);

useEffect(() => {
    const statechange  = onAuthStateChanged(firebaseAuth, (user) => {
        setUser(user)
    })
    return () => statechange();
}, [])

if (user === null) {
    // Please Login if Aready account or SignUp if new user
    <>
        <button onClick={() => {cretaeUer(); 
            putData("users/", {email, password})}}>
            Login
        </button>
        <button onClick={() => {signInUser(); 
            putData("users/", {email, password})}}>
            SignUp
        </button>
        <button onClick={signInWithGoogle}>Google</button>
        <button onClick={writeData}>Put Data</button>
        <button onClick={getDocumentByQuery}>get Data</button>
        <button onClick={update}>update Data</button>

    </>
}else {
    // Logout Button Show
    <button onClick={() => signOut(auth)}>Logout</button>
}


const writeData = async () => {
    const userData = await addDoc(collection(firestore, 'users'), {
        name : 'username',
        email: "user@email.com",
        age : 22
    });
    console.log("user data" , userData)
}

const getDocumentByQuery = async () => {
    const collectionRef = collection(firestore, "users");
    const queryData = query(collectionRef, where("IsMale",  "==", true))
    const snapDta = await getDoc(queryData);
    snapDta.forEach((data) => console.log(data.data()))
}

const update =  async () => {
    const docRef  = doc(firestore, "users", "sdfIuhUI9BY7hhY6");
    await updateDoc(docRef, {
        nma: 'new name'
    })
}