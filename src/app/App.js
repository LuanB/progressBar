import React, { Component } from 'react';

import ProgressBarContainer from '../app/components/ProgressBarContainer'
import './App.scss';
import './styles/main.scss'

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">

          <p >
          Progress Bar App
          </p>



        </header>
        <div className='progressBarContainer'>
        <ProgressBarContainer></ProgressBarContainer>
        </div>


      </div>
    );
  }
}

export default App;
