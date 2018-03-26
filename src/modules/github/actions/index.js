// @flow

const FETCH_USER_DETAILS = '@@github/FETCH_USER_DETAILS';
const SET_USER_DETAILS = '@@github/SET_USER_DETAILS';
const FETCH_USER_FOLLOWERS = '@@github/FETCH_USER_FOLLOWERS';
const SET_USER_FOLLOWERS = '@@github/SET_USER_FOLLOWERS';
const FETCH_USER_FOLLOWING = '@@github/FETCH_USER_FOLLOWING';
const SET_USER_FOLLOWING = '@@github/SET_USER_FOLLOWING';
const FETCH_USER_REPOS = '@@github/FETCH_USER_REPOS';
const SET_USER_REPOS = '@@github/SET_USER_REPOS';
const GITHUB_FETCH_ERROR = '@@github/GITHUB_FETCH_ERROR';

function doFetchUserDetails(username: string) {
    return (dispatch: Function) => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then((data: User) => {
            dispatch(doSetUserDetails(data));
        });
    };
}

function doSetUserDetails(userDetails: User) {
  return {
    type: SET_USER_DETAILS,
    userDetails,
  };
}

function doSetFollowers(followers: Array<Follow>) {
  return {
    type: SET_USER_FOLLOWERS,
    followers,
  };
}

function doSetFollowing(following: Array<Follow>) {
  return {
    type: SET_USER_FOLLOWING,
    following,
  };
}

function doSetRepos(repos: Array<Repo>) {
  return {
    type: SET_USER_REPOS,
    repos,
  };
}

const initialState = {
  userDetails: {},
  username: '',
  followers: [],
  following: [],
  repos: []
};

function applyResetUser(state) {
  return {...state, initialState};
}

function applySetUser(state, action) {
  const {userDetails} = action;
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
    repos.sort((a, b) => {
        if (a.fork) {
            return 1;
        }
        if (b.fork) {
            return -1;
        }
        return 0;
    });
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
  doSetFollowers,
  doSetFollowing,
  doSetRepos,
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
  GITHUB_FETCH_ERROR,
};

export {
  actionCreators,
  actionTypes,
};

export default reducer;
