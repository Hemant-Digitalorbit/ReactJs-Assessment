import {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import AgeConfirmation from "./components/features/auth/AgeConfirmation";
import FilterPage from "./pages/FilterPage"; 
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AccountPage from "./components/features/profile/AccountPage";
import OrderHistory from "./components/features/profile/OrderHistory";
import TrackOrder from "./components/features/profile/TrackOrder";
import ProfilePage from "./components/features/profile/ProfilePage";
import ContactPage from "./pages/ContactPage";

 

function App() {


  return (
    <Router>
      <Toaster />
      <Routes>

        <Route path="/age-verify" element={<AgeConfirmation />} />

        <Route path="/" element={<HomePage />} />

        <Route path="/products/brands/:brandId" element={<FilterPage />} />

        <Route path="/products/categories/:categoryId" element={<FilterPage  />} />

        <Route path="/products/products/:heading" element={<FilterPage  />} />

        <Route path="/cartpage" element={<CartPage  />} />

        <Route path="/wishlist" element={<WishListPage />} />

        <Route path="/account" element={<AccountPage  props={{ }} />} >
          <Route path="orders-history" element={<OrderHistory />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="/product/:productId" element={<ProductDetailPage  />} />

      </Routes> 
    </Router>
  );
}

export default App;
