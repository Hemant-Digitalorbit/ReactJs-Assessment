import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

const useCart = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children, user }) => {  
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (user) {
            const savedCart = localStorage.getItem(`cart_${user.id}`);
            setCart(savedCart ? JSON.parse(savedCart) : []);
        }else {
            setCart([]);
            localStorage.removeItem(`cart_${user?.id}`);
        }
    }, [user]);

    const addProdToCart = (product, quantity) => {
        setCart((prev) => {
            const prodAlready = prev.find((item) => item.id === product.id);
            let newCart;
            if (prodAlready) {
                newCart = prev.map((item) =>
                    item.id === product.id ? {date: Date.now(), ...item, quantity: item.quantity + quantity } : item
                );
                toast.error('Product Already in Cart');
            } else {
                newCart = [...prev, { ...product, quantity: 1,  cartCreaterName: user?.name}];
                toast.success('Product Added Successfully...');
            }
            localStorage.setItem(`cart_${user.id}`, JSON.stringify(newCart));
            return newCart;
        });
    };

    // Cart functionalities
    const increseQnt = (itemId) => {
        const updatedCart = cart.map(item => 
            item.id === itemId ? {date: Date.now(), ...item, quantity: item.quantity + 1, cartCreaterName: user?.name } : item
        );
        setCart(updatedCart);
        localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
    };

    const decreaseQnt = (itemId) => {
        const updatedCart = cart.map(item => 
            item.id === itemId && item.quantity > 1 ? {date: Date.now(), ...item, quantity: item.quantity - 1, cartCreaterName: user?.name } : item
        );
        setCart(updatedCart);
        localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
    };

    const deleteItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
        localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addProdToCart, increseQnt, decreaseQnt, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};

export { useCart, CartProvider };
