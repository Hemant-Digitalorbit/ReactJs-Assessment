import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router';
import '../assets/styles/ProductDetails.css';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaStar, FaRegTrashAlt, FaRegHeart} from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from 'react-icons/io'
import { CiStar } from 'react-icons/ci';
import { useCallback, useEffect, useState } from 'react';
import { useCart } from '../components/context/cartService';
import { useWishlist } from '../components/context/wishlistService';
import { useOrdersHistory } from '../components/context/orderHistoryService';
import { useUser } from '../components/context/userService';
import { useProduct } from '../components/context/productService';
import { firestore } from '../components/Firebase/Firebase';
import { collection, getDocs } from 'firebase/firestore';
import ViewReviewImage from '../components/Models/ViewReviewImage';


function ProductDetailPage() {

    const {user} = useUser();
    const {addProdToCart} = useCart();
    const {addProdToWishList} = useWishlist()
    const [storeQnty, setStoreQnty] = useState(1)
    const {submitReview, setSumitReview} = useOrdersHistory();
    const {products, loading} = useProduct();
    const {productId} = useParams();
    const [showImage, setShowImage] =useState(false)
    const [reviewImage, setReviewImage] = useState(null); 
    const [zoomImageCordinate, setZoomImageCordinate] = useState({ x: 0, y: 0 });
    const [zoomImage, setZoomImage] = useState(false);

    const product = Array.isArray(products) ? products.find((prod) =>
        prod.name.toLocaleLowerCase() === productId.toLocaleLowerCase()) : null;
    
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewColl = collection(firestore, 'reviews')
                const reviewsnap = await getDocs(reviewColl)
                const reviews = reviewsnap.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                const productReviews = reviews.filter((rev) => rev.productId === product.id);
                setSumitReview(productReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        }
        fetchReviews();
    }, [product])

    function incrementQuantity(e) {
        const step = Number(e.target.getAttribute("data-qnt")) || 1;
        setStoreQnty(storeQnty + step);
    }
      
    function decrementQuantity(e) {
        const step = Number(e.target.getAttribute("data-qnt")) || 1;
        const newQuantity = Math.max(1, storeQnty - step);
        setStoreQnty(newQuantity);
    }

    // Zoom in Image 
    const handleZoomImage = useCallback((e) => {
        setZoomImage(true);
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setZoomImageCordinate({ x, y });
    }, []);

    // Zoom out Image
    const handleLeaveZoomImage = () => {
        setZoomImage(false);
    };
      
    return (
        <>  
            <Header />
            {
                loading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <>
                       <section>
                            {
                                user && (
                                    <div className='main-product-container'>
                                        <div className='image-container'>
                                            <div className='thumbnail-images'>
                                                <img src={product?.image} />
                                                <img src={product?.image} />
                                                <img src={product?.image} />
                                            </div>
                                            <div className='main-image-container'>
                                                <img onMouseMove={handleZoomImage} onMouseLeave={handleLeaveZoomImage} 
                                                src={product?.image} alt={product?.name} />
                                                {/* Zoom Image */}
                                                {zoomImage && (
                                                    <div className='zoom-image-container'>
                                                        <div className='zoom-image'
                                                            style={{backgroundImage: `url(${product.image})`, 
                                                            backgroundPosition: `${zoomImageCordinate.x * 100}% ${zoomImageCordinate.y * 100}%`}}>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className='main-product-content'>
                                            <div className='product-highligh-sec'>
                                                <p>{product?.brand}</p>
                                                <h6><FaStar />{product?.ratings}</h6>
                                            </div>
                                            <h3>{product?.name}</h3>
                                            <p className='prod-price'>$ {product?.price}</p>
                                            {/* if weight in product then otherwise no */}
                                            {
                                                product?.weight && (
                                                    <div className='product?-weight'>
                                                        <p>{product?.weight}</p>
                                                    </div>
                                                )
                                            }
                                            <div className='quantity-btns'>
                                                <button onClick={decrementQuantity} data-qnt="-1"><FaRegTrashAlt/></button>
                                                <input className="change-quantity"  type="number" value={storeQnty} readOnly />
                                                <button onClick={incrementQuantity} data-qnt="1"><FiPlus /></button>
                                            </div>
                                            <div className='product-btns'>
                                                <button onClick={() => addProdToWishList(product)} className='wishlist-btn'><FaRegHeart /></button>
                                                <button onClick={() => addProdToCart(product, storeQnty)} className='add-btn'>Add to Cart</button>
                                            </div>
                                            <div className='prod-desc'>
                                                <Disclosure>  
                                                    <DisclosureButton className='DisclosureButton' >Description <span><IoIosArrowDown /></span></DisclosureButton>
                                                    <DisclosurePanel className='DisclosurePanel'>{product?.description}</DisclosurePanel>
                                                </Disclosure>
                                            </div>
                                            <div className='prod-desc'>
                                                <Disclosure> 
                                                    <DisclosureButton className='DisclosureButton' >Ratings and Reviews<span><IoIosArrowDown /></span></DisclosureButton>
                                                    <DisclosurePanel className='DisclosurePanel'>

                                                        {
                                                            submitReview.map((rev) => (
                                                                <div key={rev.id} className='review-container'>
                                                                    <img className='reviewerImg' src='https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' alt={submitReview.name} />
                                                                    <div className='review-cnt'>
                                                                        <h4>{rev?.reviewerName}</h4>
                                                                        <p>
                                                                            {[...Array(5)].map((a, ind) => (
                                                                                <span key={ind}>
                                                                                    {   
                                                                                        ind < rev.rating 
                                                                                        ? <FaStar size={20} className='star' color='rgba(80, 111, 34, 1)' /> 
                                                                                        : <CiStar size={25} className='star' color='rgba(80, 111, 34, 1)' />
                                                                                    }  
                                                                                </span>
                                                                            ))}
                                                                        </p>
                                                                        <p>{rev.review}</p>
                                                                        {
                                                                            rev.imageData && (
                                                                                <div className='revImg-container'>
                                                                                    {Array.isArray(rev.imageData) 
                                                                                        ? rev.imageData.length > 0 
                                                                                            ? rev.imageData.map((image, index) => (
                                                                                                <div key={index} onClick={() => { setShowImage(true); setReviewImage(image); }} className='revImg'>
                                                                                                    <img src={image} alt={`Uploaded Review Image ${index + 1}`} />
                                                                                                </div>
                                                                                            )) 
                                                                                            : null 
                                                                                        : (
                                                                                            <div onClick={() => { setShowImage(true); setReviewImage(rev.imageData); }} className='revImg'>
                                                                                                <img src={rev.imageData} alt="Uploaded Review Image" />
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        }
                                                                    </div>  
                                                                </div>
                                                            ))
                                                        }
                                                        
                                                    </DisclosurePanel>
                                                </Disclosure>
                                            </div>                      
                                        </div>
                                    </div> 
                                )
                            }                       
                        </section>
                        {showImage && <ViewReviewImage reviewImage={reviewImage} showImage={showImage} setShowImage={setShowImage} />}
                    </>
                )
            }
            <Footer />

        </>
    )
}

export default ProductDetailPage;
