    import React, { createContext, useContext, useEffect, useState } from 'react';
    import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
    import {arrayUnion, doc, getDoc, setDoc, updateDoc} from 'firebase/firestore'
    import toast from 'react-hot-toast';
    import { firebaseAuth, firestore } from '../Firebase/Firebase';
    import cookies from 'js-cookie';


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
        const [openAddModel, setOpenAddModel] = useState(false);
        const [addresses, setAddresses] = useState([]);


        useEffect(() => {
            const unlogged  = onAuthStateChanged(firebaseAuth, async(user) => {
                if (user) {
                    setUser(user)
                    cookies.set('user', JSON.stringify({uid: user.uid, email: user.email, displayName: user.displayName}), {expires: 7})
                    await fetchAddresses(user.uid)
                }else {
                    setUser(null)
                    cookies.remove('user')
                }
            })
            return () => unlogged();
        }, [])

        const signUp = async ( email, password) => {
            try {
                setLoading(true);
                setShowLogin(false);
                const userSignup = await createUserWithEmailAndPassword(firebaseAuth, email, password);
                const user = userSignup.user;
                await setDoc(doc(firestore, 'users', user.uid), {
                    user : {uid: user.uid, name: user?.displayName, email: user.email, createdAt: new Date().toISOString()}
                })
                setUser(user);
                cookies.set('user', JSON.stringify({uid: user.uid, email: user.email, displayName: user.displayName}), {expires: 7})
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
                    cookies.set('user', JSON.stringify({uid: user.uid, email: user.email, displayName: user.displayName}), {expires: 7})
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
            cookies.set('user', JSON.stringify({uid: user.uid, email: user.email, displayName: user.displayName}), {expires: 7})
            toast.success(`Welcome back, ${user?.displayName}!`);
        }

        // Handle logout functionality
        const handleLogout = () => {
            signOut(firebaseAuth);
            setUser(null)
            cookies.remove('user')
            toast.success('Logged out successfully');
        };

        const fetchAddresses = async (userId) => {
            try {
                const userDocRef = doc(firestore, 'users', userId);
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setAddresses(userData?.user?.addresses || []);
                }
            } catch (error) {
                console.error('Error fetching addresses:', error);
                toast.error('Failed to load addresses.');
            }
        };
        
        const handleSaveOrEditAddress = async (address) => {
            try {
                const addDocRef = doc(firestore, 'users', user.uid);
                const addrDoc = await getDoc(addDocRef);
                if (addrDoc.exists()) {
                    const userData = addrDoc.data();
                    const currentAddresses = userData?.user?.addresses || [];
                    let updatedAddresses;
                    if (addresses) {
                        updatedAddresses = currentAddresses.map((addr) => addr.id === address.id ? address : addr);
                        toast.success('Address updated successfully!');
                    } else {
                        const addressWithId = { ...address, id: user.uid };
                        updatedAddresses = [...currentAddresses, addressWithId];
                        toast.success('Address saved successfully!');
                    }
                    await updateDoc(addDocRef, { 'user.addresses': updatedAddresses });
                    setAddresses(updatedAddresses);
                    setOpenAddModel(false);
                } 
            } catch (error) {
                console.error('Error saving or updating address:', error);
                toast.error('Failed to save or update address. Please try again.');
            }
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
                    handleSaveOrEditAddress,
                    addresses,
                    setAddresses,
                    openAddModel,
                    setOpenAddModel,
                    loading}}>
                {children}
            </UserContext.Provider>
        )
    }