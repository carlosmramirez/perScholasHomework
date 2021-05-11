import React from 'react';
import DivTwo from './DivTwo';

class DivOne extends React.Component {
  render() {
    return (
      <div>
        <DivTwo />
      </div>
    )
  }
}

export default DivOne;