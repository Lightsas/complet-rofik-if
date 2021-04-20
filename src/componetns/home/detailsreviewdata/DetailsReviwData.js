import React from 'react';

const DetailsReviwData = ({review}) => {
    return (
        <div className="col-md-4 mt-3">
            <h1></h1>
            <div class="card" style={{width: '18rem', height: '200px'}}>
            <div class="card-body">
                <h5 class="card-title">{review.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{review.companyname}</h6>
                <p class="card-text">{review.describtion}</p>
            </div>
            </div>
        </div>
    );
};

export default DetailsReviwData;