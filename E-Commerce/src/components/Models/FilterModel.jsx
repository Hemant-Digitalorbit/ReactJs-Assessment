import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import '../../assets/styles/FilterPage.css'
import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdTune } from 'react-icons/md';
import { RiCloseLargeLine } from "react-icons/ri";
import { products } from '../../Data/data';


const FilterModel = ({props}) => {

    let {closeModal, openModal, filters, handleApplyFilters, selectedFilters, handleFilterSelect, appliedFilters,setSelectedFilters,setAppliedFilters,setFilterProducts,originalProducts, isModalOpen } = props;

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
                <button onClick={openModal}>Filter<MdTune style={{ width: '20px', height: '20px' }} /> </button>
                <div className='applied-filters'>
                    {Object.keys(appliedFilters).map((filterKey) => (
                        <div className='option' key={filterKey}>
                            <ul>
                                {appliedFilters[filterKey].map((value) => (
                                  <div className='filters-list'>
                                    <li key={value}>{value}</li>
                                    <RiCloseLargeLine onClick={() => removeOnlyOneFilter(filterKey, value)} 
                                    />
                                  </div>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {
                    isModalOpen && (
                        <div className='mobile-filter'>   
                            <div className='mobile-filter-btns'>
                                <button onClick={openModal}>Filter<MdTune style={{ width: '20px', height: '20px' }} /></button>
                                <button onClick={closeModal} style={{color: 'red'}}><RiCloseLargeLine /></button>
                            </div>
                            <div className='mobile-filter-container'>
                                {
                                    filters.map((filter) => (
                                        <Disclosure key={filter.id}>
                                            <h3>
                                                <DisclosureButton className='DisclosureButton'> 
                                                    <div className='filter-cnt-sec' style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}> 
                                                        <p className='label-name'>{filter.name}</p>
                                                        {filter.options && (
                                                            <IoIosArrowDown className='IoIosArrowDown' />
                                                        )}
                                                    </div> 
                                                </DisclosureButton> 
                                            </h3>
                                            {/* options are availablw then use */}
                                            {
                                                filter.options && 
                                                    <DisclosurePanel className='DisclosurePanel'>
                                                        <div className='button-grid'>
                                                            {
                                                                filter.options.map((option) => (
                                                                <button key={option.value} id={`filter-${filter.id}-${option.value}`} 
                                                                    className={`filter-button ${selectedFilters[filter.id]?.includes(option.value) ? 'selected' : ''}`} 
                                                                    style={{backgroundColor: selectedFilters[filter.id]?.includes(option.value) ? '#f8ad5d' : ''}}
                                                                    onClick={() => handleFilterSelect(filter.id, option.value)}>
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
                            </div>
                            <button className='applybtn' onClick={() => {handleApplyFilters(); closeModal()}}
                                style={{backgroundColor: 'red', color: '#f0f0f0', marginTop: '80px', padding: '8px 10px' }}>
                                Apply Filter
                            </button>
                        </div>
                    ) 
                }
            </div>       
        </>
    )
}

export default FilterModel
