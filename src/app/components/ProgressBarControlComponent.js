import React from 'react';


const getBtnSelectIndex = () => {

  return document.getElementById('selectbtn').value
}


const onChangeFunc = (optionSelected) => {
  const name = this.name;
  const value = optionSelected.value;
  const label = optionSelected.label;
  console.log('value is', value);
}

const onChangeBtn = (e, selectedBtn) => {
  console.log('e value is ', e.target.value);
  selectedBtn(parseInt(e.target.value));
}



const ProgressBarControlComponent = ({bars, selectedBtn}) => (
<div>
  <div>ProgressBar Control Component</div>
  <div>
<select className="browser-default custom-select" id='selectbtn' onChange={(e) => selectedBtn(parseInt(e.target.value)) }>

{bars.map((item, index) => {
return (
  <option value={index} key={index}>#progress Bar {index}</option>
)
})}


</select>
</div>
</div>
);



 export default ProgressBarControlComponent;
