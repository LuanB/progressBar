import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import {connect} from 'react-redux';
import {fetchProgressBars, updateProgressBar} from '../redux/actions'
import BarComponent from './BarComponent'

class BarsContainer extends Component {

  render() {



    return (<div>
      <div>Bars container</div>


      {this.props.ProgressBars && this.props.ProgressBars.map((ProgressBar, index) => {
        return (
          <BarComponent now={ProgressBar} key={index} id={ProgressBar.id}/>

        );
      })}


</div>
    );
  }

}


const mapStateToProps = state => {
  return {
  ProgressBars: state.progressBar.bars,
  SelectedBtn: state.progressBar.selectedBtn
  }

};

const mapDispatchToProps = dispatch => ({
loadDataAction: () => dispatch(fetchProgressBars()),
updateProgressBar: (id, value) => dispatch(updateProgressBar(id, value))
})


export default connect(mapStateToProps, mapDispatchToProps)(BarsContainer);
