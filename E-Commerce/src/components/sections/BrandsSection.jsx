import React from 'react'
import '../../assets/styles/Brands.css'
import {Link} from "react-router-dom"

const BrandsSection = ({brands, heading}) => {
  

  return (
    <section>
      <div className="brands">
        <div className='heading-content'>
          <h2>{heading}</h2>
        </div>
        <div className='brands-card'>
          {
            brands.map((brand) => (
              <Link to={`/products/brands/${brand.name}`} className='brand-card' key={(brand.id)}>
                <img src={brand.image} />
                <h3>{brand.name}</h3>
              </Link>
            ))
          }
        </div>
      </div>

      <div className='btm-brd'></div>
    </section>

  )
}

export default BrandsSection;
