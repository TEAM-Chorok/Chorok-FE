import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./redux/ConfigStore";
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import App from './shared/App';
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

