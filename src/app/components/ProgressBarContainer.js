import React, { Component } from 'react';

import {connect} from 'react-redux';

import {fetchProgressBarsAPIData} from '../redux/actions'

import BarsContainer from './BarsContainer'
import ProgressBarControlContainer from './ProgressBarControlContainer'
import ButtonsControlContainer from './ButtonsControlContainer'

class ProgressBarContainer extends Component {

componentDidMount() {


  this.props.loadAPIDataAction();
}

  render() {

    return (
      <div className='progressBarContainer'>

      <div className='progressBarContainer__barsContainer'>
      <BarsContainer></BarsContainer>
      </div>
      <div className='controls'>
      <div className='progressBarContainer__progressBarControlContainer'>
      <ProgressBarControlContainer></ProgressBarControlContainer>
      </div>
      <div className='progressBarContainer__buttonsControlContainer'>
      <ButtonsControlContainer></ButtonsControlContainer>
      </div>
      </div>

      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
loadAPIDataAction: () => dispatch(fetchProgressBarsAPIData())


})

export default connect(null, mapDispatchToProps)(ProgressBarContainer);
