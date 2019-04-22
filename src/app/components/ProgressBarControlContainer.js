import React, { Component } from 'react';
import {connect} from 'react-redux';


import {SELECTED_PROGRESSBAR} from '../redux/actions/types';
import ProgressBarControlComponent from './ProgressBarControlComponent';

class ProgressBarControlContainer extends Component {


  render() {

  const handleSelectedBtn = (value) => {
    this.props.SelectedProgressBar(value);
    }


    return (
      <div>
        <ProgressBarControlComponent bars={this.props.bars} selectedBtn={(value)=>handleSelectedBtn(value)} ></ProgressBarControlComponent>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
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
