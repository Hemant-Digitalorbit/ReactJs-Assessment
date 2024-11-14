import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import '../../../assets/styles/AccountPage.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";
import { useUser } from '../services/userService'
import { useWishlist } from '../services/wishlistService'


const AccountPage = () => {

    const {wishlist, setWishlist} = useWishlist();
    const {isLoggedIn,  setShowLogin, handleLogout} = useUser()
    const [active, setActive] = useState('profile');
    const [openMenu, setOpenMenu] = useState(false)

    const navigate = useNavigate()

    const handleClick =(click) => {
        setActive(click)
        navigate(click)
    }

    useEffect(() => {
        if (isLoggedIn) {
          setActive(active)
          navigate(active)
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <Header setShowLogin={() => setShowLogin(true)} wishlist={wishlist} setWishlist={setWishlist} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            {
                isLoggedIn &&
                (
                    <section>
                        <button className="menu-toggle" onClick={() => setOpenMenu((prev) => !prev)}>
                            {openMenu ? <RiCloseLargeLine /> : <AiOutlineMenu />}
                        </button>
                        <div className={`main-account-container ${openMenu ? 'show' : ''}`}>
                            <Link to={'profile'} onClick={() => handleClick('profile')} className={`profile-container ${active === 'profile' ? 'active' : ''}`}>My Profile</Link>
                            <a className='vert-line'></a>
                            <Link to={'tracking-order'} onClick={() => handleClick('tracking-order')} className={`track-order-container ${active === 'tracking-order' ? 'active' : ''}`}>Track my order</Link>
                            <a className='vert-line'></a>
                            <Link to={'orders-history'} onClick={() => handleClick('orders-history')} className={`order-history-container ${active === 'orders-history' ? 'active' : ''}`}>Order History</Link>
                            <a className='vert-line'></a>
                            <Link to={'contact'} onClick={() => handleClick('')} className='contact-container'>Contact Us</Link>
                            <a className='vert-line'></a>
                            <Link to={'f&q'} onClick={() => handleClick('f&q')} className='fq-container'>FAQs</Link>
                        </div>
                        <div className='account-content'> 
                            <Outlet />
                        </div>
                    </section>  
                )
            }
            <Footer />        
        </>
    )
}

export default AccountPage
