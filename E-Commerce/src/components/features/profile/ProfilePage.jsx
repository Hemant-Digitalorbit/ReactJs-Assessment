import React from 'react'

const ProfilePage = ({user}) => {

  return (
    <section className='user-info-container'>
        <h2 className='user--info-head'>Personal Information</h2>
        <div className='user-info'>
            <div className='user-details'>
              <p>Full Name</p>
              <h6>{user?.name}</h6>
            </div>
            <div className='user-details'>
              <p>Email </p>
              <h6>{user?.email}</h6>
            </div>
        </div>
        <button>Edit</button>  
    </section>
  )
}

export default ProfilePage
