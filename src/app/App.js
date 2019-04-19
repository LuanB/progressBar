import React, { Component } from 'react';

import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';

import {fetchProgressBars, startAction, stopAction} from './redux/actions/'

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
        <div> rotating is {this.props.rotating}</div>

          <Button onClick={this.props.startAction}>rotate on</Button>
<Button onClick={this.props.stopAction}>rotate off</Button>
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
stopAction: () => dispatch(stopAction),
startAction: () => dispatch(startAction)
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
