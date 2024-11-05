import React from 'react'
import { FaStar, FaTrash } from 'react-icons/fa'
import { Button } from '@headlessui/react'
import '../../styles/WishList.css'
import { useCart } from '../Context/cart'


const WishListProdCard = ({props}) => {  
  
  const { addProdToCart } = useCart()

  let {product, deleteWishItem} = props;
  return (
    <>
        <div key={product.id} className='Wish-card'>
            <img src={product.image} />
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

export default WishListProdCard
