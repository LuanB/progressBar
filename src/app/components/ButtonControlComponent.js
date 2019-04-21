
import React from 'react';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {updateProgressBar} from '../redux/actions'


const ButtonControlComponent = ({value = 0}) => (
  <div>

<Button onClick={()=> updateProgressBar(1, value)}>{value}</Button>
  </div>
);






const mapDispatchToProps = dispatch => ({
updateProgressBar: (id, value) => dispatch(updateProgressBar(id, value))
})


export default connect(null, mapDispatchToProps)(ButtonControlComponent);
