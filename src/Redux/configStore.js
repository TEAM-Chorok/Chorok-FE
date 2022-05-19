import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import thunk from "redux-thunk";

import Label from "./Modules/Label";
import User from "./Modules/User";
import Main from "./Modules/Main";
import Post from "./Modules/post"
import Plant from "./Modules/Plant"
import Search from "./Modules/Search";
import Calendar from "./Modules/Calendar";
import MyPage from "./Modules/MyPage";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    main: Main,
    user: User,
    search: Search,
    calendar: Calendar,
    plant: Plant,
    label: Label,
    post: Post,
    mypage: MyPage,
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
