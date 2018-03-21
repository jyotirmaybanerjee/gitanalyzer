// @flow

const FETCH_USER_DETAILS = '@@github/FETCH_USER_DETAILS';
const SET_USER_DETAILS = '@@github/SET_USER_DETAILS';
const FETCH_USER_FOLLOWERS = '@@github/FETCH_USER_FOLLOWERS';
const SET_USER_FOLLOWERS = '@@github/SET_USER_FOLLOWERS';
const FETCH_USER_FOLLOWING = '@@github/FETCH_USER_FOLLOWING';
const SET_USER_FOLLOWING = '@@github/SET_USER_FOLLOWING';
const FETCH_USER_REPOS = '@@github/FETCH_USER_REPOS';
const SET_USER_REPOS = '@@github/SET_USER_REPOS';

function doSetUserDetails(userDetails) {
  return {
    type: SET_USER_DETAILS,
    userDetails,
  };
}

function doFetchUserDetails(username) {
  return (dispatch: Function) => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then((data: User) => {
        dispatch(doSetUserDetails(data));
      });
  };
}

function doSetFollowers(followers) {
  return {
    type: SET_USER_FOLLOWERS,
    followers,
  };
}

function doFetchFollowers(user) {
  return (dispatch: Function) => {
    fetch(user.followers_url)
      .then(response => response.json());
      // .then(data => dispatch(doSetFollowers(data)));
  };
}

function doSetFollowing(following) {
  return {
    type: SET_USER_FOLLOWING,
    following,
  };
}

function doFetchFollowing(user) {
  return (dispatch: Function) => {
    fetch(user.following_url)
      .then(response => response.json());
      // .then(data => dispatch(doSetFollowing(data)));
  };
}

function doSetRepos(repos) {
  return {
    type: SET_USER_REPOS,
    repos,
  };
}

function doFetchRepos(user) {
  return (dispatch: Function) => {
    fetch(user.repos_url)
      .then(response => response.json());
      // .then(data => dispatch(doSetRepos(data)));
  };
}

const initialState = {
  userDetails: {},
  username: null,
  followers: {},
  following: {},
  repos: {},
};

function applyResetUser(state) {
  return {...state, initialState};
}

function applySetUser(state, action) {
  const {userDetails, username} = action;
  return {...state, userDetails};
}

function applySetFollowers(state, action) {
  const {followers} = action;
  return {...state, followers};
}

function applySetFollowing(state, action) {
  const {following} = action;
  return {...state, following};
}

function applySetRepos(state, action) {
  const {repos} = action;
  return {...state, repos};
}

function reducer(state: Object = initialState, action: Object) {
  switch (action.type) {
    case FETCH_USER_DETAILS:
      return applyResetUser(state);
    case SET_USER_DETAILS:
      return applySetUser(state, action);
    case SET_USER_FOLLOWERS:
      return applySetFollowers(state, action);
    case SET_USER_FOLLOWING:
      return applySetFollowing(state, action);
    case SET_USER_REPOS:
      return applySetRepos(state, action);
    default:
      return state;
  }
}

const actionCreators = {
  doFetchUserDetails,
  doFetchFollowers,
  doFetchFollowing,
  doFetchRepos,
};

const actionTypes = {
  FETCH_USER_DETAILS,
  SET_USER_DETAILS,
  FETCH_USER_FOLLOWERS,
  SET_USER_FOLLOWERS,
  FETCH_USER_FOLLOWING,
  SET_USER_FOLLOWING,
  FETCH_USER_REPOS,
  SET_USER_REPOS,
};

export {
  actionCreators,
  actionTypes,
};

export default reducer;
