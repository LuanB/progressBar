import {
  FETCH_PROGRESSBARS,
  LOAD_ProgressBar_LOADING,
  LOAD_PROGRESSBARS_ERROR,
  UPDATE_PROGRESSBARS
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
      return { ...state, bars: state.bars.concat(action.payload), loading: false };

      case UPDATE_PROGRESSBARS:
      const index = action.payload.id;

        return { ...state, bars: [...state.bars, {bar: action.payload.value, index:action.payload.id} ], loading: false };

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
