import axios from 'axios'

import {API_ProgressBarURL} from '../../common/constants';

import {FETCH_PROGRESSBARS, UPDATE_PROGRESSBARS, FETCH_PROGRESSBARSAPIDATA} from './types';



export const fetchProgressBars = () => {
  const url = API_ProgressBarURL;


return (dispatch) => {

  return axios.get(url).then(response => {

      response.data.bars.map( (barValue, index) => {

        dispatch({
          type: FETCH_PROGRESSBARS,
          payload: {
            id:index,
            value: barValue} } )
      });


  })
  .catch(error => {
    throw(error);
  })
}

}



export const fetchProgressBarsAPIData = () => {
  const url = API_ProgressBarURL;


return (dispatch) => {

  return axios.get(url).then(response => {

    dispatch({
      type: FETCH_PROGRESSBARSAPIDATA,
      payload: {
        buttons: response.data.buttons,
        bars: response.data.bars,
        limit: response.data.limit
      } } );
  })


  .catch(error => {
    throw(error);
  })
}

}



export const updateProgressBar = (id, barValue) => {

return (dispatch) => {
  console.log('update dispatch');
dispatch({type:UPDATE_PROGRESSBARS, payload: {
  id:id,
  value:barValue} })
}


};
