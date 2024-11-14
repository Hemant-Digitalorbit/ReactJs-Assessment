import React from 'react'
import '../assets/styles/CartPage.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CartSummry from '../components/features/cart/CartSummry';
import CartItem from '../components/features/cart/CartItem';
import { useUser } from '../components/features/services/userService';
import { useWishlist } from '../components/features/services/wishlistService';
import { useOrdersHistory } from '../components/features/services/orderHistoryService';

const CartPage = () => {

  const {user, isLoggedIn,  setShowLogin, handleLogout} = useUser();
  const { wishlist, setWishlist} = useWishlist();
  const {ordersHistory, setOrdersHistory } = useOrdersHistory();

  return (
    <>
      <Header setShowLogin={() => setShowLogin(true)} user={user} wishlist={wishlist} setWishlist={setWishlist} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>

      <section>
          <h1>Cart</h1>
          {
            isLoggedIn && (
              <div className='cart-section'>
                {/* Cart Product */}
                <CartItem />
                {/* Cart Summary */}
                <CartSummry />  
              </div>
            )
          }
      </section>
   <Footer />
  </>        

  )
}

export default CartPage
