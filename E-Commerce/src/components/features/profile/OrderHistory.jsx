import React, { useState } from 'react';
import { RiCloseLargeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import { useUser } from '../services/userService';
import { useOrdersHistory } from '../services/orderHistoryService';

const OrderHistory = () => {
  const {user} = useUser()
  const {ordersHistory, submitReview, setSumitReview} = useOrdersHistory();

  const [showModel, setShowModel] = useState(false);
  const [modelProduct, setModelProduct] = useState('')
  const [rating, setRating] = useState('')
  const [hover, setHover] = useState('')
  const [review, setReview]= useState('')

  
  const handleSubmitReview = (e) => {
    e.preventDefault();
    const addReview = {productId: modelProduct.id, reviewerName: user.name, rating, review}
    const updtReviews = [...submitReview, addReview];
    setSumitReview(updtReviews)
    localStorage.setItem('productreviews', JSON.stringify(updtReviews))
    setReview('')
    setRating(0)
    setShowModel(false) 
    toast.success("Review submitted successfully!")
  }

  return (
    <section>
      <div className='main-order-container'>
      {
        ordersHistory.map((product) => (
          <div key={product.id} className='order-history'>
            <div className='order-hist-img'>
                <Link to={`/product/${product.name}`}>
                    <img src={product.image} alt={product.name} />
                </Link>
            </div>
            <div className='order-hist-content'>
              <div className='order-headcnt'>
                <p>Delivered</p>
                <p>{product.Date}</p>
              </div>
              <span><p>{product.brand}</p><p>{product.weight}</p></span>
              <h4>{product.name}</h4>
              <p className='order-price'>$ {product.price}</p>
              <div className='order-hst-btns'>
                <button onClick={() => {setShowModel(true); setModelProduct(product); }} className='order-rate'>Rate</button>
                <button className='order-record'>Reorder</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
      {/* Review Send Model */}
      {
        showModel &&  modelProduct &&
          <div className='rating-model'>  
            <h4>{modelProduct.name}</h4>
            <div className='rates-star'>
              {[...Array(5)].map((a, ind)=> {
                const curretntRating = ind + 1;
                return (
                  <label key={ind}>
                      <input type='radio' value={curretntRating} onClick={() => setRating(curretntRating)}  />
                      {
                        curretntRating <= (hover || rating) 
                          ? <FaStar className='star' color='rgba(80, 111, 34, 1)' onMouseEnter={() => setHover(curretntRating)} onMouseLeave={() => setHover(null)}/> 
                          : <CiStar className='filled-star' color='rgba(80, 111, 34, 1)' onMouseEnter={() => setHover(curretntRating)} onMouseLeave={() => setHover(null)} /> 
                      }
                  </label>
                )
              })}
            </div>
            <textarea type='text' placeholder='Please write the product review here' 
            value={review} 
            onChange={(e) => setReview(e.target.value)}/>
            <button onClick={handleSubmitReview}>Submit</button>
            <button onClick={() => setShowModel(false)} className='close-model' >
              <RiCloseLargeFill />
            </button>
          </div>
      }
    </section>
  )
}

export default OrderHistory;