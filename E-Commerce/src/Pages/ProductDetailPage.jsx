import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router';
import { products } from'../Data/data';
import '../assets/styles/ProductDetails.css';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaStar, FaRegTrashAlt, FaRegHeart} from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from 'react-icons/io'
import { CiStar } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import { useCart } from '../components/features/services/cartService';
import { useUser } from '../components/features/services/userService';
import { useWishlist } from '../components/features/services/wishlistService';
import { useOrdersHistory } from '../components/features/services/orderHistoryService';


function ProductDetailPage() {

    const {user, setShowLogin, isLoggedIn, handleLogout} = useUser();
    const {addProdToCart} = useCart();
    const {wishlist, setWishlist, addProdToWishList} = useWishlist()
    const [storeQnty, setStoreQnty] = useState(1)
    const {submitReview, setSumitReview} = useOrdersHistory();
    const {productId} = useParams();

    const product = Array.isArray(products) ? products.find((prod) =>
        prod.name.toLocaleLowerCase() === productId.toLocaleLowerCase()) : '';

    useEffect(() => {
        if(user){
            const existingReviews = JSON.parse(localStorage.getItem('productreviews')) || [];
            setSumitReview(existingReviews.filter(rev => (rev.productId === product.id)));
        }   
    }, [user, product.id])  

    function incrementQuantity(e) {
        const step = Number(e.target.getAttribute("data-qnt")) || 1;
        setStoreQnty(storeQnty + step);
    }
      
    function decrementQuantity(e) {
        const step = Number(e.target.getAttribute("data-qnt")) || 1;
        const newQuantity = Math.max(1, storeQnty - step);
        setStoreQnty(newQuantity);
    }
      
    return (
        <>  
            <Header setShowLogin={() => setShowLogin(true)} user={user} wishlist={wishlist} setWishlist={setWishlist} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            
            <section>
                {
                    isLoggedIn && (
                        <div className='main-product-container'>
                            <div className='image-container'>
                                <div className='thumbnail-images'>
                                    <img src={product.image} />
                                    <img src={product.image} />
                                    <img src={product.image} />
                                </div>
                                <div className='main-image-container'>
                                    <img src={product.image} alt={product.name} />
                                </div>
                            </div>
                            <div className='main-product-content'>
                                <div className='product-highligh-sec'>
                                    <p>{product.brand}</p>
                                    <h6><FaStar />{product.ratings}</h6>
                                </div>
                                <h3>{product.name}</h3>
                                <p className='prod-price'>$ {product.price}</p>
                                {/* if weight in product then otherwise no */}
                                {
                                    product.weight && (
                                        <div className='product-weight'>
                                            <p>{product.weight}</p>
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
                                        <DisclosurePanel className='DisclosurePanel'>{product.description}</DisclosurePanel>
                                    </Disclosure>
                                </div>
                                <div className='prod-desc'>
                                    <Disclosure> 
                                        <DisclosureButton className='DisclosureButton' >Ratings and Reviews<span><IoIosArrowDown /></span></DisclosureButton>
                                        <DisclosurePanel className='DisclosurePanel'>

                                            {
                                                submitReview.map((rev) => (
                                                    <div key={rev.id} className='review-container'>
                                                        <img src='https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' alt={submitReview.name} />
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

            <Footer />
        </>
    )
}

export default ProductDetailPage;
