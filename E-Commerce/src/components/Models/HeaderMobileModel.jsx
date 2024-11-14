import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { useCart } from '../features/services/cartService';
import { useUser } from '../features/services/userService';
import { useWishlist } from '../features/services/wishlistService';


const HeaderMobileModel = () => {
    const {isLoggedIn, handleLogout, setShowLogin} = useUser();
    const {cart} = useCart();
    const {wishlist} = useWishlist();
    const [openPanel, setOpenPanel] = useState(null);
    const navigate = useNavigate();
    const data = [
        { title: 'Category', options: ['Electronics', 'Fashion', 'FootWear'], links: ['/products/categories/Electronics', '/products/categories/Fashion', '/products/categories/FootWear'] },
        { title: 'Brand', options: ['Apple', 'Medico', 'Samsung'], links: ['/products/brands/Apple', '/products/brands/Medico', '/products/brands/Samsung'] },
        { title: 'Account', options: ['Profile', 'Track My Order', 'Order History', 'Contact Us', 'FAQs'], 
            links: ['/account/profile', '/account/tracking-order', '/account/orders-history', '/account/contact', '/account/faqs'] 
        }
    ];    
    const lists = [
        { title: 'Wishlist', count: wishlist?.length, link: '/wishlist' },
        { title: 'Cart', count: cart?.length, link: '/cartpage' },
    ];
    const handleToggle = (index) => {
        setOpenPanel(prev => (prev === index ? null : index));
    };
      
    return (
        <>
        <div className="mobile-nav">
            <div className="mobile-nav-head">
                {data.map((a, index) => (
                    <div key={index}>
                        <div style={{ borderBottom: '0.5px solid rgba(59, 59, 59, 0.25)' }}>
                            <div onClick={() => handleToggle(index)} className='disclosureButton'>
                                <p>{a.title}</p>
                                <span><IoIosArrowDown className={`IoIosArrowDown ${openPanel === index ? 'rotate' : ''}`} /></span>
                            </div>
                            
                            <div className={`disclosurePanel ${openPanel === index ? 'show' : 'hidden'}`}>
                                <ul>
                                {a.options.map((option, index) => (
                                    <li key={index} onClick={()=> navigate(a.links[index])}>{option}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
                {lists.map((x, index) => (
                <button key={index} onClick={()=> navigate(x.link)} className="disclosureButton" style={{ borderBottom: '0.5px solid rgba(59, 59, 59, 0.25)' }}>
                    <p>{x.title}</p>
                    <span>{x.count}</span>
                </button>
                ))}
            </div>
            {
                isLoggedIn ? (
                    <button className='logoutbtn' onClick={() => {handleLogout(); navigate('/age-verify')}} >Logout</button>
                ) : (
                    <button className='logoutbtn' onClick={() => setShowLogin(true)} >Login</button>
                )
            }
        </div>
        </>
    )
}

export default HeaderMobileModel
