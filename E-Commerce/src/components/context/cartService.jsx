import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useUser } from './userService';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../Firebase/Firebase';

const CartContext = createContext();

const useCart = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => { 

    const { user } = useUser(); 
    const [cart, setCart] = useState([]);

    

    useEffect(() => {
        const savedCart = async () => {
            if (user) {
                const cartDocRef = doc(firestore, 'carts', user.uid)
                    const cartDoc = await getDoc(cartDocRef)
                    if(cartDoc.exists()){
                        const saveData  = cartDoc.data().cart;
                        setCart(saveData.map((item) => ({...item, id: item.productId})))
                    }
            }else {
                setCart([]);
            }
        }   
        savedCart();
    }, [user]);

    const firestoreCart = async (updateCart) => {
        const cartItem = updateCart.map((item) => ({productId: item.id, userId: user.uid, price: item.price, quantity: item.quantity}));
        await setDoc(doc(firestore, 'carts', user.uid), {cart: cartItem})
    }

    const addProdToCart = (product, quantity) => {
        setCart((prev) => {
            const prodAlready = prev.find((item) => item.id === product.id);
            let newCart;
            if (prodAlready) {
                newCart = prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + (Number(quantity)) } : item
                );
                toast.success('Product Quantity Added!');
            } else {
                newCart = [...prev, { ...product, quantity: 1}];
                toast.success('Product Added Successfully...');
            }
            firestoreCart(newCart)
            return newCart;
        });
    };

    // Cart functionalities
    const increseQnt = (itemId) => {
        const updatedCart = cart.map(item => 
            item.id === itemId ? {...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        firestoreCart(updatedCart)
    };

    const decreaseQnt = (itemId) => {
        const updatedCart = cart.map(item => 
            item.id === itemId && item.quantity > 1 ? {...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
        firestoreCart(updatedCart)};

    const deleteItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
        firestoreCart(updatedCart)};

    return (
        <CartContext.Provider value={{ cart, setCart, addProdToCart, increseQnt, decreaseQnt, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export { useCart, CartProvider };
