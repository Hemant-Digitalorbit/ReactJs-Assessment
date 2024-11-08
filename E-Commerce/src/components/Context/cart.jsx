import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

const useCart = () => {
    return useContext(CartContext);
};

const CartProvider = ({ children }) => {  
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addProdToCart = (product) => {
        setCart((prev) => {
            const prodAlready = prev.find((item) => item.id === product.id);
            let newCart;
            if (prodAlready) {
                newCart = prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                toast.error('Product Already in Cart');
            } else {
                newCart = [...prev, { ...product, quantity: 1 }];
                toast.success('Product Added Successfully...');
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    // cart functionalities
    const increseQnt = (itemId) => {
        const changeCart = cart.map(item =>  item.id === itemId ? {...item, quantity: item.quantity + 1} : item) 
        setCart(changeCart)
        localStorage.setItem("cart", JSON.stringify(changeCart))
    }
    const decreaseQnt = (itemId) => {
        const changeCart = cart.map(item =>  item.id === itemId && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item) 
        setCart(changeCart)
        localStorage.setItem("cart", JSON.stringify(changeCart))
    }
    const deleteItem = (itemId) => {
        const changeCart =  cart.filter(item =>  item.id !== itemId) 
        setCart(changeCart)
        localStorage.setItem("cart", JSON.stringify(changeCart))
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addProdToCart, increseQnt, decreaseQnt, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
};


export {useCart, CartProvider}