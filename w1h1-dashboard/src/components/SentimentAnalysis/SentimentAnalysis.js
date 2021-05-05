import React from 'react';
import './SentimentAnalysis.css'

function SentimentAnalysis(props) {
  return (
    <div className="sentiment-analysis sub-modal">
      <h3>Sentiment Analysis</h3>
      <div className='sa-value'>{props.val1}</div>
      <div className='sa-value'>{props.val2}</div>
      <div className='sa-value'>{props.val3}</div>
    </div>
  );
}

export default SentimentAnalysis;