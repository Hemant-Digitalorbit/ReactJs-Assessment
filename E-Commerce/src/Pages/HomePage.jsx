import React, { useEffect, useState } from "react";
import '../styles/HomePage.css';
import Login from "../components/Login";
import banner from '../assets/Frame 114.png';
import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Brands from "../components/Brands";
import { categories, products, orders, reviews, brands } from "../Data/data";
import { FaUser } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage({props}) {

  let { showLogin, setShowLogin, isLoggedIn, handleLogin, handleLogout } = props;


  return (
    <>
      <Header setShowLogin={() => setShowLogin(true)}  isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      {/* Bannner Image */}
      <div className="homeContent">
        <img src={banner} alt="banner" />
      </div>

      {/* if login then show products */}
      {
        isLoggedIn ? (
          <>
            <Categories heading="Categories" categories={categories} />
            <BestSellers heading="Best Sellers" products={products} orders={orders} />
            <PopularProducts heading="Popular" products={products} reviews={reviews} />
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
