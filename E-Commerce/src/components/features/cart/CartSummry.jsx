import React from 'react'
import { useCart } from '../../context/cartService';
import { useNavigate } from 'react-router';
import { useOrdersHistory } from '../../context/orderHistoryService';

const CartSummry = () => {

    const { cart, setCart } = useCart();
    const {checkoutCart} = useOrdersHistory();

    const navigate = useNavigate()

    const subtotal = Array.isArray(cart) ? cart.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
    const deliveryFee = 50;
    const discount = subtotal * 0.1;
    const total = subtotal + discount + deliveryFee

    return (
        <>
            {
                cart?.length > 0 && (
                    <div className='summary-container'>
                        <div className='summary-section'>
                            <h2>Order Summary</h2>
                            <div className='summary-content'>
                                <div className='summary-content-value'>
                                    <p>Subtotal</p>
                                    <p>{subtotal.toFixed(2)}</p>
                                </div>
                                <div className='summary-content-value'>
                                    <p>Estimated Delivery & <br></br>Handeling </p>
                                    <p>{deliveryFee.toFixed(2)}</p>
                                </div>
                                <div className='summary-content-value'>
                                    <p>10% Discount</p>
                                    <p>{discount.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                        <div className='summary-total'>
                            <p>Total</p>
                            <p>{total.toFixed(2)}</p>
                        </div>
                        <button onClick={() => {checkoutCart(); navigate('/account/orders-history')}}>Checkout</button>
                    </div>
                )
            }
        </>
  )
}

export default CartSummry
