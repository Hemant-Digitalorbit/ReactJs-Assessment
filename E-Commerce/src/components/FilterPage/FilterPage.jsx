import React, { useEffect, useState } from 'react';
import "../../styles/FilterPage.css";
import { MdTune } from "react-icons/md";
import { useLocation, useParams } from 'react-router';
import toast from 'react-hot-toast';
import { filters } from '../../Data/filterdata';
import FilterSection from './FilterSection';
import SortingSection from './SortingSection';
import ProductCard from '../ProductCard';
import Header from '../Header';
import Footer from '../Footer';
import { products } from '../../Data/data';

const FilterPage = ({ props }) => {
  let { setShowLogin, isLoggedIn } = props;

  const location = useLocation();
  const { brandId, categoryId } = useParams();
  const bestSellers = location.state?.bestSellers || {};
  const popularProducts = location.state?.popularProducts || {};

  console.log(categoryId)
  // Sorting Product
  const [selectOptions, setSelectOptions] = useState('');
  const [sortingDirection, setSortingDirection] = useState(true);

  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemAtPage = 12;
  const totalPages = Math.ceil(filterProducts.length / itemAtPage);

  const lastProd = currentPage * itemAtPage;
  const firstProd = lastProd - itemAtPage;
  const currentProd = Array.isArray(filterProducts) ? filterProducts.slice(firstProd, lastProd) : [];


  useEffect(() => {
    let prodThrghBrandCategry = products;
    
    if (brandId) {
      prodThrghBrandCategry = prodThrghBrandCategry.filter(product => product.brand.toLowerCase() === brandId.toLowerCase());
    } else if (categoryId) {
      prodThrghBrandCategry = prodThrghBrandCategry.filter(product => product.category.toLowerCase() === categoryId.toLowerCase());
    } else if (bestSellers.length > 0) {
      prodThrghBrandCategry = bestSellers;
    } else if (popularProducts.length > 0) {
      prodThrghBrandCategry = popularProducts;
    }

    setFilterProducts(prodThrghBrandCategry);
  }, [brandId, categoryId, bestSellers, popularProducts]);

  // Handle Sorting
  const handleSortByChanges = (option) => {
    const newSortDir = selectOptions === option ? !sortingDirection : true;
    setSelectOptions(option);
    setSortingDirection(newSortDir);

    const sortedPrd = [...filterProducts].sort((a, b) => {
      if (option === 'price') return sortingDirection ? a.price - b.price : b.price - a.price;
      if (option === 'popularProducts') return sortingDirection ? a.ratings - b.ratings : b.ratings - a.ratings;
      if (option === 'recent') return sortingDirection ? new Date(a.dateAdded) - new Date(b.dateAdded) : new Date(b.dateAdded) - new Date(a.dateAdded);
      return 0;
    });
    setFilterProducts(sortedPrd);
  };

  // Clear All Sorting
  const handleClearAll = () => {
    setFilterProducts(products);
    setSelectedFilters({});
    setSelectOptions('');
    toast.success("All Filters Cleared");
  };

  // Handle Filter Selection
  const handleFilterSelect = (filterType, optionValue) => {
    setSelectedFilters((prev) => {
      const currentSelected = prev[filterType] || [];
      if (currentSelected.includes(optionValue)) {
        return {
          ...prev,
          [filterType]: currentSelected.filter((val) => val !== optionValue),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentSelected, optionValue],
        };
      }
    });
  };

  // Apply selected filters to products
  useEffect(() => {
    let filtered = products;
    Object.entries(selectedFilters).forEach(([filterType, selectOptions]) => {
      if (selectOptions.length > 0) {
        filtered = filtered.filter((product) =>
          selectOptions.some((optionValue) =>
            product[filterType] && product[filterType].toLowerCase().includes(optionValue.toLowerCase())
          )
        );
      }
    });
    setFilterProducts(filtered);
  }, [selectedFilters]);

  return (
    <>
      <Header setShowLogin={() => setShowLogin(true)} isLoggedIn={isLoggedIn} />

      <section>
        <div className='filter-page'>
          <h2>Products</h2>

          <div className='filter-container'>
            <div className='filter-section'>
              <p>Filter By <MdTune style={{ width: '20px', height: '20px' }} /></p>
            </div>
            {/* Sorting */}
            <div className='sorting-section'>
              <p>Sort By: </p>
              <SortingSection props={{ selectOptions, sortingDirection, handleSortByChanges, handleClearAll }} />
            </div>
          </div>

          {/* Product card */}
          <div className='filter-main-section'>
            {/* Filter Aside */}
            <aside className='filter-aside'>
              {/* Filtering Section Components */}
              <FilterSection props={{ filters, selectedFilters, handleFilterSelect }} />
              <div className='border-line'></div>
            </aside>
            {/* Product Details */}
            <div className='filter-page-card'>
              {
                currentProd.length > 0 ? currentProd.map((product) => (
                  <ProductCard key={product.id} product={product} />
                )) : <p>No products found.</p>
              }
            </div>
          </div>

          {/* Pagination */}
          <div className='pagination'>
            <button onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : 1))} disabled={currentPage === 1}>
              Previous
            </button>
            <p>Page <span>{currentPage}</span> of <span>{totalPages}</span></p>
            <button onClick={() => setCurrentPage(prev => (prev < totalPages ? prev + 1 : totalPages))} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FilterPage;
