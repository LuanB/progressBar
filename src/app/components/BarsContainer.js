import React, { Component } from 'react';
import {connect} from 'react-redux';

import BarComponent from './BarComponent';

class BarsContainer extends Component {

  render() {

    return (
      <div>
      <div>Bars container</div>

      {this.props.ProgressBars && this.props.ProgressBars.map((ProgressBar, index) => {
        return (
          <BarComponent now={ProgressBar} key={index} id={ProgressBar.id} limit={this.props.ProgressLimit}/>

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
