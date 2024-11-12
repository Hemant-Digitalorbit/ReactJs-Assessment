import React from 'react'
import { FaStar, FaTrash } from 'react-icons/fa'
import { Button } from '@headlessui/react'
import '../../../assets/styles/WishList.css'
import { useCart } from '../services/cartService'
import { Link } from 'react-router-dom'


const WishListItem = ({props}) => {  
  
  const { addProdToCart } = useCart()

  let {product, deleteWishItem} = props;
  
  return (
    <>
        <div key={product.id} className='Wish-card'>
            <Link to={`/product/${product.name}`}><img src={product.image} /></Link>
            <h6 className='rating'> <FaStar/> {product.ratings}</h6>
            <p>{product.brand}<span>{product.weight}</span></p>
            <h4>{product.name}</h4>
            <div className='prod-card-wl'>
                <button onClick={() => addProdToCart(product)}>Add To Cart</button>
                <Button onClick={() => deleteWishItem(product.id)}><FaTrash/></Button>
            </div>  
        </div>
    </>
  )
}

export default WishListItem;
