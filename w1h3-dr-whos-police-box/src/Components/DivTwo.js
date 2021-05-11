import React from 'react';
import DivThree from './DivThree';

class DivTwo extends React.Component {
  render() {
    return (
      <div>
        <DivThree />
        <DivThree />
      </div>
    )
  }
}

export default DivTwo;