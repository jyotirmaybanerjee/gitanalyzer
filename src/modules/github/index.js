import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators as gitActionCreators} from './ducks';
import GitHub from './components';
// import './styles/index.sass';

function mapStateToProps(state) {
  const {userDetails, username, followers, following, repos} = state.git;
  return {
    userDetails,
    username,
    followers,
    following,
    repos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchUserDetails: bindActionCreators(gitActionCreators.doFetchUserDetails, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GitHub);
