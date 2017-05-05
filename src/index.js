import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dogs from './Dogs';
import Cars from './Cars';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware()}>
    <Router>
      <Switch>
        <Route path="/dogs" component={Dogs} />
        <Route path="/cars" component={Cars} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
