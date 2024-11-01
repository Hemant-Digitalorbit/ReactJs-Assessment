import React, { useEffect, useState } from 'react'
import '../styles/Brands.css'
import {Link} from "react-router-dom"

const Brands = ({brands, heading}) => {

  return (
    <>
      <div className="brands">
        <div className='heading-cont'>
          <h2>{heading}</h2>
          <p>View All</p>
        </div>
        <div className='brands-card'>
          {
            brands.map((brand) => (
              <Link to={`/products/${brand.id}`} className='brand-card' key={(brand.id)}>
                <img src={brand.image} />
                <h3>{brand.name}</h3>
              </Link>
            ))
          }
        </div>
      </div>

      <div className='bottom-border'></div>
    </>

  )
}

export default Brands
