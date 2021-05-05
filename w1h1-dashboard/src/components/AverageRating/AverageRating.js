import React from 'react';
import './AverageRating.css';

function AverageRating(props) {
  return (
    <div className="average-rating sub-modal">
      <h3>Average Rating</h3>
      <div className='rating-value'>{props.averageRating}</div>
    </div>
  );
}

export default AverageRating;