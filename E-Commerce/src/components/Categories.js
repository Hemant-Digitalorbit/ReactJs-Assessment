import React, { useEffect, useState } from 'react';
import '../styles/Categories.css'
import {Link} from 'react-router-dom'

const Categories = ({categories, heading}) => {

  return (
    <>
      <div className="categories"> 
        <h2>{heading}</h2>
        <div className="category-item">
          {categories.map((category) => (
              <Link to={`products/${category.title}`} className='cat-card' key={category.id}>
                <img src={category.image} alt={category.title} />
                <h4>{category.title}</h4>
              </Link>
          ))}
        </div>
      </div>

      <div className='bottom-border'></div>
    </>

  );
};

export default Categories;
