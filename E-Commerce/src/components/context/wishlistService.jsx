import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useUser } from './userService';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../Firebase/Firebase';


const WishlistContext = createContext();

const useWishlist = () => { 
    return useContext(WishlistContext);
};

const WishlistProvider = ({ children }) => {

    const { user } = useUser(); 
    const [wishlist, setWishlist] = useState([])

    useEffect(()=> {
        if (user) {
            try {
                const wishlistDocRef = doc(firestore, 'wishlists', user.uid);
                const savedProdWishList = async () => {
                    const wishlistDoc = await getDoc(wishlistDocRef)
                    if(wishlistDoc.exists()){
                        const saveData = wishlistDoc.data().wishlist || [];
                        setWishlist(saveData.map((item) => ({...item, id: item.productId})))
                    }
                }
                savedProdWishList()
            } catch (error) {
                console.error('Error fetching Wishlist:', error);
            }
        }else {
            setWishlist([])
        }
    }, [user])

    const firestoreWishlist = async (updateList) => {
        const wishlistItem = updateList.map((item) => ({productId: item.id, userId: user.uid, ProductName: item.name, price: item.price}))
        await setDoc(doc(firestore, 'wishlists', user.uid), {wishlist: wishlistItem})
    }

    const addProdToWishList = (product) => {
        const prodAlready = Array.isArray(wishlist) ? wishlist.find((item) => item.id === product.id) : null
        if(prodAlready){
          toast.error("Product Already in WishList")
          return;
        } 
        const newWishList = Array.isArray(wishlist) ? [...wishlist, product] : [product];
        setWishlist(newWishList)
        toast.success('Product Added To WishList...')
        firestoreWishlist(newWishList)
    }

    const deleteWishItem = (itemId) => {
        const deleteProd =  wishlist.filter(item =>  item.id !== itemId) 
        setWishlist(deleteProd)
        firestoreWishlist(deleteProd)
    }


    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist, addProdToWishList, deleteWishItem }}>
            {children}
        </WishlistContext.Provider>
    );
}

export { useWishlist, WishlistProvider };
