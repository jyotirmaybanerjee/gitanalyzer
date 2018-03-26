// @flow

import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators as gitActionCreators} from './modules/github/actions';

import GitHub from './modules/github';
import GridTable from './modules/grid';
import {Menu} from './menu';

@connect(state => ({
    username: state.git.username,
}), dispatch => ({
  doFetchUserDetails: bindActionCreators(gitActionCreators.doFetchUserDetails, dispatch),
}))
class App extends Component {
  props: {
    username: string,
    doFetchUserDetails: (username: string) => User,
  };

  render() {
    const {doFetchUserDetails} = this.props;
    const NoMatch = ({location}) => (
      <div>
        <h3>No match for <code>{location.pathname}</code></h3>
      </div>
    );

    return (
      <HashRouter>
        <Grid fluid>
          <Menu onSearch={doFetchUserDetails} />
          <Row className="root">
              <Switch>
                <Redirect from="/" exact to="/git" />
                <Route path="/git" component={GitHub} />
                <Route path="/grid" component={GridTable} />
                <Route path="/git" component={GitHub} />
                <Route path="*" component={NoMatch} />
              </Switch>
          </Row>
        </Grid>
      </HashRouter>
    );
  }
}

export default App;
