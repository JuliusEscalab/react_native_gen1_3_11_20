import {combineReducers} from 'redux';
import login from './login';
import statistics from './statistics';

const reducers = combineReducers({
  login,
  statistics,
});

export default reducers;
