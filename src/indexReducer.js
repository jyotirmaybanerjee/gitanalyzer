import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import git from './modules/github/actions';

export default combineReducers({
  git,
  routing: routerReducer,
});
