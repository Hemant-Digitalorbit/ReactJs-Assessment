import '../../assets/styles/FilterPage.css'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdTune } from 'react-icons/md';
import { RiCloseLargeLine } from "react-icons/ri";


const FilterModel = ({props}) => {

    let {closeModal, openModal, filters, handleApplyFilters, selectedFilters, handleFilterSelect, appliedFilters,setSelectedFilters,setAppliedFilters,setFilterProducts,originalProducts, isModalOpen } = props;
    
    const [openPanel, setOpenPanel] = useState(null);

    const handleTogglePanel = (index) => {
        setOpenPanel(prev => (prev === index ? null : index));
    };
    const removeOnlyOneFilter = (filterKey, value) => {
        setSelectedFilters((prev) => {
          const updatedFilters = { ...prev };
          updatedFilters[filterKey] = updatedFilters[filterKey].filter((v) => v !== value) || [];
          if (updatedFilters[filterKey].length === 0) {
            delete updatedFilters[filterKey];
          }
          return updatedFilters;
        });
        setAppliedFilters((prev) => {
          const updatedFilters = { ...prev };
          updatedFilters[filterKey] = updatedFilters[filterKey].filter((v) => v !== value) || [];
          if (updatedFilters[filterKey].length === 0) {
            delete updatedFilters[filterKey];
          }
          return updatedFilters;    
        });

        if (Object.keys(appliedFilters).length === 1 && appliedFilters[filterKey].length === 1) {
            setFilterProducts(originalProducts);
        } else {
            handleApplyFilters();
        }
    };

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    }, [isModalOpen]);

    return (
        <>
            <div className='mobile-flt-cnt'>
                <div className='applied-filters' >
                <button onClick={openModal}>Filter<MdTune style={{ width: '20px', height: '20px' }} /></button>
                    {Object.keys(appliedFilters).map(filterKey => (
                        <div className='option' key={filterKey} >
                            <ul>
                                {appliedFilters[filterKey].map(value => (
                                    <div className='filters-list' key={value}>
                                        <li>{value}</li>
                                        <RiCloseLargeLine onClick={() => removeOnlyOneFilter(filterKey, value)} />
                                    </div>
                                    
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {isModalOpen && (
                    <div className='mobile-filter'>
                        <div className='mobile-filter-btns'>
                            <button onClick={openModal}>Filter<MdTune style={{ width: '20px', height: '20px' }} /></button>
                            <button onClick={closeModal} style={{ color: 'red' }}><RiCloseLargeLine /></button>
                        </div>
                        <div className='mobile-filter-container'>
                            {filters.map((filter, index) => (
                                <div key={filter.id}>
                                    <div onClick={() => handleTogglePanel(index)} className='filter-header'>
                                        <p className='label-name'>{filter.name}</p>
                                        <IoIosArrowDown className='IoIosArrowDown' style={{transform: openPanel === index ? 'rotate(180deg)' : ''}} />
                                    </div>
                                    {filter.options && (
                                        <div className={`button-grid ${openPanel === index ? 'show' : ''}`}>
                                            {filter.options.map(option => (
                                                <button key={option.value} id={`filter-${filter.id}-${option.value}`}
                                                    className={`filter-button ${selectedFilters[filter.id]?.includes(option.value) ? 'selected' : ''}`}
                                                    style={{ backgroundColor: selectedFilters[filter.id]?.includes(option.value) ? '#f8ad5d' : '' }}
                                                    onClick={() => handleFilterSelect(filter.id, option.value)}>
                                                    <label>{option.label}</label>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            className='applybtn'
                            onClick={() => {
                                handleApplyFilters();
                                closeModal();
                            }}
                            style={{ backgroundColor: 'red', color: '#f0f0f0', marginTop: '80px', padding: '8px 10px' }}
                        >
                            Apply Filter
                        </button>
                    </div>
                )}
            </div>       
        </>
    )
}

export default FilterModel
