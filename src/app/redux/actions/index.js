import axios from 'axios'

import {API_ProgressBarURL} from '../../common/constants';

import {FETCH_PROGRESSBARS, UPDATE_PROGRESSBARS} from './types';


// export const fetchProgressBars = () => async (dispatch) => {
//   const url = API_ProgressBarURL;
//
//   //dispatch({ type: LOAD_ProgressBar_LOADING });
//     console.log('trying to fetch data');
//
//   try {
//     const fetchRes = await fetch(url, { method: 'GET' });
//     const res = await fetchRes.json();
//
//     dispatch({type: FETCH_PROGRESSBARS, payload: res.data});
//     console.log('fetch successful');
//   } catch (e) {
//   //  dispatch({ type: LOAD_PROGRESSBARS_ERROR, error: e || 'Unexpected Error!!!' });
//     console.log(e);
//   }
// };


//export const fetchProgressBars = () => {console.log('testing')};


// export const fetchProgressBars = () => {
//       console.log('trying to fetch data');
//   return async function (dispatch) {
//   const url = API_ProgressBarURL;
//
//   //dispatch({ type: LOAD_ProgressBar_LOADING });
//
// console.log('In async function');
//   try {
//     const fetchRes = await axios.get(url);
//     const res = await fetchRes.json();
//
//     dispatch({type: FETCH_PROGRESSBARS, payload: res.data});
//     console.log('fetch successful');
//   } catch (e) {
//   //  dispatch({ type: LOAD_PROGRESSBARS_ERROR, error: e || 'Unexpected Error!!!' });
//   console.log('error occured');
//     console.log(e);
//   }
// }
// }


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

export const updateProgressBar = (id, barValue) => {

return (dispatch) => {
dispatch({type:UPDATE_PROGRESSBARS, payload: {
  id:0,
  value:barValue} })
}


};



export const startAction = {
  type: "rotate",
  payload: true
};

export const stopAction = {
  type: "rotate",
  payload: false
};




//   return async function (dispatch) {
//   const url = API_ProgressBarURL;
//
//   //dispatch({ type: LOAD_ProgressBar_LOADING });
//
// console.log('In async function');
//   try {
//     const fetchRes = await axios.get(url);
//     const res = await fetchRes.json();
//
//     dispatch({type: FETCH_PROGRESSBARS, payload: res.data});
//     console.log('fetch successful');
//   } catch (e) {
//   //  dispatch({ type: LOAD_PROGRESSBARS_ERROR, error: e || 'Unexpected Error!!!' });
//   console.log('error occured');
//     console.log(e);
//   }
// }
// }
