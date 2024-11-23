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
import { useProduct } from '../context/productService';
import SearchResultModel from '../Models/SearchResultModel';


function Header() {
  
  const {user, setShowLogin, handleLogout} = useUser();
  const navigate = useNavigate();
  const {cart} = useCart();
  const {products} = useProduct();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleNavigation = (path) => {
    if (!user) {
      setShowLogin(true);
    } else {
      navigate(path);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query)
    if(query.trim() !== '') {
      const result = products.filter((product) => 
        product.name.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query));
      setSearchResult(result)
    }else {
      setSearchResult([])
    }
  }

  return (
    <header>
        <div className='headCnt'>
            <Link to={'/'} className='headerImg'>
                <img src={logo} />
            </Link>

            <div className='search-funct'>
              <form className='search-bar'>
                  <FaSearch className='search-icon' />
                  <input value={search} onChange={handleSearch} type='text' placeholder='Search....' />
              </form>
              {
                user && (searchResult.length > 0 && <SearchResultModel searchResult={searchResult} />)
              }
            </div>

            <div className='headBtn'> 
                <button onClick={() => handleNavigation('/products/products/:heading')} className='shopbtn'>Shop</button>
                <button onClick={() => handleNavigation('/wishlist')} className='wishlist'>Wishlist</button>
                <button onClick={() => handleNavigation('/account')} className='wishlist'>Account</button>
                <button onClick={() => handleNavigation('/cartpage')} className='cart-btn'>
                  <p>My Cart</p><FaShoppingCart width={40}/>
                  <span>{cart?.length}</span>
                </button>
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
                  <input type='text' value={search} onChange={handleSearch} placeholder='Search....' />
                  {
                    user && (searchResult.length > 0 && <SearchResultModel searchResult={searchResult} />)
                  }
              </form>
            </div>
        }
      
    </header>
  )
}

export default Header;