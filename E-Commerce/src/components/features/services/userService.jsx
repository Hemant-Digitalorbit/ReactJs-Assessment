import React, { createContext, useState, useContext, useEffect } from 'react';
import { customer } from '../../../Data/data';


const UserContext = createContext();

const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isAgeVerified, setIsAgeVerified] = useState(false);
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, [])

    // Handle login functionality
    const handleLogin = (email, password) => {
        const user = customer.find((u) => u.email === email && u.password === password);
        if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
        } else {
        return null;
        }
    };
    

    // Handle logout functionalit  y
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        setUser([]);
    };

    return (
        <UserContext.Provider value={{user, setUser, handleLogin, handleLogout, isLoggedIn, setIsLoggedIn,
        showLogin, setShowLogin, isAgeVerified, setIsAgeVerified}}>
            {children}
        </UserContext.Provider>
    )

}

export {useUser, UserProvider}