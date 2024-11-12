import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdTune } from 'react-icons/md';
import { RiCloseLargeLine } from "react-icons/ri";


const FilterModel = ({props}) => {

    let {closeModal, openModal, filters, handleApplyFilters, selectedFilters, handleFilterSelect, appliedFilters, isModalOpen, setAppliedFilters} = props;

    
    return (
        <>
            <div className='mobile-flt-cnt'>
                <button onClick={openModal}>Filter <MdTune style={{ width: '20px', height: '20px' }} /> </button>
                <div className='applied-filters'>
                    {Object.keys(appliedFilters).map((filterKey) => (
                        <div className='option' key={filterKey}>
                            <ul>
                                {appliedFilters[filterKey].map((value) => (
                                  <div className='filters-list'>
                                    <li key={value}>{value}</li>
                                    <RiCloseLargeLine onClick={() => setAppliedFilters((prev) => 
                                      {const newFilt = {...prev}; newFilt[filterKey] = newFilt[filterKey].filter((v) => v !== value);
                                      return newFilt;
                                      })} 
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
                                <button onClick={closeModal}><RiCloseLargeLine /></button>
                            </div>
                            <div className='mobile-filter-container'>
                                {
                                    filters.map((filter) => (
                                        <Disclosure key={filter.id}>
                                            <h3>
                                                <DisclosureButton className='DisclosureButton'>
                                                    <span className='label-name'>{filter.name}</span>
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
                            <button onClick={() => {handleApplyFilters(); closeModal()}} className='applybtn'>Apply Filter</button>
                        </div>
                    ) 
                }
            </div>       
        </>
    )
}

export default FilterModel
