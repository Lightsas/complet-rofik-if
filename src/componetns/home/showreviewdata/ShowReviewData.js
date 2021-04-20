import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import DetailsReviwData from '../detailsreviewdata/DetailsReviwData';
import './ShowReviewData';

const ShowReviewData = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://arcane-bastion-75257.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div className="container mt-5">
            <div style={{textAlign: 'center'}} className="row">
                <h1>Review</h1>
            {
                review.map(review =><DetailsReviwData review={review}></DetailsReviwData>)
            }
        </div>
        </div>
    );
};

export default ShowReviewData;