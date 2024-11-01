import React from 'react';
import '../styles/PopularProducts.css'
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const PopularProducts = ({products, reviews, heading}) => {


  const popularProducts = products.map((product) => {
    const ratings = reviews.filter((review) => review.product_id === (product.id));
    const avgRating = ratings.reduce((acc, rating) => acc + rating.rating, 0) / ratings.length;
    return { ...product, avgRating };
  });


  return (
    <>
      <div className="popular-products">
        <div className='heading-content'>
          <h2>{heading}</h2>
          <Link><p>View All</p></Link>
        </div>
        
        <div className='popular-products-card'>
            {
            popularProducts.sort((a, b) => b.avgRating - a.avgRating)
              .map((product) => (
                <div key={product.id} className='popular-prod-card'>
                  <img src={product.image} />
                  <h6 className='rating'><FaStar/>{product.avgRating}</h6>
                  <p>{product.brand}</p>
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