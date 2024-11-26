import React from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'

const ViewReviewImage = ({setShowImage, reviewImage}) => {
    return (
        <div className='viewRevImg'>
            <div className='closeViewImg'>
                <button onClick={() => setShowImage(false)}>
                    <RiCloseLargeFill />
                </button>
            </div>
            <div className='ViewImg'>
                <img src={reviewImage} />
            </div>
        </div>
    )
} 

export default ViewReviewImage
