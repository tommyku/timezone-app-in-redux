import React, { Component } from 'react';
import ContainerTimeInZone from './components/ContainerTimeInZone';
import ContainerTimeZoneSelection from './components/ContainerTimeZoneSelection';

class App extends Component {
  render() {
    return (
      <div>
        <ContainerTimeZoneSelection />
        <ContainerTimeInZone />
      </div>
    );
  }
}

export default App;
