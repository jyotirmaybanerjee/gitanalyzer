import React from 'react';
import {connect} from 'react-redux';
import Grid from './components';

function mapStateToProps(state) {
  const {username} = state.git;
  return {
    username
  };
}

export default connect(mapStateToProps)(Grid);
