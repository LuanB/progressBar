import React from 'react';


const ProgressBarControlComponent = ({bars, selectedBtn}) => (
<div>
        <select className="browser-default custom-select" id='selectbtn' onChange={(e) => selectedBtn(parseInt(e.target.value)) }>

        {bars.map((item, index) => {

        return (
          <option value={index} key={index}>#progress Bar {index}</option>
          )
          }
        )}

        </select>
</div>

);



 export default ProgressBarControlComponent;
