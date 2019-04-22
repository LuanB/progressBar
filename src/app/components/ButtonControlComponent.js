
import React from 'react';
import Button from 'react-bootstrap/Button';



const ButtonControlComponent = ({ButtonsValues, handleClick}) => (
ButtonsValues.map((BtnControlValue, index) => {
return (<Button key={index} onClick={()=> handleClick(BtnControlValue)}>{BtnControlValue}</Button>)

})



);







export default ButtonControlComponent;
