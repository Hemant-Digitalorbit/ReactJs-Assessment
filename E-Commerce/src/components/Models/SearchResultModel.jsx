import React from 'react'
import { Link } from 'react-router-dom';

const SearchResultModel = ({searchResult}) => {
    return (
        <div className='search-result'>
            {
                searchResult.map(item => (
                    <Link to={`/product/${item.name}`} style={{textDecoration: 'none'}}>
                        <div key={item.id} className='result-div'>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>  
                    </Link>
                ))
            }
        </div>
    )
}

export default SearchResultModel;
