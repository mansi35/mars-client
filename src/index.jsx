import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/initStore';
import './index.scss';
import reducers  from './store/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

