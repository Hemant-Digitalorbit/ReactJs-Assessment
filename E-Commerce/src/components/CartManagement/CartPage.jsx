import React from 'react'
import '../../styles/CartPage.css'
import Header from '../Header';
import Footer from '../Footer';
import CartProd from './CartProd';
import CartSummry from './CartSummry';

const CartPage = ({props}) => {

  let {setShowLogin, isLoggedIn} = props;
  
  return (
    <>
      <Header setShowLogin={() => setShowLogin(true)}  isLoggedIn={isLoggedIn} />

      <section>
          <h1>Cart</h1>
          {
            isLoggedIn && (
              <div className='cart-section'>
                {/* Cart Product */}
                <CartProd />
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
