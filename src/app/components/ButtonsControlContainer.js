import React, { Component } from 'react';
import {connect} from 'react-redux';

import {updateProgressBar} from '../redux/actions';

import ButtonControlComponent from './ButtonControlComponent';

class ButtonsControlContainer extends Component {

render() {

return (
  <div className='buttonsControlContainer'>
  {
    this.props.ButtonsControls &&
    <ButtonControlComponent
    ButtonsValues={this.props.ButtonsControls}
    handleClick={(value) => this.props.updateProgressBar(this.props.selectedBtn.id, value)}
    />
  }
  </div>
)

  }

}


const mapStateToProps = state => {
  return {
  ButtonsControls: state.progressBar.buttons,
  selectedBtn: state.progressBar.selectedBtn
  }

};

const mapDispatchToProps = dispatch => ({

updateProgressBar: (id, value) => dispatch(updateProgressBar(id, value))
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsControlContainer);
