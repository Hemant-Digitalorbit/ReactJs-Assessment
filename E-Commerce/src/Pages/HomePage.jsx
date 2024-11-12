import React from "react";
import banner from '../assets/images/Frame 114.png';
import { categories, products, orders, reviews, brands } from "../Data/data";
import { FaUser } from "react-icons/fa";
import '../assets/styles/HomePage.css';
import LoginModal from "../components/features/auth/LoginModal";
import BestsellersSection from "../components/sections/BestsellersSection";
import CategoriesSection from "../components/sections/CategoriesSection";
import PopularProductsSection from "../components/sections/PopularProductsSection";
import BrandsSection from "../components/sections/BrandsSection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function HomePage({props}) {

  let { showLogin, setShowLogin, isLoggedIn, handleLogin, handleLogout, user,  wishlist, setWishlist } = props;


  return (
    <>
      <Header setShowLogin={() => setShowLogin(true)} user={user} wishlist={wishlist} setWishlist={setWishlist} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      {/* Bannner Image */}
      <div className="homeContent">
        <img src={banner} alt="banner" />
      </div>

      {/* if login then show products */}
      {
        isLoggedIn ? (
          <>
            <CategoriesSection heading="Categories" categories={categories} />
            <BestsellersSection heading="Best Sellers" products={products} orders={orders} />
            <PopularProductsSection heading="Popular" products={products} reviews={reviews} />
            <BrandsSection heading="Brands" brands={brands} />
          </>
        ) : (
          <div className="login-prompt">
            <h2>Please login to see the products.</h2>
            <button onClick={() => setShowLogin(true)}><FaUser /> Login</button>
          </div>
        )
      }

      {/* to Show Login or Register form */}
      {
        showLogin && (
          <LoginModal 
            closeModel={() => setShowLogin(false)} 
            handleLogin={handleLogin}
          />
        )
      }

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
