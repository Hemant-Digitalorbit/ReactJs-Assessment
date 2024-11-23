import React from 'react'
import '../assets/styles/CartPage.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CartSummry from '../components/features/cart/CartSummry';
import CartItem from '../components/features/cart/CartItem';
import { useUser } from '../components/context/userService';
import { useProduct } from '../components/context/productService';

const CartPage = () => {

  const {user} = useUser();
  const{loading} = useProduct();

  return (
    <>
      <Header />
      {
        loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
              </div>
        ) : (
          <>
            <section>
                  <h1>Cart</h1>
                  {
                    user && (
                      <div className='cart-section'>
                        {/* Cart Product */}
                        <CartItem />
                        {/* Cart Summary */}
                        <CartSummry />  
                      </div>
                    )
                  }
              </section>
          </>
        ) 
      }
   <Footer />
  </>        

  )
}

export default CartPage
