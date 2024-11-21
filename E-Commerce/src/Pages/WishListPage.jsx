import React from 'react'
import WishListItem from '../components/features/wishlist/WishListItem'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/styles/WishList.css'
import { useWishlist } from '../components/context/wishlistService'
import { useUser } from '../components/context/userService'
import { useProduct } from '../components/context/productService'


const WishListPage = () => {

    const {user} = useUser();
    const { wishlist} = useWishlist();
    const { products } = useProduct();
 
    return (
        <>
            <Header />
            <section>
                <h2>WishList</h2>
                <div className='card-section'>
                    <div className='wishlist-card'>
                        {
                            (user && Array.isArray(wishlist)) && wishlist.map((product, index) => {
                                const wishProd = products.find((prod) => prod.id === product.id);
                                if (!wishProd) return null;
                                return (
                                    <WishListItem key={index} product={wishProd}  />
                                )
                            })
                        }
                    </div>

                    
                </div>

            </section>
        {/* Footer */}
        <Footer />
        </>
  )
}

export default WishListPage
