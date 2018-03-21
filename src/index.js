import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory, createHashHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
import App from './modules/app';
import GitHub from './modules/github';
import Grid from './modules/grid';
import './styles/index.sass';

const store = configureStore();
// const history = syncHistoryWithStore(createHashHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={GitHub} />
        <Route path="/" component={GitHub} />
        <Route path="/grid" component={Grid} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

// module.hot.accept();
