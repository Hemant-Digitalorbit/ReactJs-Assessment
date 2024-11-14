import React from 'react';
import '../../assets/styles/PopularProducts.css'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';


const PopularProductsSection = ({products, reviews, heading}) => {

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
      <div className='btm-brd'></div>
    </section>

  );  
};

export default PopularProductsSection;