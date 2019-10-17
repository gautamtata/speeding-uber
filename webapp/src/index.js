import React from 'react';
import document from 'global/document';
import {Provider} from 'react-redux';
import {hashHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {render} from 'react-dom';
import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = syncHistoryWithStore(hashHistory, store);


const Root = () => (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );

render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
