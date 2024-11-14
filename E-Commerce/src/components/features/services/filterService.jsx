// FilterContext.js
import React, { createContext, useState, useEffect } from 'react';
import { products } from '../Data/data';
import toast from 'react-hot-toast';

const FilterContext = createContext();

const FilterProvider = ({ children }) => {

    const [filterProducts, setFilterProducts] = useState(products);
    const [originalProducts, setOriginalProducts] = useState(products);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [sortingOption, setSortingOption] = useState('');
    const [sortingDirection, setSortingDirection] = useState(true);
    const [appliedFilters, setAppliedFilters] = useState({});

    const handleApplyFilters = () => {
      setAppliedFilters(selectedFilters);
    };
  
    useEffect(() => {
        let prodList = products;
        if (brandId) prodList = prodList.filter(p => p.brand.toLowerCase() === brandId.toLowerCase());
        if (categoryId) prodList = prodList.filter(p => p.category.toLowerCase() === categoryId.toLowerCase());
        else {
        if (bestSellers.length) {prodList = bestSellers}
        if (popularProducts.length) {prodList = popularProducts}
        }

        setOriginalProducts(prodList);
        setFilterProducts(prodList);
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

    const handleSort = (option) => {
        const direction = sortingOption === option ? !sortingDirection : true;
        setSortingOption(option);
        setSortingDirection(direction);

        const sorted = [...filterProducts].sort((a, b) => {
        if (option === 'price') return direction ? a.price - b.price : b.price - a.price;
        return 0;
        });
        setFilterProducts(sorted);
        setCurrentPage(1);
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
    <FilterContext.Provider value={{filterProducts, selectedFilters,  currentPage, setCurrentPage, handleApplyFilters,
        handleFilterSelect, handleClearAll, handleSort, sortingOption, sortingDirection}}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
