import {API_ProgressBarURL} from '../../common/constants';

import {FETCH_PROGRESSBARS} from './types';


export const fetchProgressBars = () => async (dispatch) => {
  const url = API_ProgressBarURL;

  const res = await fetch(url, {method: 'GET'});

  dispatch({type: FETCH_PROGRESSBARS, payload: res.data});

};

export const fetchProgressBars = () => async (dispatch) => {
  const url = API_ProgressBarURL;

  dispatch({ type: LOAD_ProgressBar_LOADING });

  try {
    const fetchRes = await fetch(url, { method: 'GET' });
    const res = await fetchRes.json();

    dispatch({type: FETCH_PROGRESSBARS, payload: res.data});
  } catch (e) {
    dispatch({ type: LOAD_PROGRESSBARS_ERROR, error: e || 'Unexpected Error!!!' });
    console.log(e);
  }
};
