import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import thunk from "redux-thunk";

import User from "./Modules/User";
import Main from "./Modules/Main";
import Search from "./Modules/Search";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    main: Main,
    user: User,
    search: Search,
    router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
let configStore = (initialStore) => createStore(rootReducer, enhancer);

export default configStore();
