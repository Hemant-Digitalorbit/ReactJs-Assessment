import React, { useState } from 'react'
import '../styles/Header.css'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaUser, FaHeart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



function Header({ setShowLogin, isLoggedIn, handleLogout }) {

  const [showSearchForm, setShowSearchForm] = useState(false)

  return (
    <header>
        <div className='headCnt'>
            <Link to={'/'} className='headerImg'>
                <img src='https://s3-alpha-sig.figma.com/img/6def/de3b/8d30489612220b62b81fc43ea6ab41ad?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZU-Z6H2OM5E~HeN5ikIHjMc8L1caqDJ0S6qIRLtSfloP7JCSGZUfJMIxTwZxWSLpFN~ck6yJrKf0GfHiF-sCYXAnu2y7pgW4j5uWGAeMKo1j9XBzX4N1VOxc4ciiyyOToE1tOEBVU9Dgp3gKZZeSVG2zBxD5n8h-jMh8WTBfH8t7t0n-zKJc7EjvigE-f~sOJewx27qt1ld8kXA0~RVrbk-i8sX3wWwGZAHn~txHG3MjYma1vIBW2fCcEDMxi49Ms-NC7MECz2tFmB2bWSQEgjRzN57JZ5TWZqgGJwSZKWIoFgY4lGjBe8zpxi7B0oH0fHbf5~pNy55S-5qLQaJ14Q__' />
            </Link>

            <div>
              <form className='search-bar'>
                  <FaSearch className='search-icon' />
                  <input type='text' placeholder='Search....' />
              </form>
            </div>

            
            <div className='headBtn'>
                
                {/* Mobile Search Icon */}
                <button onClick={() => setShowSearchForm((pre) => !pre)} className='mobile-search-icon'>
                  <FaSearch />
                </button>

                <Link to={'/wishlist'} className='wishlist'><FaHeart /></Link>
                <Link to={'/cartpage'}><button className='cart-btn'><FaShoppingCart width={40}/></button></Link>
                {
                  !isLoggedIn ? (
                    <button onClick={() => setShowLogin(true)} className='signBtn'><FaUser />Login</button>
                  ) : (
                    <button onClick={handleLogout} className='signBtn'><RiLoginBoxFill />Logout</button>
                  )
                }
            </div>
        </div>
      
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