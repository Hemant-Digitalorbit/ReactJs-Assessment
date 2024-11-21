import React from 'react'
import { useUser } from '../../context/userService'

const ProfilePage = () => {
  const {user} = useUser();
  console.log(user)
  return (
    <section className='user-info-container'>
        <h2 className='user--info-head'>Personal Information</h2>
        <div className='user-info'>
            <div className='user-details'>
              <p>Full Name</p>
              <h6>{user.displayName}</h6>
            </div>
            <div className='user-details'>
              <p>Email </p>
              <h6>{user.email}</h6>
            </div>
        </div>  
        <button>Edit</button>  
    </section>
  )
}

export default ProfilePage
