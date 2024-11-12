import React from 'react'
import { useCart } from '../services/cartService'
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from 'react-router-dom';

const CartItem = () => {

  const { cart, increseQnt, decreaseQnt, deleteItem } = useCart();

  return (
    <>
      {
        cart.length > 0  ? (
          <div className='cart-items-section'>
            <div className='cart-items'>
              {   
                cart.map((item) => (
                  <div key={item.id} className='cart-product'>
                    <Link to={`/product/${item.name}`}><img src={item.image} alt={item.name} /></Link>
                    <div className='cart-content'>
                        <div className='cart-cont-type'>
                          <span>
                            <p>{item.brand}</p>
                            <p>{item.weight}</p>
                          </span>
                          <button onClick={() => deleteItem(item.id)} className='delete-item'><FaRegTrashAlt /></button>
                        </div>
                        <h4>{item.name}</h4>
                        <p>$ {item.price}</p>
                        <div className='cart-quntity-func'>
                          <button onClick={() => decreaseQnt(item.id)}><FiMinus /></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => increseQnt(item.id)}><FiPlus /></button>
                        </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ) : (
          <p style={{fontSize: '24px', textAlign: 'center', color: 'red', margin: '100px'}}>Cart Is Empty</p>
        ) 
      }
    </>
  )
}

export default CartItem;
