import React from 'react'
import { useUser } from '../../context/userService'
import AddressModel from '../../Models/AddressModel';

const ProfilePage = () => {
  const {user, addresses, openAddModel, setOpenAddModel} = useUser();
  return (
    <section className='user-info-container'>
        <div className='user-info-cnt'>
          <h2 className='user--info-head'>Personal Information</h2>
        </div>
        <div className='user-info'>
            <div className='user-details'>
              <p>Full Name</p>
              <h6>{user.displayName}</h6>
            </div>  
            <div className='user-details'>
              <p>Email </p>
              <h6>{user.email}</h6>
            </div>
            <div className='user-details'>
              <p>Addresses </p>
              {addresses.length > 0 ? (
                <div>
                  {addresses.map((address, index) => (
                    <p key={index}>
                      {address.street}, {address.city}, {address.state},<br></br> {address.zipCode}, {address.country} 
                      (Phone: {address.phone})
                    </p>
                  ))}
                </div>
              ) : (
                <p>No addresses added yet.</p>
              )}
            </div>
        </div>  
        {
          openAddModel && (
            <AddressModel isOpen={openAddModel} onClose={() => setOpenAddModel(false)} />
          )
        }
    </section>
  )
}

export default ProfilePage
