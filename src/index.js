import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configStore from "./Redux/configStore";

import App from './Shared/App';
import ScrollToTop from './Shared/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

const history = createBrowserHistory();

root.render(
  <Provider store={configStore}>
    <ConnectedRouter history={history}>
      <ScrollToTop/>
      <App />
    </ConnectedRouter>
  </Provider>
);

