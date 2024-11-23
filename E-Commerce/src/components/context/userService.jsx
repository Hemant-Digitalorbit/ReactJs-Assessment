    import React, { createContext, useContext, useEffect, useState } from 'react';
    import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
    import {doc, getDoc, setDoc} from 'firebase/firestore'
    import toast from 'react-hot-toast';
    import { firebaseAuth, firestore } from '../Firebase/Firebase';

    const googleProvider = new GoogleAuthProvider();

    const UserContext = createContext();

    export const useUser = () => {
        return useContext(UserContext);
    };

    export const UserProvider = ({children}) => {
        const [user, setUser] = useState(null);
        const [showLogin, setShowLogin] = useState(false);
        const [isAgeVerified, setIsAgeVerified] = useState(false);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            const unlogged  = onAuthStateChanged(firebaseAuth, (user) => {
                setUser(user)
            })
            return () => unlogged();
        }, [])

        const signUp = async (name, email, password) => {
            try {
                setLoading(true);
                setShowLogin(false);
                const userSignup = await createUserWithEmailAndPassword(firebaseAuth, email, password);
                const user = userSignup.user;
                await setDoc(doc(firestore, 'users', user.uid), {
                    user : {uid: user.uid, name: user?.displayName, email: user.email, createdAt: new Date().toISOString()}
                })
                setUser(user);
                toast.success(`Successfully Registered`);
            } catch {
                toast.error('Registration Failed');
            }
        }
        
        const signIn = async (email, password) => {
            try{
                setLoading(true);
                setShowLogin(false);
                const userLogin = await signInWithEmailAndPassword(firebaseAuth, email, password)
                const user = userLogin.user;
                const userExist = await getDoc(doc(firestore, 'users', user.uid));
                if(userExist.exists()){
                    const userData = userExist.data();
                    setUser(user);
                    if (!user.displayName) {
                        await updateProfile(user, {
                            displayName: userData.user.name,
                        });
                        }
                    toast.success(`Welcome back, ${user.displayName}!`);
                }else {
                    toast.error("User Doesn't Exist. Please Register First");
                }
            }catch (error) {
                if (error.code === 'auth/user-not-found') {
                toast.error("User Doesn't Exist. Please Register First");
                } else {
                toast.error("Login Failed. Please Try Again");
                }
            }
        }

        const signInWithGoogle = async () => {
            setLoading(true);
            setShowLogin(false);
            const googleUser = await signInWithPopup(firebaseAuth, googleProvider)
            const user = googleUser.user;
            const userExist = await getDoc(doc(firestore, 'users', user.uid));
            if (!userExist.exists()) {
                await setDoc(doc(firestore, 'users', user.uid), { user : {
                    uid: user.uid, name: user.displayName, email: user.email, createdAt: new Date().toISOString()}
                })
            }    
            setUser(user);
            toast.success(`Welcome back, ${user?.displayName}!`);
        }

        
        // Handle logout functionality
        const handleLogout = () => {
            signOut(firebaseAuth);
            setUser(null)
        };  
        

        return (
            <UserContext.Provider 
                value={{user, 
                    setUser, 
                    signUp, 
                    signIn, 
                    signInWithGoogle, 
                    handleLogout, 
                    showLogin, 
                    setShowLogin, 
                    isAgeVerified, 
                    setIsAgeVerified,
                    loading}}>
                {children}
            </UserContext.Provider>
        )
    }