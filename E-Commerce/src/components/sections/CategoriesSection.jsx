import React from 'react';
import '../../assets/styles/Categories.css'
import {Link} from 'react-router-dom'

const CategoriesSection = ({categories, heading}) => {

  return (
    <section>
      <div className="categories"> 
        <h2>{heading}</h2>
        <div className="category-item">
          {categories.map((category) => (
              <Link to={`products/categories/${category.name}`} className='cat-card' key={category.id}>
                <img src={category.image} alt={category.name} />
                <h4>{category.name}</h4>
              </Link>
          ))}
        </div>
      </div>

      <div className='btm-brd'></div>
      
    </section>

  );
};

export default CategoriesSection;
