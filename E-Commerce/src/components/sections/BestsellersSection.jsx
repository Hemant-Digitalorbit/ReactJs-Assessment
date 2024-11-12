import React from 'react';
import '../../assets/styles/PopularProducts.css'
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';


const BestsellersSection = ({products, orders, heading }) => {

  const navigate = useNavigate()

  const bestSellers = products.map((product) => {
    const productOrd = orders.filter(order => order.product_id === product.id)
    const orderCount = productOrd.length
    return { ...product, orderCount };
  }).sort((a, b) => b.orderCount - a.orderCount)
  

  const handleViewAll = () => {
    navigate(`/products/products/${heading}`, {state: {bestSellers}})
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
            bestSellers.length > 0 ? (
              bestSellers.map((product) => (
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

export default BestsellersSection;