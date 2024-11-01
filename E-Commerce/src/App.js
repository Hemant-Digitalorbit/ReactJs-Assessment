import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AgeVerification from "./Pages/AgeVerificationPage";
import { Toaster } from "react-hot-toast";

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const ProtectedRoute = ({ children }) => {
    return isAgeVerified ? children : <Navigate to="/age-verification" />;
  };

  return (

    <Router>

      <Toaster />

      <Routes>
        
        <Route path="/age-verification" element={<AgeVerification setIsAgeVerified={setIsAgeVerified} />} />

        <Route path="/" element={ <ProtectedRoute> <HomePage /> </ProtectedRoute> } />

      </Routes>
      
    </Router>
  );
}

export default App;
