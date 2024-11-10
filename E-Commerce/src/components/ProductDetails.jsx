import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router';
import { products } from'../Data/data';
import '../styles/ProductDetails.css';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaStar, FaRegTrashAlt, FaRegHeart} from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from 'react-icons/io'
import { CiStar } from 'react-icons/ci';
import { useEffect } from 'react';
import { useCart } from './Context/cart';
import toast from 'react-hot-toast';


function ProductDetails({props}) {

    const {addProdToCart} = useCart();
    let {setShowLogin, isLoggedIn, handleLogout, user, submitReview, setSumitReview} = props;
    const {productId} = useParams();

    const product = Array.isArray(products) ? products.find((prod) =>
        prod.name.toLocaleLowerCase() === productId.toLocaleLowerCase()) : '';

    useEffect(() => {
        if(user){
            const existingReviews = JSON.parse(localStorage.getItem('productreviews')) || [];
            setSumitReview(existingReviews.filter(rev => (rev.productId === product.id)));
        }
    }, [user, product.id])  

    return (
        <>  
            <Header setShowLogin={() => setShowLogin(true)}  isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            
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
                                <button><FaRegTrashAlt/></button>
                                <span>{product.quantity}</span>
                                <button><FiPlus /></button>
                            </div>
                            <div className='product-btns'>
                                <button onClick={() => addProdToWishList(product)} className='wishlist-btn'><FaRegHeart /></button>
                                <button onClick={() => addProdToCart(product)} className='add-btn'>Add to Cart</button>
                            </div>
                            <div className='prod-desc'>
                                <Disclosure>  
                                    <DisclosureButton className='DisclosureButton' >Description <span><IoIosArrowDown /></span></DisclosureButton>
                                    <DisclosurePanel className='DisclosurePanel'>{product.description}</DisclosurePanel>
                                </Disclosure>
                            </div>
                            <div className='prod-desc'>
                                <Disclosure> 
                                    <DisclosureButton className='DisclosureButton' >Ratings and Reviews <span><IoIosArrowDown /></span></DisclosureButton>
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
                                                                        ? <FaStar size={20} className='star' color='#f6a261' /> 
                                                                        : <CiStar size={25} className='star' color='#f6a261' />
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

export default ProductDetails;

function addProdToWishList (product){
    const savedProdWishList = JSON.parse(localStorage.getItem('wishlist')) || [];
    const prodAlready = Array.isArray(savedProdWishList) ? savedProdWishList.find((item) => item.id === product.id) : null
    if(prodAlready){
      toast.error("Product Already in WishList")
      return;
    } 
    const newWishList = [...savedProdWishList, product];
    localStorage.setItem('wishlist', JSON.stringify(newWishList));
    toast.success('Product Added To WishList...')
}