import {Observable} from 'rxjs';
import {actionCreators, actionTypes} from '../ducks';

export const fetchFollowersEpic = action$ =>
  action$.ofType(actionTypes.SET_USER_DETAILS)
    .mergeMap(action =>
      Observable.from(actionCreators.doFetchFollowers(action.userDetails))
        .map(data => actionCreators.doSetFollowers(data)));

export const fetchFollowingEpic = action$ =>
  action$.ofType(actionTypes.SET_USER_DETAILS)
    .mergeMap(action =>
      Observable.from(actionCreators.doFetchFollowing(action.userDetails))
        .map(data => actionCreators.doSetFollowing(data)));

export const fetchReposEpic = action$ =>
  action$.ofType(actionTypes.SET_USER_DETAILS)
    .mergeMap(action =>
      Observable.from(actionCreators.doFetchRepos(action.userDetails))
        .map(data => actionCreators.doSetRepos(data)));
