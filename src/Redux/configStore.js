import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./Modules/User";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  //연결할 store들 
  user: User,
  router: connectRouter(history),
  //history 를 만들고 createBrowserHistory()를 넣어준다. 그리고 리듀서를 묶는 구간에 router에다가 history를 connectRouter로 router와 연결이 되게 하고 스토어에 history 저장.
});

//미들웨어들 액션실행후 비동기처리하고 할때 thunk 로 쓸껀데 그 안에 내장함수 withExtraArgument를 쓴다. 액션생성함수 실행하고 리듀서가 실행하기 전단계에서 이제 history 사용 가능
//그래서 비동기 갔다와서 .then 하고 history 받아다가 쓴다.
const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인지 알려줌 (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV; //process.env.NODE_ENV를 찍어보면 지금 어느환경인지가 나온다.

// 현제 환경이 개발 환경일 경우 logger 사용
if (env === "development") {
    // if문을 써서 개발할때만 콘솔창에 어떤 액션이고 어떤 경로상태인지 뜨게 해주고 import 하면 프로젝트 크기만 커지므로 if문을 쓰고 require를 씀
    //require는 패키지 가져올때 쓰는데 import를 사용하지 않고 require을 사용한 이유: 자바스크립트 자체가 지원하는 패키지 읽는 방법 require
    // logger 라는건 콘솔창에 이전상태 이후상태 찍히는데  요걸 가져오면 redux안에 store데이터들에 어떤게 담기고 변하는지 나옴
    const { logger } = require("redux-logger");

    middlewares.push(logger); // 이 logger를 middlewares에 넣어줌 그럼 [thunk]뒤에 logger가 붙음
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const configStore = (initialStore) => createStore(rootReducer, enhancer);

export default configStore();
