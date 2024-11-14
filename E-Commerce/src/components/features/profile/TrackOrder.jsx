import React from 'react'
import { useUser } from '../services/userService'

const TrackOrder = () => {
  const {user} = useUser()
  return (
    <div>
      Track Order
    </div>
  )
}

export default TrackOrder
