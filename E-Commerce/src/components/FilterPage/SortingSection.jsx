import React from 'react'
import { IoCaretDownSharp, IoCaretUpSharp } from 'react-icons/io5';
import { MdClear } from 'react-icons/md';
import '../../styles/FilterPage.css'

function SortingSection({props}) {

    let {selectOptions, sortingDirection, handleClearAll, handleSortByChanges} = props;

  return (
    <section className='sorting-buttons'>
        <button onClick={() => handleSortByChanges('price')} className= 'sort-button'
            style={{backgroundColor: selectOptions === 'price' ? '#FA910829' : '#FA910800'}}>
          Price
          <span>
            <p style={{ color: selectOptions === 'price' && sortingDirection ? '#555555' : '#C0C0C0' }}>
              <IoCaretUpSharp />
            </p>
            <p style={{ color: selectOptions === 'price' && !sortingDirection ? '#555555' : '#C0C0C0' }}>
              <IoCaretDownSharp />
            </p>
          </span>
        </button>

        <button onClick={() => handleSortByChanges('popularProducts')}  className= 'sort-button'
            style={{backgroundColor: selectOptions === 'popularProducts' ? '#FA910829' : '#FA910800'}}>
          Popularity
          <span>
            <p style={{ color: selectOptions === 'popularProducts' && sortingDirection ? '#555555' : '#C0C0C0' }}>
                <IoCaretUpSharp />
            </p>
            <p style={{ color: selectOptions === 'popularProducts' && !sortingDirection ? '#555555' : '#C0C0C0' }}>
              <IoCaretDownSharp />
            </p>
          </span>
        </button>

        <button onClick={() => handleSortByChanges('recent')} className= 'sort-button'
            style={{backgroundColor: selectOptions === 'recent' ? '#FA910829' : '#FA910800'}} >
          Recently Added
          <span>
            <p style={{ color: selectOptions === 'recent' && sortingDirection ? '#555555' : '#C0C0C0' }}>
              <IoCaretUpSharp />
            </p>
            <p style={{ color: selectOptions === 'recent' && !sortingDirection ? '#555555' : '#C0C0C0' }}>
              <IoCaretDownSharp />
            </p>
          </span>
        </button>

        <div className='filter-line'></div>

        <button onClick={handleClearAll} className='clear-sec'>
          Clear All <MdClear />
        </button>
    </section>
  )
}

export default SortingSection