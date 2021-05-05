import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import Reviews from './components/Reviews/Reviews.js';
import AverageRating from './components/AverageRating/AverageRating.js';
import SentimentAnalysis from './components/SentimentAnalysis/SentimentAnalysis.js';
import WebsiteVisitors from './components/WebsiteVisitors/WebsiteVisitors.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      websiteViews: 989
    }

    this.incrementViews = this.incrementViews.bind(this);
  }

  incrementViews() {
    this.setState({ websiteViews: this.state.websiteViews + 1})
  }

  render() {
    return (
      <div className="App">
        <div className='sidebar-container'>
          <Sidebar 
            dashboard='Dashboard'
            widget='Widget'
            reviews='Reviews'
            customers='Customers'
            onlineAnalysis='Online Analysis'
            settings='Settings'/>
        </div>
        <div className='main-content'>
          <div className='sub-modal-container'>
            <Reviews reviews='1,281'/>
            <AverageRating averageRating='4.6'/>
            <SentimentAnalysis
             val1='960'
             val2='122'
             val3='321' />
          </div>
          <div className='active-modal'>
            <WebsiteVisitors websiteViews={this.state.websiteViews} incrementViews={this.incrementViews}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
