import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/AccountPage.css'
import { Link, Outlet } from 'react-router-dom'


const AccountPage = ({props}) => {

    let {setShowLogin, isLoggedIn, handleLogout} = props;
    const [active, setActive] = useState('orders-history');

    const handleClick =(click) => {
        setActive(click)
    }

    return (
        <>
            <Header setShowLogin={() => setShowLogin(true)}  isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            {
                isLoggedIn &&
                (
                    <section>
                        <div className='main-account-container'>
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
