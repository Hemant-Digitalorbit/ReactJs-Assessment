import React, { useEffect, useState } from 'react'
import WishListProdCard from './WishListProdCard'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles/WishList.css'


const WishListPage = ({props}) => {

    let {setShowLogin, isLoggedIn, handleLogout, user} = props;
    const [wishlist, setWishlist] = useState([])

    useEffect(()=> {
        if (user) {
            const savedProdWishList = JSON.parse(localStorage.getItem(`wishlist${user.id}`))
            setWishlist(savedProdWishList)
        } else {
            setWishlist([])
            localStorage.removeItem(`wishlist${user?.id}`);
        }
    }, [user])

    const deleteWishItem = (itemId) => {
        if (user) {
            const deleteProd =  wishlist.filter(item =>  item.id !== itemId) 
            setWishlist(deleteProd)
            localStorage.setItem(`wishlist${user.id}`, JSON.stringify(deleteProd))
        }
    }

    return (
        <>
            <Header setShowLogin={() => setShowLogin(true)}  isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            <section>
                <h2>WishList</h2>
                <div className='card-section'>
                    <div className='wishlist-card'>
                        {
                            isLoggedIn && wishlist?.map((product, index) => (
                                <WishListProdCard key={index} props={{product, deleteWishItem}}  />
                            ))
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
