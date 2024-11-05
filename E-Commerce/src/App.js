import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import { customer } from './Data/data';
import AgeVerification from "./Pages/AgeVerificationPage";
import { Toaster } from "react-hot-toast";
import FilterPage from "./components/FilterPage/FilterPage";
import CartPage from "./components/CartManagement/CartPage";
import WishListPage from "./components/WishList/WishListPage";

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  // Check for logged in user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
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
    <Router>
      <Toaster />
      <Routes>

        <Route path="/age-verify" element={<AgeVerification setIsAgeVerified={setIsAgeVerified} />} />

        <Route path="/" element={<HomePage props={{ showLogin, setShowLogin, isLoggedIn, isAgeVerified, handleLogin, handleLogout }} />} />

        <Route path="/products/:brandId" element={<FilterPage  props={{ isLoggedIn,  isAgeVerified, handleLogout }}  />} />

        <Route path="/cartpage" element={<CartPage  props={{  isLoggedIn,  isAgeVerified }} />} />

        <Route path="/wishlist" element={<WishListPage  props={{ isLoggedIn,  isAgeVerified }} />} />

      </Routes> 
    </Router>
  );
}

export default App;
