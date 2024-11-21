import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from './userService';
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { useCart } from './cartService';
import { firestore } from '../Firebase/Firebase';

const OrdersHistoryContext = createContext();

const useOrdersHistory = () => {
    return useContext(OrdersHistoryContext)
}

const OrdersHistoryProvider = ({children}) => {
    const {user} = useUser();
    const {cart} = useCart();
    const [ordersHistory, setOrdersHistory] =  useState([]);
    const [submitReview, setSumitReview] = useState([]);
    const [showModel, setShowModel] = useState(false);
    const [modelProduct, setModelProduct] = useState('')
    const [rating, setRating] = useState('')
    const [review, setReview]= useState('')
    const [hover, setHover] = useState('')


    useEffect(() => {
        const fetchOrdersHistory = async () => {
            if (user) {
                try {
                    const ordersDocRef = doc(firestore, 'orders', user.uid);
                    const ordersDoc = await getDoc(ordersDocRef);
                    if (ordersDoc.exists()) {
                        const orders = ordersDoc.data().orders || [];
                        setOrdersHistory(orders.map((item) => ({...item, id: item.productId})));
                    } else {
                        setOrdersHistory([]);
                    }               
                } catch (error) {
                    console.error('Error fetching orders or reviews:', error);
                    setOrdersHistory([]);
                }
            }
        }
        fetchOrdersHistory()
    }, [user]);

    const saveOrdersToFirestore = async (updateOrders) => {
        const orderItem = updateOrders.map((item) => ({productId: item.id, userId: user.uid, date: new Date().toLocaleDateString(), quantity: item.quantity, price: item.price  }))
        await setDoc(doc(firestore, 'orders', user.uid), { orders: orderItem });
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        const addReview = { productId: modelProduct.id, userId: user.uid, reviewerName: user?.displayName, rating, review}
        const reviewsColl = collection(firestore, "reviews");
        await addDoc(reviewsColl, addReview);
        toast.success("Review submitted successfully!")
        setShowModel(false) 
        setReview('')
        setRating('')
        setHover('')
    }

    const checkoutCart = () => {
        let newOrd = cart.map(item  => ({...item, userId: user.uid, date: new Date().toLocaleDateString()}));
        setOrdersHistory([...ordersHistory, ...newOrd])
        saveOrdersToFirestore([...ordersHistory, ...newOrd])
    }

    return (
        <OrdersHistoryContext.Provider value={{ordersHistory, setOrdersHistory, submitReview, setSumitReview, handleSubmitReview,
            showModel, setShowModel, modelProduct, setModelProduct, rating, setRating, review, setReview, checkoutCart, hover, setHover}}>
            {children}
        </OrdersHistoryContext.Provider>
    )
}

export {useOrdersHistory, OrdersHistoryProvider}