import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './components/features/services/userService';
import { CartProvider } from './components/features/services/cartService';
import { WishlistProvider } from './components/features/services/wishlistService';
import { OrdersHistoryProvider } from './components/features/services/orderHistoryService';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <CartProvider>
      <WishlistProvider>
        <OrdersHistoryProvider>
          <App />
        </OrdersHistoryProvider>
      </WishlistProvider>
    </CartProvider>
  </UserProvider>
);

