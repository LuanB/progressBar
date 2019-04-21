import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProgressBars, updateProgressBar} from '../redux/actions'

import ButtonControlComponent from './ButtonControlComponent'

class ButtonsControlContainer extends Component {

  render() {
console.log('props in ButtonContainer is ', this.props)


    return (
      <div>
      {this.props.ButtonsControls && this.props.ButtonsControls.map((BtnControlValue, index) => {
        return (
          <ButtonControlComponent key={index} value={BtnControlValue}></ButtonControlComponent>

        );
      })}


      </div>
    );
  }

}




const mapStateToProps = state => {
  return {
  ButtonsControls: state.progressBar.buttons
  }

};

const mapDispatchToProps = dispatch => ({

updateProgressBar: (id, value) => dispatch(updateProgressBar(id, value))
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsControlContainer);
