import React from 'react'
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'
import { useCart } from './Context/cart'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {

  const { addProdToCart } = useCart();

  const addProdToWishList = (product) => {
    const savedProdWishList = JSON.parse(localStorage.getItem('wishlist')) || [];
    const prodAlready = Array.isArray(savedProdWishList) ? savedProdWishList.find((item) => item.id === product.id) : null
    if(prodAlready){
      toast.error("Product Already in WishList")
      return;
    } 
    const newWishList = [...savedProdWishList, product];
    localStorage.setItem('wishlist', JSON.stringify(newWishList));
    toast.success('Product Added To WishList...')
  }


  return (
    <section>
        <div key={product.id} className='prod-card'>
            <Link to={`/product/${product.name}`}>
                <img src={product.image} />
            </Link>
            <h6 className='rating'> <FaStar/> {product.ratings}</h6>
            <p>{product.brand}<span>{product.weight}</span></p>
            <h4>{product.name}</h4>
            <div className='prod-card-pr'>
                <p>${product.price}</p>
                <button onClick={() => addProdToWishList(product)}><FaHeart /></button>
                <button onClick={() => addProdToCart(product)}><FaShoppingCart /></button>
            </div>  
        </div>
        
    </section>
  )
}

export default ProductCard

