import React, { Component } from 'react';

import ProgressBarContainer from '../app/components/ProgressBarContainer'
import './App.scss';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">

          <p>
          Progress Bar App
          </p>

          <div>
          <ProgressBarContainer></ProgressBarContainer>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
