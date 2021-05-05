import React from 'react';
import './WebsiteVisitors.css'

function WebsiteVisitors(props) {
  
  return (
    <div className="website-visitors">
      <h3>Website Visitors</h3>
      <div className='num-visits'>{props.websiteViews}</div>
      <button onClick={props.incrementViews}>Increment Views</button>
      <div className='visitor-graph'>Graph Here</div>
    </div>
  );
}

export default WebsiteVisitors;