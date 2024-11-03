import React from 'react'
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import '../../styles/FilterPage.css'

const FilterProdCard = ({product}) => {
  return (
    <>
        <div key={product.id} className='filter-prod-card'>
            <img src={product.image} alt={product.name} />
            <h6 className='rating'><FaStar />{product.ratings}</h6>
            <p>{product.brand}<span>{product.weight}</span></p>
            <h4>{product.name}</h4>
            <div className='prod-card-ft'>
                <p>$ {product.price}</p>
                <button><FaHeart /></button>
                <button><FaShoppingCart /></button>
            </div>
        </div>
    </>
  )
}

export default FilterProdCard
