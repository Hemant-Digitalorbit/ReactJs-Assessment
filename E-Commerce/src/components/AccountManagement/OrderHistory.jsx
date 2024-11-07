import React, { useEffect, useState } from 'react';
import { RiCloseLargeFill } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import {products} from '../../Data/data';
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast'

const OrderHistory = () => {

  const [showModel, setShowModel] = useState(false);
  const [modelProduct, setModelProduct] = useState(null)

  const deliverdProd = products.filter(product =>  product.status === 'Delivered')

  const [rating, setRating] = useState(0)
  const [review, setReview]= useState('')
  const [submitReview, setSumitReview] = useState([])

  useEffect(() => {
    const prodRev = JSON.parse(localStorage.getItem('productreviews')) || []
    setSumitReview(prodRev)
  }, [])

  const handleSubmitReview = () => {
    const addReview = {productId: modelProduct.id, rating, review}
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
        deliverdProd.map((product) => (
          <div key={product.id} className='order-history'>
            <div className='order-hist-img'>
                <Link to={`/product/${product.name}`}>
                    <img src={product.image} alt={product.name} />
                </Link>
            </div>
            <div className='order-hist-content'>
              <div className='order-headcnt'>
                <p>{product.status}</p>
                <p>{product.DeliveredDate}</p>
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
              {[...Array(5)].map((a, ind)=> (
                <CiStar className={`stars ${ind < rating ? "filled-stars" : ''}`} key={ind} 
                onClick={() => setRating(ind + 1)} />
              ))}
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