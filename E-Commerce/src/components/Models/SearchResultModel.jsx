import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultModel = ({ searchResult, searchQuery }) => {
    return (
        <div className='search-result'>
            {searchQuery && searchQuery.trim().length > 0 ? (
                searchResult && searchResult.length > 0 ? (
                    searchResult.map((item) => (
                        <Link key={item.id} to={`/product/${item.name}`} style={{ textDecoration: 'none' }}>
                            <div className='result-div'>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className='no-results'>
                        <p>No product found</p>
                    </div>
                )
            ) : null}
        </div>
    );
};

export default SearchResultModel;
