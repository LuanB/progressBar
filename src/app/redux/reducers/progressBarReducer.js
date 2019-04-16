import {
  FETCH_PROGRESSBARS,
  LOAD_ProgressBar_LOADING,
  LOAD_PROGRESSBARS_ERROR
} from '../actions/types';



const initialState = {
  bars: [],
  barsIsLoading: false,
  loading: false,
  error: ''
};


export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROGRESSBARS:
      return { ...state, bars: action.payload, loading: false };

    case LOAD_ProgressBar_LOADING: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case LOAD_PROGRESSBARS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    default:
      return state;
  }

}
