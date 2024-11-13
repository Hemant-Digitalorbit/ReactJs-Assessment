import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const FilterSortingModel = ({props}) => {

    let {setShowDown, selectedSortBy, setSelectedSortBy, showDown,handleClearAll, handleSortByChanges} = props;

  return (
    <div className='mobile-sort-cnt'>
        <button onClick={() => setShowDown(prev => !prev)} className={`soting-sect-head ${showDown ? 'active' : ''}`} 
            style={{fontSize: selectedSortBy ? '14px' : ''}}>
                {selectedSortBy || 'Sort By'}
                <IoIosArrowDown
                    className={`down-arrow${showDown ? 'show' : ''}`} 
                    style={{ transform: showDown ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                />
        </button>
        {showDown && (
            <div className='sort-down-sct'>
                <ul>
                    <button onClick={() => {
                        handleSortByChanges('price-low-to-high');
                        setShowDown(false);
                        setSelectedSortBy('Price: High to Low');
                    }}>
                    Price: High to Low
                    </button>
                    <button onClick={() => {
                        handleSortByChanges('price-high-to-low');
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
            <button className='clear-all-btn' onClick={handleClearAll} 
            style={{backgroundColor: '##EA3D3233', color: '#EA3D32', border: '1px solid #EA3D32', borderRadius: '6px', fontSize: '14px', padding: '4px'}}>
            Clear All
            </button>
        )}
    </div> 
  )
}

export default FilterSortingModel
