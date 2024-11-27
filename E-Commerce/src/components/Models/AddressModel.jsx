import React, { useEffect, useState } from 'react';
import '../../assets/styles/AddressModel.css';
import { useUser } from '../context/userService';
import { useOrdersHistory } from '../context/orderHistoryService';
import { useNavigate } from 'react-router';

const AddressModel = ({ isOpen, onClose }) => {
    const [address, setAddress] = useState({phone: '', street: '', city: '', state: '', zipCode: '', country: ''});
    const {addresses, handleSaveAddress, handleSaveOrEditAddress} = useUser();
    const {checkoutCart} = useOrdersHistory();
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };
    console.log(addresses[0]?.phone);
    useEffect(() => {
        if (addresses && addresses.length > 0) {
            const [firstAddress] = addresses; 
            setAddress({
                phone: firstAddress.phone || '',
                street: firstAddress.street || '',
                city: firstAddress.city || '',
                state: firstAddress.state || '',
                zipCode: firstAddress.zipCode || '',
                country: firstAddress.country || ''
            });
        }
    }, [addresses])

    const handleSubmit = () => {
        handleSaveOrEditAddress(address)
        checkoutCart();
        navigate('/account/orders-history');
        onClose();
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="address-modal-overlay">
            <div className="address-modal">
                <h3>{addresses.length > 0 ? 'Edit Address' : 'Add New Address'}</h3>
                <form>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name="phone" value={address.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                    </div>
                    <div className="form-group">
                        <label>Street</label>
                        <input type="text" name="street" value={address.street} onChange={handleChange} placeholder="Enter your street" required />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="city" value={address.city} onChange={handleChange} placeholder="Enter your city" required />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" name="state" value={address.state} onChange={handleChange} placeholder="Enter your state" required />
                    </div>
                    <div className="form-group">
                        <label>Zip Code</label>
                        <input type="text" name="zipCode" value={address.zipCode} onChange={handleChange} placeholder="Enter your zip code" required />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" name="country" value={address.country} onChange={handleChange} placeholder="Enter your country" required />
                    </div>
                </form>
                <div className="modal-actions">
                <button className="cancel-btn" onClick={onClose}>
                    Cancel
                </button>
                <button className="save-btn" onClick={handleSubmit}>
                    Save
                </button>
                </div>
            </div>
        </div>
    );
};

export default AddressModel;

