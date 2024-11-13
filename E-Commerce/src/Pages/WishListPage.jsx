import React, { useEffect, useState } from 'react'
import WishListProdCard from '../components/features/wishlist/WishListItem'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../assets/styles/WishList.css'


const WishListPage = ({props}) => {

    let {setShowLogin, isLoggedIn, handleLogout, wishlist, setWishlist, user} = props;

    useEffect(()=> {
        const savedProdWishList = JSON.parse(localStorage.getItem(`wishlist${user.id}`))
        setWishlist(savedProdWishList)
    }, [])

    const deleteWishItem = (itemId) => {
        const deleteProd =  wishlist.filter(item =>  item.id !== itemId) 
        setWishlist(deleteProd)
        localStorage.setItem(`wishlist${user.id}`, JSON.stringify(deleteProd)) 
    }

    return (
        <>
            <Header setShowLogin={() => setShowLogin(true)} user={user} wishlist={wishlist} setWishlist={setWishlist} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
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
