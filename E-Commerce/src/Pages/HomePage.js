import React, { useEffect, useState } from "react";
import '../styles/HomePage.css';
import Header from "../components/Header.js";
import Login from "../components/Login";
import banner from '../assets/Frame 114.png';
import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Brands from "../components/Brands";
import { categories, products, orders, reviews, brands } from "../Data/data.js";
import Footer from "../components/Footer.js";
import { FaUser } from "react-icons/fa";

function HomePage({props}) {

  let {showLogin, setShowLogin, isLoggedIn, handleLogin} = props;

  return (
    <>

      {/* Bannner Image */}
      <div className="homeContent">
        <img src={banner} alt="banner" />
      </div>

      {/* if login then show products */}
      {
        isLoggedIn ? (
          <>
            <Categories heading="Categories" categories={categories} />
            <BestSellers heading="Best Sellers Products" products={products} orders={orders} />
            <PopularProducts heading="Popular Products" products={products} reviews={reviews} />
            <Brands heading="Brands" brands={brands} />
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
          <Login 
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
