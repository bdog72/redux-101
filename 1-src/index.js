import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
