import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/features/services/cartService';
import HomePage from "./pages/HomePage";
import { customer } from './Data/data';
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

 

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [ordersHistory, setOrdersHistory] =  useState([])
  const [submitReview, setSumitReview] = useState([])
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true)
      const savedOrders = JSON.parse(localStorage.getItem(`orderHistory_${user?.id}`)) || []
      setOrdersHistory(savedOrders)
    }
  }, []);

  // Handle login functionality
  const handleLogin = (email, password) => {
    const user = customer.find((u) => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } else {
      return null;
    }
  };
  // Handle logout functionalit  y
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <CartProvider user={user}>
    <Router>
      <Toaster />
      <Routes>

        <Route path="/age-verify" element={<AgeConfirmation setIsAgeVerified={setIsAgeVerified} />} />

        <Route path="/" element={<HomePage props={{ showLogin, setShowLogin, isLoggedIn, isAgeVerified, handleLogin, handleLogout, user, wishlist, setWishlist }} />} />

        <Route path="/products/brands/:brandId" element={<FilterPage  props={{ isLoggedIn,  isAgeVerified, wishlist, setWishlist, handleLogout, user }}  />} />

        <Route path="/products/categories/:categoryId" element={<FilterPage  props={{ isLoggedIn,  isAgeVerified, handleLogout, user, wishlist, setWishlist}}  />} />

        <Route path="/products/products/:heading" element={<FilterPage  props={{ isLoggedIn,  isAgeVerified, handleLogout, user, wishlist, setWishlist }}  />} />

        <Route path="/cartpage" element={<CartPage  props={{  isLoggedIn,  setShowLogin, handleLogout, user, ordersHistory, setOrdersHistory, wishlist, setWishlist, }} />} />

        <Route path="/wishlist" element={<WishListPage  props={{ isLoggedIn,  setShowLogin, handleLogout, wishlist, setWishlist, user }} />} />

        <Route path="/account" element={<AccountPage  props={{ isLoggedIn,  setShowLogin, handleLogout, wishlist, setWishlist, }} />} >
          <Route path="orders-history" element={<OrderHistory user={user} props={{ordersHistory, setOrdersHistory, submitReview, setSumitReview}} />} />
          <Route path="profile" element={<ProfilePage user={user} />} />
          <Route path="track-order" element={<TrackOrder user={user} />} />
        </Route>

        <Route path="/product/:productId" element={<ProductDetailPage  props={{ isLoggedIn,  setShowLogin, handleLogout, user,submitReview, setSumitReview,wishlist, setWishlist, }} />} />

      </Routes> 
    </Router>
    </CartProvider>
  );
}

export default App;
