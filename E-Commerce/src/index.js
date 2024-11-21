import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './components/context/cartService';
import { WishlistProvider } from './components/context/wishlistService';
import { OrdersHistoryProvider } from './components/context/orderHistoryService';
import { ProductProvider } from './components/context/productService';
import { UserProvider } from './components/context/userService';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <OrdersHistoryProvider>
            <App />
          </OrdersHistoryProvider>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </UserProvider>
);

