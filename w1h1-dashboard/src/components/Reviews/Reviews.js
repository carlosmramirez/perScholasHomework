import React from 'react';
import './Reviews.css';

function Reviews(props) {
  return (
    <div className="reviews sub-modal">
      <h3>Reviews</h3>
      <div className='review-value'>{props.reviews}</div>
    </div>
  );
}

export default Reviews;