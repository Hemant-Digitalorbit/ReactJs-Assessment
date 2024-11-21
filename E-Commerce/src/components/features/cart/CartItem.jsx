import React from 'react'
import { useCart } from '../../context/cartService';
import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useProduct } from '../../context/productService';



const CartItem = () => {

  const { cart, increseQnt, decreaseQnt, deleteItem } = useCart();
  const {products} = useProduct();

  return (
    <>
      {
        cart?.length > 0  ? (
          <div className='cart-items-section'>
            <div className='cart-items'>
              {   
                cart.map((item) => {
                  const cartItem = products.find((product) => product.id === item.id) 
                  if (!cartItem) return null;
                  return (
                      <div key={item.id} className='cart-product'>
                        <Link to={`/product/${cartItem.name}`}><img src={cartItem.image} alt={cartItem.name} /></Link>
                        <div className='cart-content'>
                            <div className='cart-cont-type'>
                              <span>
                                <p>{cartItem.brand}</p>
                                <p>{cartItem.weight}</p>
                              </span>
                              <button onClick={() => deleteItem(item.id)} className='delete-item'><FaRegTrashAlt /></button>
                            </div>
                            <h4>{cartItem.name}</h4>
                            <p>$ {cartItem.price}</p>
                            <div className='cart-quntity-func'>
                              <button onClick={() => decreaseQnt(item.id)}><FiMinus /></button>
                              <span>{item.quantity}</span>
                              <button onClick={() => increseQnt(item.id)}><FiPlus /></button>
                            </div>
                        </div>
                      </div>
                  )
                })  
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
