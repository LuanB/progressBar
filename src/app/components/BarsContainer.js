import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import {connect} from 'react-redux';
import {fetchProgressBars} from '../redux/actions'
import BarComponent from './BarComponent'

class BarsContainer extends Component {

  render() {

  console.log('props in barsContainer is ', this.props.ProgressBars)

    return (<div>
      <div>Bars container</div>


      {this.props.ProgressBars.bars ? (this.props.ProgressBars.bars.map((ProgressBar, index) => {
        return (
          <BarComponent now={ProgressBar} key={index} id={index}/>

        );
      })) : <div>no data</div> }

    <Button>Increase</Button>

      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
  ProgressBars: state.progressBar.bars
  }

};

const mapDispatchToProps = dispatch => ({
loadDataAction: () => dispatch(fetchProgressBars())
})


export default connect(mapStateToProps, mapDispatchToProps)(BarsContainer);
