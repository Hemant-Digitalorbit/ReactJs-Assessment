import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from './userService';
import toast from 'react-hot-toast';


const WishlistContext = createContext();

const useWishlist = () => {
    return useContext(WishlistContext);
};

const WishlistProvider = ({ children }) => {

    const { user } = useUser(); 
    const [wishlist, setWishlist] = useState([])

    
    useEffect(()=> {
        if (user) {
            const savedProdWishList = JSON.parse(localStorage.getItem(`wishlist${user?.id}`))
            setWishlist(savedProdWishList)
        }
    }, [user])

    const addProdToWishList = (product) => {
        const savedProdWishList = JSON.parse(localStorage.getItem(`wishlist${user.id}`)) || [];
        const prodAlready = Array.isArray(savedProdWishList) ? savedProdWishList.find((item) => item.id === product.id) : null
        if(prodAlready){
          toast.error("Product Already in WishList")
          return;
        } 
        const newWishList = [...savedProdWishList, product];
        localStorage.setItem(`wishlist${user.id}`, JSON.stringify(newWishList));
        console.log(newWishList)
        toast.success('Product Added To WishList...')
    }

    const deleteWishItem = (itemId) => {
        const deleteProd =  wishlist.filter(item =>  item.id !== itemId) 
        setWishlist(deleteProd)
        localStorage.setItem(`wishlist${user.id}`, JSON.stringify(deleteProd)) 
    }


    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist, addProdToWishList, deleteWishItem }}>
            {children}
        </WishlistContext.Provider>
    );
}

export { useWishlist, WishlistProvider };
