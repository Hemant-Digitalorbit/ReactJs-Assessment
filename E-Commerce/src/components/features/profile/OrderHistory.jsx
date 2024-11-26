import React from 'react';
import "../../../assets/styles/AccountPage.css";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaCloudUploadAlt, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useOrdersHistory } from '../../context/orderHistoryService';
import { useProduct } from '../../context/productService';

const OrderHistory = () => {
  const {ordersHistory, handleSubmitReview, setModelProduct, setShowModel, showModel, modelProduct, 
    setRating, setReview, rating, review, hover, setHover, handleImageUpload, previewImage} = useOrdersHistory();
  const { products } = useProduct()

  return (
    <section>
      <h2>Order History</h2>
      <div className='main-order-container'>
      {
        ordersHistory.map((product) => {
          const orderProd = products.find((prod) => prod.id === product.id);
          if(!orderProd) return null;
          return (
            <div key={product.id} className='order-history'>
              <div className='order-hist-img'>
                  <Link to={`/product/${orderProd.name}`}>
                      <img src={orderProd.image} alt={orderProd.name} />
                  </Link> 
              </div>
              <div className='order-hist-content'>
                <div className='order-headcnt'>
                  <p>Delivered</p>  
                  <p>{product?.date}</p>
                </div>
                <span><p>{orderProd.brand}</p><p>{orderProd.weight}</p></span>
                <h4>{orderProd.name}</h4>
                <p className='order-price'>$ {orderProd.price}</p>
                <div className='order-hst-btns'>
                  <button onClick={() => {setShowModel(true); setModelProduct(orderProd); setRating(''); setReview(''); setHover('');}} 
                    className='order-rate'>
                    Rate
                  </button>
                  <button className='order-record'>Reorder</button>
                </div>
              </div>
            </div>
          )
        })
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
            <textarea type='text' placeholder='Please write the product review here' value={review} onChange={(e) => setReview(e.target.value)}/>
            <label>
              <div className='reviewImage'>
                <span><FaCloudUploadAlt /></span>
                <p>Upload Images</p>
                <input onChange={handleImageUpload} className='reviewUplImg' type='file' placeholder='upload image' />
              </div>
            </label>
            {previewImage && (
                <div className="image-preview">
                  {previewImage.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} style={{ maxWidth: '100%', marginTop: '10px' }} />
                  ))}                
                </div>
            )}
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