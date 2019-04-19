import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
//const now = 50;
const BarComponent = ({now = 0, id}) => (

  <div>
  <ProgressBar now={now} label={`${now}%`} />
  </div>
);

export default BarComponent;
