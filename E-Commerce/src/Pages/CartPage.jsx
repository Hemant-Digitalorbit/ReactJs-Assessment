import React from 'react'
import '../assets/styles/CartPage.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CartSummry from '../components/features/cart/CartSummry';
import CartItem from '../components/features/cart/CartItem';

const CartPage = ({props}) => {

  let {setShowLogin, isLoggedIn, handleLogout, ordersHistory, setOrdersHistory, user, wishlist, setWishlist } = props;


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
                <CartSummry props={{ordersHistory, setOrdersHistory, user }} />  
              </div>
            )
          }
      </section>
   <Footer />
  </>        

  )
}

export default CartPage
