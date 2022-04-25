import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { userAPI } from "../../Shared/api";


// 액션 
const SET_USER = "Setuser";

// 액션 생성
const logIn = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialState = {
  list: [],
}

// 미들웨어 
const logInDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {

    userAPI.login(id, pwd)
      .then((response) => {

        const token = response.headers.authorization.split(" ")[1];
        sessionStorage.setItem("token", token);

      }).catch((error) => {
        console.log("logInDB : error", error.response);
        alert("아이디와 비밀번호를 다시 확인해주세요.")
      });
  }
};

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {

    }),
  }, initialState
)



const actionCreators = {
  logIn,
  logInDB,
}

export { actionCreators };