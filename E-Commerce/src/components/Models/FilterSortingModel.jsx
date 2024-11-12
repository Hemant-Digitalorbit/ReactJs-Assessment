import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const FilterSortingModel = ({props}) => {

    let {setShowDown, selectedSortBy, setSelectedSortBy, setAppliedFilters, showDown,setFilterProducts, filterProducts, handleSortByChanges} = props;

  return (
    <div className='mobile-sort-cnt'>
        <button onClick={() => setShowDown(prev => !prev)} className={`soting-sect-head ${showDown ? 'active' : ''}`}>
            {selectedSortBy || 'Sort By'}
                {!selectedSortBy && <IoIosArrowDown
                    className={`down-arrow${showDown ? 'show' : ''}`} 
                    style={{ transform: showDown ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                />}
        </button>
        {showDown && (
            <div className='sort-down-sct'>
                <ul>
                    <button onClick={() => {
                        handleSortByChanges('price');
                        setShowDown(false);
                        setSelectedSortBy('Price: High to Low');
                    }}>
                    Price: High to Low
                    </button>
                    <button onClick={() => {
                        handleSortByChanges('price');
                        setShowDown(false);
                        setSelectedSortBy('Price: Low to High');
                    }}>
                    Price: Low to High
                    </button>
                    <button onClick={() => {
                        handleSortByChanges('recent');
                        setShowDown(false);
                        setSelectedSortBy('Recently Added');
                    }}>
                    Recently Added
                    </button>
                    <button onClick={() => {
                        handleSortByChanges('popularProducts');
                        setShowDown(false);
                        setSelectedSortBy('Popularity');
                    }}>
                    Popularity
                    </button>
                </ul>
            </div>
        )}
        {selectedSortBy && (
            <button className='clear-all-btn' onClick={() => {
                handleSortByChanges('');
                setShowDown(false);
                setSelectedSortBy('');
                setAppliedFilters('')
                setFilterProducts(filterProducts);
            }}>
            Clear All
            </button>
        )}
    </div> 
  )
}

export default FilterSortingModel
