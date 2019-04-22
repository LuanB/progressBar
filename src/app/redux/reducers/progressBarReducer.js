import {
  FETCH_PROGRESSBARS,
  LOAD_ProgressBar_LOADING,
  LOAD_PROGRESSBARS_ERROR,
  UPDATE_PROGRESSBARS,
  FETCH_PROGRESSBARSAPIDATA,
  SELECTED_PROGRESSBAR
} from '../actions/types';



const initialState = {

  buttons: [],
  bars: [],
  limit: 100,
  selectedBtn: {id:0},
  barsIsLoading: false,
  loading: false,
  error: ''
};


export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROGRESSBARS:
      return { ...state, bars: state.bars.concat(action.payload), loading: false };

      case FETCH_PROGRESSBARSAPIDATA:
        return { ...state, buttons:action.payload.buttons, bars: action.payload.bars, limit: action.payload.limit, loading: false };


      case UPDATE_PROGRESSBARS:
      console.log('in update progress bar reducer. state is ', state);
    const updatedValue = state.bars.map((item = 0, index) => {
      if(index === action.payload.id) {
        console.log('item is ',item)
        return  (item + action.payload.value > 0 ? item + action.payload.value : 0 )
      }
      return item
    })

    return {...state, bars: updatedValue};


    case SELECTED_PROGRESSBAR: {
      return {
        ...state,
        selectedBtn: action.payload
            };
    }

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
