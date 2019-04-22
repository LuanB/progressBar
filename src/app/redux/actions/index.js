import axios from 'axios'

import {API_ProgressBarURL} from '../../common/constants';

import {UPDATE_PROGRESSBARS, FETCH_PROGRESSBARSAPIDATA, SELECTED_PROGRESSBAR} from './types';


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

export const SelectedProgressBar = (id) => {
return (dispatch) => {
  dispatch({type:SELECTED_PROGRESSBAR, payload: {
  id:id
  } })
}


};


export const updateProgressBar = (id, barValue) => {
return (dispatch) => {
  dispatch({type:UPDATE_PROGRESSBARS, payload: {
  id:id,
  value:barValue} })
}


};
