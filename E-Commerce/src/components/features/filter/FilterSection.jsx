import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import '../../../assets/styles/FilterPage.css'

const FilterSection = ({props}) => {

    let {filters, handleFilterSelect, selectedFilters} = props;

    return (
        <>
            {
                filters.map((filter) => (
                    <Disclosure key={filter.id}>
                        <h3>
                            <DisclosureButton className='DisclosureButton'>
                                <p className='label-name'>{filter.name}</p>
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
                                    <div className='btn-grid'>
                                    {
                                        filter.options.map((option) => (
                                        <button key={option.value} id={`filter-${filter.id}-${option.value}`} 
                                            className={`fltbtn ${selectedFilters[filter.id]?.includes(option.value) ? 'selected' : ''}`} 
                                            style={{backgroundColor: selectedFilters[filter.id]?.includes(option.value) ? 'f8ad5d' : ''}}
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