import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className='sidebar-item'>{props.dashboard}</div>
      <div className='sidebar-item'>{props.widget}</div>
      <div className='sidebar-item'>{props.reviews}</div>
      <div className='sidebar-item'>{props.customers}</div>
      <div className='sidebar-item'>{props.onlineAnalysis}</div>
      <div className='sidebar-item'>{props.settings}</div>
    </div>
  );
}

export default Sidebar;