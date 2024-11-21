import React, { useState } from 'react'
import logo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import {useCart} from '../context/cartService'
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";  
import HeaderMobileModel from '../Models/HeaderMobileModel';
import { useUser } from '../context/userService';


function Header() {
  

  const {user, setShowLogin, handleLogout} = useUser();
  const navigate = useNavigate();
  const {cart} = useCart();

  const [showSearchForm, setShowSearchForm] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header>
        <div className='headCnt'>
            <Link to={'/'} className='headerImg'>
                <img src={logo} />
            </Link>

            <div>
              <form className='search-bar'>
                  <FaSearch className='search-icon' />
                  <input type='text' placeholder='Search....' />
              </form>
            </div>

            <div className='headBtn'>
                
                <Link to={'/products/products/:heading'} ><button className='shopbtn'>Shop</button></Link>
                <Link to={'/wishlist'} className='wishlist'>Wishlist</Link>
                <Link to={'/account'} className='wishlist'>Account</Link>
                <Link to={'/cartpage'} style={{textDecoration: 'none'}}><button className='cart-btn'><p>My Cart</p><FaShoppingCart width={40}/>
                  <span>{cart?.length}</span>
                </button></Link>
                {
                  !user ? (
                    <button onClick={() => setShowLogin(true)} className='signBtn'><FaUser />Login</button>
                  ) : (
                    <button onClick={() => {handleLogout(); navigate('/age-verify')}} className='signBtn'><RiLoginBoxFill />Logout</button>
                  )
                }
            </div>
        </div>

        {/* mobile header */}
        <div className='mobile-header'>
            <Link to={'/'} className='headerImg'>
              <img src={logo} />
            </Link>
            <div className='header-menu'>
                <button onClick={() => setShowSearchForm((pre) => !pre)} className='mobile-search-icon'>
                  <IoSearchOutline />
                </button>
                <button onClick={() => setMobileMenu(prev => !prev)} className='togglebtn'>{mobileMenu ? <AiOutlineClose /> : <LuMenu />}</button>
            </div>
        </div>
        
        {
          mobileMenu && (
            <HeaderMobileModel/>
          )
        }
      
      {/* Mobile Search Bar */}
        {
          showSearchForm && 
            <div className='mob-srch-div'>
              <form className='mobile-search-bar'>
                  <FaSearch className='search-icon' />
                  <input type='text' placeholder='Search....' />
              </form>
            </div>
        }
      
    </header>
  )
}

export default Header