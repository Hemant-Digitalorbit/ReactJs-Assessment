import React, { useEffect } from "react";
import banner from '../assets/images/Frame 114.png';
import { orders, reviews } from "../assets/Data/data";
import '../assets/styles/HomePage.css';
import LoginModal from "../components/features/auth/LoginModal";
import BestsellersSection from "../components/sections/BestsellersSection";
import CategoriesSection from "../components/sections/CategoriesSection";
import PopularProductsSection from "../components/sections/PopularProductsSection";
import BrandsSection from "../components/sections/BrandsSection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useUser } from "../components/context/userService";
import { useProduct } from "../components/context/productService";
import LandingPage from "./LandingPage";


function HomePage() {

  const {user, isAgeVerified, showLogin, setShowLogin} = useUser();
  const {products, categories, brands} = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    const ageVerifiedSession = sessionStorage.getItem("isAgeVerified");
    if (!isAgeVerified && !ageVerifiedSession) {
      navigate("/age-verify");  
      sessionStorage.setItem("isAgeVerified", "true");
    }
  }, [isAgeVerified, navigate]);

  return (
    <>
      <Header />
      { user ? (
          <>
            {/* Bannner Image for window */}
            <div className="homeContent">
              <img src={banner} alt="banner" />
            </div>
            {/* Banner for mobile */}
            <div className="mobileContent">
              <svg width="390" height="557" viewBox="0 0 390 557" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="390" height="557" fill="#FCB84E"/>
              </svg>
              <div className="mobileContent-heading">
                <h4>20% off on first purchase</h4>
                <Link to={'/products/products/:heading'}><button>Order Now</button></Link>
              </div>
            </div>
            <CategoriesSection heading="Categories" categories={categories} />
            <BestsellersSection heading="Best Sellers" products={products} orders={orders} />
            <PopularProductsSection heading="Popular" products={products} reviews={reviews}/>
            <BrandsSection heading="Brands" brands={brands} />
          </>
        ) : (
          <LandingPage />
        )
      }
      {
        showLogin && (
          <LoginModal closeModel={() => setShowLogin(false)} />
        )
      }
    <Footer />
    </>
  );
}

export default HomePage;
