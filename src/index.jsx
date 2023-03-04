import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/initStore';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

