import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SelectedProgressBar} from '../redux/actions'

import {FETCH_PROGRESSBARS, UPDATE_PROGRESSBARS, FETCH_PROGRESSBARSAPIDATA, SELECTED_PROGRESSBAR} from '../redux/actions/types';
import ProgressBarControlComponent from './ProgressBarControlComponent'

class ProgressBarControlContainer extends Component {



  render() {


  const handleSelectedBtn = (value) => {
    this.props.SelectedProgressBar(value);
    console.log('handleSelectedBtn is ', value);
  }



    return (
      <div>
      <div>ProgressBar Control Container</div>
      <ProgressBarControlComponent bars={this.props.bars} selectedBtn={(value)=>handleSelectedBtn(value)} ></ProgressBarControlComponent>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
  ButtonsControls: state.progressBar.buttons,
  FullState: state,
  bars: state.progressBar.bars
  }
};

const mapDispatchToProps = dispatch => {

return {
SelectedProgressBar: (id) => dispatch({type:SELECTED_PROGRESSBAR, payload: {
  id:id } })
}

}

 export default connect(mapStateToProps, mapDispatchToProps)(ProgressBarControlContainer);
