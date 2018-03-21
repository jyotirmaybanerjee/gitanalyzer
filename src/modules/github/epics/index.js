import {Observable} from 'rxjs';
import {actionCreators, actionTypes} from '../actions';

export const fetchFollowersEpic = (action$) =>
  action$.ofType(actionTypes.SET_USER_DETAILS)
    .mergeMap((action) =>
      Observable.ajax({
        crossDomain: true,
        url: `https://api.github.com/users/${action.userDetails.login}/followers`
      })
      .map(({response}) => actionCreators.doSetFollowers(response))
  );

export const fetchFollowingEpic = (action$) =>
  action$.ofType(actionTypes.SET_USER_DETAILS)
    .mergeMap((action) =>
      Observable.ajax({
        crossDomain: true,
        url: `https://api.github.com/users/${action.userDetails.login}/following`
      })
      .map(({response}) => actionCreators.doSetFollowing(response))
  );

export const fetchReposEpic = (action$) =>
  action$.ofType(actionTypes.SET_USER_DETAILS)
    .mergeMap((action) =>
      Observable.ajax({
        crossDomain: true,
        url: `https://api.github.com/users/${action.userDetails.login}/repos`
      })
      .map(({response}) => actionCreators.doSetRepos(response))
  );
