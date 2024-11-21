import React from 'react';
import '../../../assets/styles/AccountPage.css';
import { useUser } from '../../context/userService';

const AccountPageHeading = ({ props }) => {
    const { user } = useUser();
    const { activeFunction, setViewProfile, setViewTrackOrders, setViewOrdersHistory, setViewContact, setViewFnqs, ...views } = props;

    const sections = [{ label: 'My Profile', view: 'viewProfile', setView: setViewProfile },
        { label: 'Track my order', view: 'viewTrackOrders', setView: setViewTrackOrders },
        { label: 'Order History', view: 'viewOrdersHistory', setView: setViewOrdersHistory },
        { label: 'Contact Us', view: 'viewContact', setView: setViewContact },
        { label: 'FAQs', view: 'viewFnqs', setView: setViewFnqs }];

    return (
        <>
            {user && (
                <section>
                    <div className="main-account-container">
                        {sections.map(({ label, view, setView }) => (
                            <div key={view}>
                                <button onClick={() => activeFunction(setView)}
                                    className={`${view === 'viewProfile' ? 'profile-container' : ''} 
                                                ${view === 'viewTrackOrders' ? 'track-order-container' : ''} 
                                                ${view === 'viewOrdersHistory' ? 'order-history-container' : ''} 
                                                ${view === 'viewContact' ? 'contact-container' : ''} 
                                                ${view === 'viewFnqs' ? 'fq-container' : ''} 
                                                ${views[view] ? 'active' : ''}`}>
                                    {label}
                                </button>
                                <a className="vert-line"></a>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default AccountPageHeading;
