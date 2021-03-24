import React from 'react';

export const RatingComponent = ({ value, reviews, rating  }) => {    
    return (
        <div style={{ color:'#ffbf00'}}>
            <span className='mr-1'>{rating}</span>
            <span>
                <i  className={value >= 1 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i className={value >= 2 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i className={value >= 3 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i className={value >= 4 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
            <span>
                <i className={value >= 5 ? 'fas fa-star' : 'far fa-star'}></i>
            </span>        
            <span className='ml-1' style={{ color:'#7c7c86'}}>({reviews} Reviews)</span>
                      
        </div>
    )
};
