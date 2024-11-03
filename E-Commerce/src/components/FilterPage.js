import React, { useEffect, useState } from 'react'
import "../styles/FilterPage.css"
import { products } from '../Data/data';
import { MdClear, MdTune } from "react-icons/md";
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useParams } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';


const FilterPage = () => {
  
  const location = useLocation()
  const { brandId } = useParams()
  // Sorting Product
  const [selectOptions, setSelectOptions] = useState('')
  const [sortingDirection, setSortingDirection] = useState(true)

  const [filterProducts, setFilterProducts] = useState([])

  const [isActive, setIsActive] = useState(false)
  // Passes Other Products Using State 
  const { bestSellers } = location.state || { bestSellers: [] }
  const { popularProducts } = location.state ||{ popularProducts: [] }

  // Filters Section Variable
  const filters = [
    {
      id: 'weight',
      name: 'Weights',
      options : [
        {label: '1gm' , value: '1gm', checked: false},
        {label: '1/8oz' , value: '1/8oz', checked: false},
        {label: '5gm' , value: '5gm', checked: false},
        {label: '1/4oz' , value: '1/4oz', checked: false}
      ]
    },
    {
      id: 'brand',
      name: 'Brand',
      options : [
        {label: 'Apple', value: 'apple', checked: false},
        {label: 'Samsung', value: 'samsung', checked: false}
      ]
    },
    {
      id: 'category',
      name: 'Category',
      options : [
        {label: 'Electronics', value: 'electronics', checked: false},
        {label: 'Fashion', value: 'fashion', checked: false},
        {label: 'Home', value: 'home', checked: false},
        {label: 'Sports', value: 'sports', checked: false},
        {label: 'Toys', value: 'toys', checked: false},
      ]
    },
    {
      id: 'bestsellerproducts',
      name: 'Best Sellers Products'
    },
    {
      id: 'mostpopular',
      name: 'Most Popular'
    }
  ]

  useEffect(() => {
    if  (products && Array.isArray(products)) {
      const productThroughBrandId = products.filter((product) => product.brand.toLowerCase() === brandId.toLowerCase());
      setFilterProducts(productThroughBrandId)
    }else {
      console.log('products is undefined')
      setFilterProducts([])
    }
  },[brandId,products])

  const handleSortByChanges = (option) => {
    if (selectOptions === option) {
      setSortingDirection(!sortingDirection)
    }else {
      setSelectOptions(option)
      setSortingDirection(true)
    }

    setFilterProducts((prev) => {
      return [...prev].sort((a, b) => {
        if (option === 'price') {
          console.log(option)
          return sortingDirection ? a.price - b.price : b.price - a.price;
        }
        if (option === 'popularProducts') {
          return sortingDirection ? a.popularProducts - b.popularProducts : b.popularProducts - a.popularProducts;
        }
        if (option === 'recent') {
          return sortingDirection ? new Date(a.dateAdded) - new Date(b.dateAdded) : new Date(b.dateAdded) - new Date(a.dateAdded);
        }
        return 0;
      })
      
    })
  }

  // Clear All Sorting
  const handleClearAll = () => {
    setFilterProducts(products)
    setSelectOptions('')
    setIsActive((prev) => !prev)
  }

  return (
    <>
      <Header />
      <main>
        <div className='filter-page'>
        <h2>Products</h2>

        <div className='filter-container'>
          <div className='filter-section'> 
            <p>Filter By <MdTune style={{width: '20px', height: '20px'}} /></p>
          </div>
          <div className='sorting-section'>
            <p>Sort By: </p>

              <button onClick={() => handleSortByChanges('price')} className={`sort-button ${selectOptions === 'price' ? 'active' : ''}`}
                      style={{backgroundColor: selectOptions === 'price' ? '#FA910829' : '#FA910800'}}>
                Price
                <span>
                  <p style={{ color: selectOptions === 'price' && sortingDirection ? '#555555' : '#C0C0C0' }}>
                    <IoCaretUpSharp />
                  </p>
                  <p style={{ color: selectOptions === 'price' && !sortingDirection ? '#555555' : '#C0C0C0' }}>
                    <IoCaretDownSharp />
                  </p>
                </span>
              </button>

              <button onClick={() => handleSortByChanges('popularProducts')} className={`sort-button ${selectOptions === 'popularProducts' ? 'active' : ''}`}
                style={{backgroundColor: selectOptions === 'popularProducts' ? '#FA910829' : '#FA910800'}}>
              Popularity
                <span>
                  <p style={{ color: selectOptions === 'popularProducts' && sortingDirection ? '#555555' : '#C0C0C0' }}>
                    <IoCaretUpSharp />
                  </p>
                  <p style={{ color: selectOptions === 'popularProducts' && !sortingDirection ? '#555555' : '#C0C0C0' }}>
                    <IoCaretDownSharp />
                  </p>
                </span>
              </button>

              <button onClick={() => handleSortByChanges('recent')} className={`sort-button ${selectOptions === 'recent' ? 'active' : ''}`}
                style={{backgroundColor: selectOptions === 'recent' ? '#FA910829' : '#FA910800'}} >
              Recently Added
                <span>
                  <p style={{ color: selectOptions === 'recent' && sortingDirection ? '#555555' : '#C0C0C0' }}>
                    <IoCaretUpSharp />
                  </p>
                  <p style={{ color: selectOptions === 'recent' && !sortingDirection ? '#555555' : '#C0C0C0' }}>
                    <IoCaretDownSharp />
                  </p>
                </span>
              </button>

              <div className='filter-line'></div>

              <button onClick={handleClearAll} className='clear-sec'
                style={{backgroundColor: isActive ? '#EA3D3263' : 'transparent'}}>
                Clear All <MdClear />
              </button>
          </div>
        </div>

        {/* product card */}
        <div className='filter-main-section'>
          {/* Filter Aside */}
          <aside className='filter-aside'>
            {
              filters.map((filter) => (
                <Disclosure key={filter.id}>
                    <h3>
                      <DisclosureButton className='DisclosureButton'>
                        <span>{filter.name}</span>
                        {
                          filter.options &&
                          <>
                            <span>
                              <IoIosArrowDown className='IoIosArrowDown' />
                            </span>
                          </>
                        }
                      </DisclosureButton>
                    </h3>
                    {/* options are availablw then use */}
                    {
                      filter.options && 
                        <DisclosurePanel className='DisclosurePanel'>
                        <div className='button-grid'>
                          {
                            filter.options.map((option, optionIdx) => (
                              <button key={option.value} id={`filter-${filter.id}-${optionIdx}`} className={`filter-button ${option.checked ? 'selected' : ''}`}>
                                <label>{option.label}</label>
                              </button>
                            ))
                          }
                        </div>
                      </DisclosurePanel>
                    }
                    
                </Disclosure>
              ))
            }
            
          <div className='border-line'></div>

          </aside>
          {/* Product Details */}
          <div className='filter-page-card'>
            {
              filterProducts && 
              (
                filterProducts.map((product) => (
                    <div key={product.id} className='filter-prod-card'>
                    <img src={product.image} />
                    <h6 className='rating'><FaStar/>{product.ratings}</h6>
                    <p>{product.brand}</p>
                    <h4>{product.name}</h4>
                    <div className='prod-card-ft'>
                      <p>$ {product.price}</p>
                      <button><FaHeart /></button>
                      <button><FaShoppingCart /></button>
                    </div>
                  </div>
                )) 
              )
            }
            {
              bestSellers && 
              (
                bestSellers.map((product) => (
                    <div key={product.id} className='filter-prod-card'>
                    <img src={product.image} />
                    <h6 className='rating'><FaStar/>{product.ratings}</h6>
                    <p>{product.brand}</p>
                    <h4>{product.name}</h4>
                    <div className='prod-card-ft'>
                      <p>$ {product.price}</p>
                      <button><FaHeart /></button>
                      <button><FaShoppingCart /></button>
                    </div>
                  </div>
                )) 
              )
            }
            {
              popularProducts && 
              (
                popularProducts.map((product) => (
                    <div key={product.id} className='filter-prod-card'>
                    <img src={product.image} />
                    <h6 className='rating'><FaStar/>{product.ratings}</h6>
                    <p>{product.brand}</p>
                    <h4>{product.name}</h4>
                    <div className='prod-card-ft'>
                      <p>$ {product.price}</p>
                      <button><FaHeart /></button>
                      <button><FaShoppingCart /></button>
                    </div>
                  </div>
                )) 
              )
            }            
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FilterPage
