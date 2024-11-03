import React from 'react';
import '../styles/PopularProducts.css'
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const PopularProducts = ({products, reviews, heading}) => {

  const navigate = useNavigate()

  const popularProducts = products.map((product) => {
    const ratings = reviews.filter((review) => review.product_id === (product.id));
    const avgRating = ratings.reduce((acc, rating) => acc + rating.rating, 0) / ratings.length;
    return { ...product, avgRating };
  });

  const handleViewAll = () => {
    navigate(`/products/${heading}`, { state: {popularProducts}})
  }

  return (
    <>
      <div className="popular-products">
        <div className='heading-content'>
          <h2>{heading}</h2>
          <button onClick={handleViewAll} className='view-all'>View All</button>
        </div>
        
        <div className='popular-products-card'>
            {
            popularProducts.sort((a, b) => b.avgRating - a.avgRating)
              .map((product) => (
                <div key={product.id} className='popular-prod-card'>
                  <img src={product.image} />
                  <h6 className='rating'><FaStar/>{product.avgRating}</h6>
                  <p>{product.brand}<span>{product.weight}</span></p>
                  <h4>{product.name}</h4>
                  <div className='prod-card-pr'>
                    <p>$ {product.price}</p>
                    <button><FaHeart /></button>
                    <button><FaShoppingCart /></button>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div className='bottom-border'></div>
    </>

  );  
};

export default PopularProducts;