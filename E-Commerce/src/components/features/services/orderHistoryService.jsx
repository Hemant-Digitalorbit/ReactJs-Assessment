import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from './userService';

const OrdersHistoryContext = createContext();

const useOrdersHistory = () => {
    return useContext(OrdersHistoryContext)
}

const OrdersHistoryProvider = ({children}) => {
    const {user} = useUser();
    const [ordersHistory, setOrdersHistory] =  useState([]);
    const [submitReview, setSumitReview] = useState([]);

    useEffect(() => {
        if (user) {
            const storedOrders = JSON.parse(localStorage.getItem(`orders${user.id}`)) || [];
            setOrdersHistory(storedOrders);
            const prodRev = JSON.parse(localStorage.getItem('productreviews')) || []
            setSumitReview(prodRev)
        }else {
            setOrdersHistory([]);
        }
    }, [user]);


    return (
        <OrdersHistoryContext.Provider value={{ordersHistory, setOrdersHistory, submitReview, setSumitReview}}>
            {children}
        </OrdersHistoryContext.Provider>
    )
}

export {useOrdersHistory, OrdersHistoryProvider}