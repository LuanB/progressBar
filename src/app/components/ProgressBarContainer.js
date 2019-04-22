import React, { Component } from 'react';

import {connect} from 'react-redux';

import {fetchProgressBarsAPIData} from '../redux/actions'

import BarsContainer from './BarsContainer'
import ProgressBarControlContainer from './ProgressBarControlContainer'
import ButtonsControlContainer from './ButtonsControlContainer'

import Button from 'react-bootstrap/Button';




class ProgressBarContainer extends Component {

componentDidMount() {


  this.props.loadAPIDataAction();
}


  render() {

    return (
      <div>
      <div>ProgressBar container</div>
      <BarsContainer></BarsContainer>

      <ProgressBarControlContainer></ProgressBarControlContainer>

      <ButtonsControlContainer></ButtonsControlContainer>


      </div>
    );
  }

}




const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
loadAPIDataAction: () => dispatch(fetchProgressBarsAPIData())


})

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarContainer);
