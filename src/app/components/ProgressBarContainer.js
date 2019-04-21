import React, { Component } from 'react';

import {connect} from 'react-redux';

import {fetchProgressBars} from '../redux/actions'

import BarsContainer from './BarsContainer'
import ProgressBarControlContainer from './ProgressBarControlContainer'

import Button from 'react-bootstrap/Button';


class ProgressBarContainer extends Component {

componentDidMount() {
  this.props.loadDataAction();
}


  render() {

    return (
      <div>
      <div>ProgressBar container</div>
      <BarsContainer></BarsContainer>

      <ProgressBarControlContainer></ProgressBarControlContainer>
    

      </div>
    );
  }

}




const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
loadDataAction: () => dispatch(fetchProgressBars())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarContainer);
