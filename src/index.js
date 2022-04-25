import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import store from "./Redux/configStore";

import App from './Shared/App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const history = createBrowserHistory();

root.render(
    <Provider store={store}>  
      <ConnectedRouter history={history}>
        <App /> 
      </ConnectedRouter>
    </Provider>
);

