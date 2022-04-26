import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { userAPI } from "../../Shared/api";


// 액션 
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const FIND_PWD = "FIND_PWD";
const CHANGE_PWD = "CHANGE_PWD"

// 액션 생성
const logIn = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({ }));
const findPassword = createAction(FIND_PWD, (user) => ({}));
const changePassword = createAction(CHANGE_PWD, (user) => ({}));
// 초기값
const initialState = {
  userId: null,
  nickname: null,
  userName: null,
  isLogin: false,
}

// 미들웨어 
const logInDB = (userId, password) => {
  return function (dispatch, getState, { history }) {

    userAPI
      .login(userId, password)
      .then((response) => {
        //sessionStorage에 토큰 저장
        sessionStorage.setItem ("token", response.headers.authorization);
        //몇번째에 nickname이 딸려올려나
        localStorage.setItem ("nickname", response.headers.authorization.split(" ")[3]);
        dispatch(logIn({})); //reducer에서 state 변경
      }).catch((error) => {
        console.log("logInDB : error", error.response);
        alert("아이디와 비밀번호를 다시 확인해주세요.")
      });
  }
};
const logOutDB  = () => {
  return function (dispatch, getState, { history }) {
    sessionStorage.removeItem("token");
    dispatch(logOut());
    history.replace('/');
  }
}
const findPwdDB = (userName, userId) => {
  return function( dispatch, getState, {history} ) {

    userAPI
      .findPwd(userName, userId)
      .then(() => {
        window.alert('고객님의 이메일 함을 확인해주세요. 비밀번호 변경 링크를 보내드렸습니다.');
      })
      .catch((error) => {
        console.log("logInDB : error", error.response);
        alert("아이디와 성함을 다시 확인해주세요.")
      });
  }
}
const changePwdDB = (tempPassword, password, passwordCheck) => {
  return function( dispatch, getState, {history} ) {
    
    userAPI
      .changePwd(tempPassword, password, passwordCheck)
      .then(() => {
        window.alert('고객님의 비밀번호가 정상적으로 변경되었습니다. 다시 로그인해주세요.');
        history.replace('/');
      })
      .catch((error) => {
        console.log("logInDB : error", error.response);
        alert("임시 비밀번호와 비밀번호를 다시 확인해주세요.")
      });
  }
}
// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.userId = action.payload.userId;
      draft.userName = action.payload.userName;
      draft.nickname = action.payload.nickname;
      draft.isLogin = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        draft.userId = null;
        draft.userName = null;
        draft.nickname = null;
        draft.isLogin = false;
    }),
  }, initialState
)



const actionCreators = {
  logIn,
  logInDB,
  logOutDB,
  findPwdDB,
  changePwdDB,
}

export { actionCreators };