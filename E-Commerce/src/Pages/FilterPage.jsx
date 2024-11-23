  import React, { useEffect, useState } from 'react';
  import "../assets/styles/FilterPage.css";
  import { MdTune } from "react-icons/md";
  import { useLocation, useParams } from 'react-router';
  import toast from 'react-hot-toast';
  import { filters } from '../assets/Data/filterdata';
  import FilterSection from '../components/features/filter/FilterSection';
  import SortingSection from '../components/features/filter/SortingSection';
  import ProductCard from '../components/ProductCard/ProductCard';
  import Header from '../components/Header/Header';
  import Footer from '../components/Footer/Footer';
  import FilterModel from '../components/Models/FilterModel';
  import FilterSortingModel from '../components/Models/FilterSortingModel';
  import { useUser } from '../components/context/userService';
  import { useProduct } from '../components/context/productService';

  const FilterPage = () => {
    
    const { user} = useUser();
    const { products, loading } = useProduct();
    const location = useLocation();
    const { brandId, categoryId } = useParams();
    const bestSellers = location.state?.bestSellers || []; 
    const popularProducts = location.state?.popularProducts || []; 
    const [heading, setHeading] = useState('')


    const [selectOptions, setSelectOptions] = useState('');
    const [sortingDirection, setSortingDirection] = useState(true);
    const [filterProducts, setFilterProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [selectedSortBy, setSelectedSortBy] = useState('');

    const [originalProducts, setOriginalProducts] = useState([]);


    const [showDown, setShowDown] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)
    const [appliedFilters, setAppliedFilters] = useState({});

    const handleApplyFilters = () => {
      setAppliedFilters(selectedFilters);
    };
    
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemAtPage = 12;
    const totalPages = Math.ceil(filterProducts.length / itemAtPage);
    const lastProd = currentPage * itemAtPage;
    const firstProd = lastProd - itemAtPage;
    const currentProd = Array.isArray(filterProducts) ? filterProducts.slice(firstProd, lastProd) : [];

    useEffect(() => {
      let prodList = products;
      if (brandId) prodList = prodList.filter(p => p.brand.toLowerCase() === brandId.toLowerCase());
      if (categoryId) prodList = prodList.filter(p => p.category.toLowerCase() === categoryId.toLowerCase());
      else {
        if (bestSellers.length) {
          prodList = bestSellers;
        }
        if (popularProducts.length) {
          prodList = popularProducts;
        }
      }
      setFilterProducts(prodList);
      setOriginalProducts(prodList);
      setHeading(brandId || categoryId || bestSellers.length ? brandId || categoryId || 'Best Sellers' : 'Popular');
    }, [brandId, categoryId, bestSellers, popularProducts]);

    // Handle sorting
    const handleSortByChanges = (option) => {
      const newSortDir = selectOptions === option ? !sortingDirection : true;
      setSelectOptions(option);
      setSortingDirection(newSortDir);

      const sortedPrd = [...filterProducts].sort((a, b) => {
        if (option === 'price-low-to-high') return b.price - a.price 
        if (option === 'price-high-to-low') return a.price - b.price;
        if (option === 'price') return newSortDir ? a.price - b.price : b.price - a.price;
        if (option === 'popularProducts') return newSortDir ? a.ratings - b.ratings : b.ratings - a.ratings;
        if (option === 'recent') return newSortDir ? new Date(a.dateAdded) - new Date(b.dateAdded) : new Date(b.dateAdded) - new Date(a.dateAdded);
        return 0;
      });
      setFilterProducts(sortedPrd)
      setCurrentPage(1);
    };

    useEffect(() => {
      let filtered = filterProducts;
      Object.entries(selectedFilters).forEach(([key, value]) => {
        if (value.length) filtered = filtered.filter(p => value.some(v => p[key]?.toLowerCase().includes(v.toLowerCase())));
      });
      setFilterProducts(filtered);
      setCurrentPage(1);
    }, [ selectedFilters,filterProducts]);

    // Handle filter selection
    const handleFilterSelect = (filterType, optionValue) => {
      setSelectedFilters((prev) => {
        const currentSelected = prev[filterType] || [];
        const updatedSelected = currentSelected.includes(optionValue)
          ? currentSelected.filter((val) => val !== optionValue)
          : [...currentSelected, optionValue];
    
        if (updatedSelected.length === 0) {
          setFilterProducts(originalProducts);
          setCurrentPage(1);
          return { ...prev, [filterType]: [] };
        }
        
        const newFilters = { ...prev, [filterType]: updatedSelected };
        const filteredProducts = originalProducts.filter((product) =>
          Object.entries(newFilters).every(([filter, options]) =>
            options.length === 0 || options.some((option) =>
              product[filter]?.toLowerCase().includes(option.toLowerCase())
            )
          )
        );
        setFilterProducts(filteredProducts);
        setCurrentPage(1);
        return newFilters;
      });
    };
    

    // Clear all filters
    const handleClearAll = () => {
      setSelectedFilters('');
      setSelectOptions('');
      handleSortByChanges('');
      setShowDown(false);
      setSelectedSortBy('');
      setAppliedFilters('')
      setFilterProducts(originalProducts);
      setCurrentPage(1);
      toast.success("All filters cleared");
    };

    return (
      <>
      <Header />
      {
        loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <section>
              {
                user && 
                (
                  <div className='filter-page'>
                    <h2>{heading}</h2>
                    <div className='filter-container' >
                      <div className='filter-section'>
                        <p>Filter By <MdTune style={{ width: '20px', height: '20px' }} /></p>
                      </div>
                      <div className='sorting-section'>
                        <p>Sort By:</p>
                        <SortingSection props={{ selectOptions, sortingDirection, handleSortByChanges, handleClearAll }} />
                      </div>
                    </div>
                    {/* for mobile */}
                    <div className='mobile-section'>
                      <div className='mobile-container'>
                          <FilterModel props={{closeModal, openModal, handleApplyFilters, filters, selectedFilters, setSelectedFilters, handleFilterSelect, handleClearAll, appliedFilters, isModalOpen, setFilterProducts, originalProducts, showDown, setShowDown, selectedSortBy, setAppliedFilters}} />
                          <FilterSortingModel props={{setShowDown, selectedSortBy, setSelectedSortBy, setAppliedFilters, handleClearAll, showDown, setFilterProducts, filterProducts, handleSortByChanges}} />
                      </div>
                    </div>
          
                    <div className='filter-main-section'>
                      <aside className='filter-aside'>
                        <FilterSection props={{ filters, selectedFilters, handleFilterSelect }} />
                        <div className='border-line'></div>
                      </aside>
                      <div className='filter-page-card'>
                        {
                          currentProd.map((product) => (
                              <ProductCard key={product.id} product={product} user={user} />
                            ))
                        }
                      </div>
                    </div>
          
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
                )
              }
            </section>
          </>
        )
      }
      <Footer />
      </>
    );
  };

  export default FilterPage;