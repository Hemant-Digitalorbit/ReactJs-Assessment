import React, { useEffect, useState } from 'react'
import "../../styles/FilterPage.css"
import { products } from '../../Data/data';
import { MdClear, MdTune } from "react-icons/md";
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
import { useLocation, useParams } from 'react-router';
import toast from 'react-hot-toast';
import { filters } from '../../Data/filterdata';
import FilterProdCard from './FilterProdCard';
import FilterSection from './FilterSection';

const FilterPage = () => {
  
  const location = useLocation()
  const { brandId } = useParams()
  // Sorting Product
  const [selectOptions, setSelectOptions] = useState('')
  const [sortingDirection, setSortingDirection] = useState(true)

  const [filterProducts, setFilterProducts] = useState([])
  const [selectedFilters, setSelectedFilters] = useState([])
  // Passes Other Products Using State 
  const { bestSellers } = location.state || { bestSellers: [] }
  const { popularProducts } = location.state ||{ popularProducts: [] }


  useEffect(() => {
      let productThroughBrandId = products;
      if(brandId) {
        productThroughBrandId = productThroughBrandId.filter(product => product.brand.toLowerCase() === brandId.toLowerCase())
      }
      setFilterProducts(productThroughBrandId)
  },[brandId])


  // Handle Sorting 
  const handleSortByChanges = (option) => {
    const newSortDir = selectOptions === option ? !sortingDirection : true;
    setSelectOptions(option)
    setSortingDirection(newSortDir)

    const sortedPrd = [...filterProducts].sort((a, b) => {
      if (option === 'price') return sortingDirection ? a.price - b.price : b.price - a.price;
      if (option === 'popularProducts') return sortingDirection ? a.ratings - b.ratings : b.ratings - a.ratings;
      if (option === 'recent') return sortingDirection ? new Date(a.dateAdded) - new Date(b.dateAdded) : new Date(b.dateAdded) - new Date(a.dateAdded);
      return 0;
    })
    setFilterProducts(sortedPrd)
  }

  // Clear All Sorting
  const handleClearAll = () => {
    setFilterProducts(products)
    setSelectOptions('')
    toast.success("All Filter Cleared")
  }

  // Handle Filter Selection
  const handleFilterSelect = (filterType, optionValue) => {
    setSelectedFilters((prev) => ({...prev, [filterType]: prev[filterType] === optionValue ? null : optionValue }));
  };

  useEffect(() => {
    let filtered = products;
    Object.entries(selectedFilters).forEach(([filterType, optionValue]) => {
      if (optionValue) {
        filtered = filtered.filter(product => product[filterType].toLowerCase() === optionValue.toLowerCase());
      }
    });
    setFilterProducts(filtered);
  }, [selectedFilters]);

  return (
    <>
      <section>
        <div className='filter-page'>
        <h2>Products</h2>

        <div className='filter-container'>
          <div className='filter-section'> 
            <p>Filter By <MdTune style={{width: '20px', height: '20px'}} /></p>
          </div>
          {/* Sorting */}
          <div className='sorting-section'>
            <p>Sort By: </p>

              <button onClick={() => handleSortByChanges('price')} className= 'sort-button'
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

              <button onClick={() => handleSortByChanges('popularProducts')}  className= 'sort-button'
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

              <button onClick={() => handleSortByChanges('recent')} className= 'sort-button'
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

              <button onClick={handleClearAll} className='clear-sec'>
                Clear All <MdClear />
              </button>
          </div>
        </div>

        {/* product card */}
        <div className='filter-main-section'>
          {/* Filter Aside */}
          <aside className='filter-aside'>
            <FilterSection props={{filters, selectedFilters, handleFilterSelect}} />
          <div className='border-line'></div>

          </aside>
          {/* Product Details */}
          <div className='filter-page-card'>
            {
              (filterProducts.length > 0 ? filterProducts : [...(bestSellers || []), ...(popularProducts || [])]).map((product) => (
                  <FilterProdCard key={product.id} product={product} /> 
              ))
            }
          </div>

        </div>
        </div>
      </section>
    </>
  )
}

export default FilterPage
