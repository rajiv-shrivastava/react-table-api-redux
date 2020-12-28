import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


let store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
