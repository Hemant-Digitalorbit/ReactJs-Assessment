import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useUser } from '../components/context/userService';
import AccountPageHeading from '../components/features/profile/AccountPageHeading';
import ProfilePage from '../components/features/profile/ProfilePage';
import TrackOrder from '../components/features/profile/TrackOrder';
import OrderHistory from '../components/features/profile/OrderHistory';
import ContactPage from './ContactPage';
import { useLocation } from 'react-router';

const AccountPage = () => {
    const {user} = useUser();
    const location = useLocation();

    const [viewProfile, setViewProfile] = useState(false);
    const [viewOrdersHistory, setViewOrdersHistory] = useState(false);
    const [viewTrackOrders, setViewTrackOrders] = useState(false);
    const [viewContact, setViewContact] = useState(false);
    const [viewFnqs, setViewFnqs] = useState(false);

    useEffect(() => {
        const path = location.pathname.split('/').pop(); 
        resetViews();
        if (path === 'orders-history') {
            setViewOrdersHistory(true);
        } else if (path === 'tracking-order') {
            setViewTrackOrders(true);
        } else if (path === 'contact') {
            setViewContact(true);
        } else if (path === 'f&q') {
            setViewFnqs(true);
        } else {
            setViewProfile(true);
        }
    }, [location]);

    const resetViews = () => {
        setViewProfile(false);
        setViewOrdersHistory(false);
        setViewTrackOrders(false);
        setViewContact(false);
        setViewFnqs(false);
    };

    const activeFunction = (active) => {
        resetViews();
        active(true)
    }

    return (
        <>
            <Header/>
            <section>
                {user && (
                    <>
                        <AccountPageHeading  props={{activeFunction, viewProfile, setViewProfile, viewOrdersHistory, setViewOrdersHistory, viewTrackOrders, setViewTrackOrders,viewContact, setViewContact, viewFnqs, setViewFnqs }}/>
                        { viewProfile && ( <ProfilePage /> ) }
                        { viewTrackOrders && ( <TrackOrder /> ) }
                        { viewOrdersHistory && ( <OrderHistory /> ) }
                        { viewContact && ( <ContactPage /> ) }
                    </>
                )}
            </section>
            <Footer />
        </>
    )
}

export default AccountPage
