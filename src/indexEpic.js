import {combineEpics} from 'redux-observable';
import {fetchFollowersEpic, fetchFollowingEpic, fetchReposEpic} from './modules/github/epics';

const rootEpic = combineEpics(
  fetchFollowersEpic,
  fetchFollowingEpic,
  fetchReposEpic,
);

export {
  rootEpic,
};
