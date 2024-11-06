import React from 'react';
import '../styles/PopularProducts.css'
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';


const PopularProducts = ({products, reviews, heading}) => {

  const navigate = useNavigate()

  const popularProducts = products.map((product) => {
    const ratings = reviews.filter((review) => review.product_id === (product.id));
    const avgRating = ratings.reduce((acc, rating) => acc + rating.rating, 0) / ratings.length;
    return { ...product, avgRating };
  }).sort((a, b) => b.avgRating - a.avgRating)

  const handleViewAll = () => {
    navigate(`/products/products/${heading}`, { state: {popularProducts}})
  }

  return (
    <section>
      <div className="product-container">
        <div className='heading-content'>
          <h2>{heading}</h2>
          <button onClick={handleViewAll} className='view-all'>View All</button>
        </div>
        <div className='products-card'>
        {
            popularProducts.length > 0 ? (
              popularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (null)
          }
        </div> 
        </div>

      <div className='bottom-border'></div>
    </section>

  );  
};

export default PopularProducts;