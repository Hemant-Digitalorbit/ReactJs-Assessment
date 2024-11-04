import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import { customer } from './Data/data'
import AgeVerification from "./Pages/AgeVerificationPage"
import { Toaster } from "react-hot-toast"
import FilterPage from "./components/FilterPage/FilterPage"
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);  
    }
  }, []);

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

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };
  
  const ProtectedRoute = ({ children }) => {
    return isAgeVerified ? children : <Navigate to="/age-verification" />
  };

  return (
    <Router>
      <Toaster />

      <Header setShowLogin={() => setShowLogin(true)} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      <Routes>
        <Route path="/age-verification" element={<AgeVerification setIsAgeVerified={setIsAgeVerified} />} />

        <Route path="/" element={
          <ProtectedRoute>
              <HomePage props={{showLogin, setShowLogin, isLoggedIn, handleLogin, handleLogout}} />
          </ProtectedRoute>
        } />

        <Route path="/products/:brandId" element={
            <ProtectedRoute>
              <FilterPage />
          </ProtectedRoute>
        } />
        
      </Routes> 

      <Footer />

    </Router>
  );
}

export default App;
