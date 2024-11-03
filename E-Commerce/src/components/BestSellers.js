import React from 'react';
import '../styles/BestSellers.css'
import { FaStar,FaHeart,FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const BestSellers = ({products, orders, heading }) => {

  const navigate = useNavigate()

  const bestSellers = products.map((product) => {
    const productOrd = orders.filter(order => order.product_id === product.id)
    const orderCount = productOrd.length
    return { ...product, orderCount };
  }).sort((a, b) => b.orderCount - a.orderCount)

  const handleViewAll = () => {
    navigate(`/products/${heading}`, {state: {bestSellers}})
  }

  return (
    <>  
      <div className="best-sellers-container">
        <div className='heading-content'>
          <h2>{heading}</h2>
          <button onClick={handleViewAll} className='view-all'>View All</button>
        </div>  
        <div className="best-seller-card">
            {
              bestSellers.map((product) => (
                  <div key={product.id} className='best-seller-product-card'>
                    <img src={product.image} />
                    <h6 className='rating'> <FaStar/> {product.ratings}</h6>
                    <p>{product.brand}<span>{product.weight}</span></p>
                    <h4>{product.name}</h4>
                    <div className='prod-card-bs'>
                      <p>${product.price}</p>
                      <button><FaHeart /></button>
                      <button><FaShoppingCart /></button>
                    </div>  
                  </div>
              ))
            }
        </div>
      </div>

      <div className='bottom-border'></div>
    </>

  );
};

export default BestSellers;