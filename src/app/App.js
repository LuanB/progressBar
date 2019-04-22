import React, { Component } from 'react';

import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';

import {fetchProgressBars} from './redux/actions/'

import ProgressBarContainer from '../app/components/ProgressBarContainer'
import './App.scss';

class App extends Component {
  render() {
 console.log('app state is ', this.props);
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


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
loadDataAction: () => dispatch(fetchProgressBars()),

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
