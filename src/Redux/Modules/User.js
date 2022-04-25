import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// import LoginAPI from "../../Shared/api";


// 액션 
const LOG_IN = "LOG_IN";

// 액션 생성
const logIn = createAction(LOG_IN, (user) => ({ user }));

// 초기값
const initialState = {
  list: [],
}

// 미들웨어 
const logInDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {

    // LoginAPI.login(id, pwd)
    //   .then((response) => {

    //     const token = response.headers.authorization.split(" ")[1];
    //     sessionStorage.setItem("token", token);

    //   }).catch((error) => {
    //     console.log("logInDB : error", error.response);
    //     alert("아이디와 비밀번호를 다시 확인해주세요.")
    //   });
  }
};

// 리듀서
export default handleActions(
  {
    [LOG_IN] : (state, action) =>
    produce(state, (draft) => {
      draft.userName = action.userName;
      draft.is_login = true;
    }),
  }, initialState
)



const actionCreators = {
  logIn,
  logInDB,
}

export { actionCreators };