import React from 'react'
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa'


const ProductCard = ({products}) => {

  return (
    <>
        <div className="products-card">
            {   
                products.map((product) => (
                    <div key={product.id} className='prod-card'>
                        <img src={product.image} />
                        <h6 className='rating'> <FaStar/> {product.ratings}</h6>
                        <p>{product.brand}<span>{product.weight}</span></p>
                        <h4>{product.name}</h4>
                        <div className='prod-card-pr'>
                            <p>${product.price}</p>
                            <button><FaHeart /></button>
                            <button><FaShoppingCart /></button>
                        </div>  
                    </div>
                ))
            }
        </div>
        
    </>
  )
}

export default ProductCard
