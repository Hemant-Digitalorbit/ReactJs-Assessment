import React from 'react'
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { useCart } from '../context/cartService'
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/wishlistService';


const ProductCard = ({product, quantity}) => {

  const { addProdToCart } = useCart();
  const {addProdToWishList} = useWishlist();

  return (
    <section>
        <div key={product.id} className='prod-card'>
            <Link to={`/product/${product.name}`}>
                <img src={product.image} />
            </Link>
            <h6 className='rating'> <FaStar/> {product.ratings}</h6>
            <p className='brand'>{product.brand}<span>{product.weight}</span></p>
            <h4>{product.name}</h4>
            <div className='prod-card-pr'>
                <p className='price'>${product.price}</p>
                <button onClick={() => addProdToWishList(product)}><FaHeart /></button>
                <button onClick={() => addProdToCart(product, quantity)}><FaShoppingCart /></button>
            </div>  
        </div>
        
    </section>
  )
}

export default ProductCard

