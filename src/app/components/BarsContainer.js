import React, { Component } from 'react';
import {connect} from 'react-redux';

import BarComponent from './BarComponent';

class BarsContainer extends Component {

  render() {

    return (
      <div className='barsContainer'>

      {this.props.ProgressBars && this.props.ProgressBars.map((ProgressBar, index) => {
        return (
          <div className='barsContainer__BarComponent' key={index}>
          <BarComponent now={ProgressBar} key={index} id={ProgressBar.id} limit={this.props.ProgressLimit}/>
          </div>
        );
      })}
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
  ProgressBars: state.progressBar.bars,
  ProgressLimit: state.progressBar.limit
  }

};




export default connect(mapStateToProps, null)(BarsContainer);
