import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
//const now = 50;

let variantFlag = 'info';
const BarComponent = ({now = 0, id, limit}) => {


now > limit ? variantFlag = 'danger' : variantFlag = 'info'

return (
  <div>
  <ProgressBar now={now} label={`${now}%`} variant={variantFlag} />
  </div>
)

};

export default BarComponent;
