import React from 'react';
import {connect} from 'react-redux';
import Charts from './components';

function mapStateToProps(state) {
  const {username} = state.git;
  return {
    username
  };
}

export default connect(mapStateToProps)(Charts);
