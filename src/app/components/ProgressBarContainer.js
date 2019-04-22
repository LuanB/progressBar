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
      <div>

      <BarsContainer></BarsContainer>

      <ProgressBarControlContainer></ProgressBarControlContainer>

      <ButtonsControlContainer></ButtonsControlContainer>


      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
loadAPIDataAction: () => dispatch(fetchProgressBarsAPIData())


})

export default connect(null, mapDispatchToProps)(ProgressBarContainer);
