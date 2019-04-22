import React, { Component } from 'react';
import {connect} from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import {fetchProgressBars, updateProgressBar} from '../redux/actions'

import ButtonControlComponent from './ButtonControlComponent'

class ButtonsControlContainer extends Component {

  render() {
console.log('props in ButtonContainer is ', this.props.selectedBtn.id);

const handleBtnClick = (value) => {
  console.log('handleBTN click id value is ', value);
  this.props.updateProgressBar(this.props.selectedBtn.id, value);
}


return (
  <div>
  {this.props.ButtonsControls && <ButtonControlComponent ButtonsValues={this.props.ButtonsControls} handleClick={(value) => this.props.updateProgressBar(this.props.selectedBtn.id, value)} />}

<div>
selected Progress Bar is {this.props.selectedBtn.id}
</div>


  </div>

)



  }

}




const mapStateToProps = state => {
  return {
  ButtonsControls: state.progressBar.buttons,
  FullState: state,
  selectedBtn: state.progressBar.selectedBtn
  }

};

const mapDispatchToProps = dispatch => ({

updateProgressBar: (id, value) => dispatch(updateProgressBar(id, value))
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsControlContainer);
