import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import git from '../modules/github/ducks';

export default combineReducers({
  git,
  routing: routerReducer,
});
