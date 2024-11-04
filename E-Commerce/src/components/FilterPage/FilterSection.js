import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import '../../styles/FilterPage.css'

const FilterSection = ({props}) => {
    let {filters, handleFilterSelect, selectedFilters} = props;
  return (
    <>
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
                                    filter.options.map((option) => (
                                    <button key={option.value} id={`filter-${filter.id}-${option.value}`} 
                                        className={`filter-button ${selectedFilters[filter.id]?.includes(option.value) ? 'active' : ''}`} 
                                        style={{border: selectedFilters[filter.id]?.includes(option.value) ? '1px solid black' : ''}}
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
    </>
  )
}

export default FilterSection;