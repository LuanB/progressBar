import { combineReducers } from 'redux';

import progressBarReducer from './progressBarReducer';


export default combineReducers({
  progressBar: progressBarReducer
  
});
