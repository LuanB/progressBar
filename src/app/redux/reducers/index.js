import { combineReducers } from 'redux';

import progressBarReducer from './progressBarReducer';
import rotateReducer from './rotateReducer';


export default combineReducers({
  progressBar: progressBarReducer,
  rotateReducer: rotateReducer
  
});
