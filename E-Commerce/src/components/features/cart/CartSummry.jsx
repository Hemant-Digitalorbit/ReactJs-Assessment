import React from 'react'
import { useCart } from '../../context/cartService';
import { useUser } from '../../context/userService';
import AddressModel from '../../Models/AddressModel';

const CartSummry = () => {

    const { cart } = useCart();
    const {openAddModel, setOpenAddModel} = useUser();
    const subtotal = Array.isArray(cart) ? cart.reduce((total, item) => total + item.price * item.quantity, 0) : 0;
    const deliveryFee = 50;
    const discount = subtotal * 0.1;
    const total = subtotal + discount + deliveryFee;

    const handleOpenForm = () => {
        setOpenAddModel(true);
        console.log(openAddModel)
    };

    const handleModalClose = () => {
        setOpenAddModel(false);
    };

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
                        <button onClick={handleOpenForm}>Checkout</button>
                    </div>
                )
            }
            {openAddModel && (
                <AddressModel isOpen={openAddModel} onClose={handleModalClose} />
            )}
        </>
  )
}

export default CartSummry
