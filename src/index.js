import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import {store, persistor} from './common/config/configureStore';
import {PersistGate} from 'redux-persist/integration/react'

import 'assets/fonts/material-design-iconic/css/material-design-iconic-font.css';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
