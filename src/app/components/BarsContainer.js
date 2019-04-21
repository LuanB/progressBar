import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import {connect} from 'react-redux';
import {fetchProgressBars, updateProgressBar} from '../redux/actions'
import BarComponent from './BarComponent'

class BarsContainer extends Component {

  render() {

  console.log('props in barsContainer is ', this.props)

    return (<div>
      <div>Bars container</div>


      {this.props.ProgressBars && this.props.ProgressBars.map((ProgressBar, index) => {
        return (
          <BarComponent now={ProgressBar.value} key={index} id={ProgressBar.id}/>

        );
      })}

    <Button onClick={() => this.props.updateProgressBar(0, 10)}>Increase</Button>

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
loadDataAction: () => dispatch(fetchProgressBars()),
updateProgressBar: (id, value) => dispatch(updateProgressBar(id, value))
})


export default connect(mapStateToProps, mapDispatchToProps)(BarsContainer);
