import React from 'react'
import WishListItem from '../components/features/wishlist/WishListItem'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/styles/WishList.css'
import { useUser } from '../components/features/services/userService'
import { useWishlist } from '../components/features/services/wishlistService'


const WishListPage = () => {

    const {user, isLoggedIn,  setShowLogin, handleLogout} = useUser();
    const { wishlist, setWishlist} = useWishlist();
 
    return (
        <>
            <Header setShowLogin={() => setShowLogin(true)} user={user} wishlist={wishlist} setWishlist={setWishlist} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            <section>
                <h2>WishList</h2>
                <div className='card-section'>
                    <div className='wishlist-card'>
                        {
                            isLoggedIn && wishlist?.map((product, index) => (
                                <WishListItem key={index} product={product}  />
                            ))
                        }
                    </div>

                    
                </div>

            </section>
        {/* Footer */}
        <Footer />
        </>
  )
}

export default WishListPage
