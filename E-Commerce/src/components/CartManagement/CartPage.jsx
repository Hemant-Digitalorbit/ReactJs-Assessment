import React, { useEffect } from 'react'
import '../../styles/CartPage.css'
import Header from '../Header';
import Footer from '../Footer';
import CartProd from './CartProd';
import CartSummry from './CartSummry';

const CartPage = ({props}) => {

  let {setShowLogin, isLoggedIn, handleLogout, ordersHistory, setOrdersHistory, user } = props;


  return (
    <>
      <Header setShowLogin={() => setShowLogin(true)}  isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

      <section>
          <h1>Cart</h1>
          {
            isLoggedIn && (
              <div className='cart-section'>
                {/* Cart Product */}
                <CartProd />
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
