import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { userAPI } from "../../Shared/api";


// 액션 
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
//이메일 중복체크
//닉네임 중복체크
//식물 맞춤 테스트
const LOG_OUT = "LOG_OUT";
const FIND_PWD = "FIND_PWD";
const CHANGE_PWD = "CHANGE_PWD"

// 액션 생성
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({ }));
const findPassword = createAction(FIND_PWD, (user) => ({}));
const changePassword = createAction(CHANGE_PWD, (user) => ({}));

// 초기값
const initialState = {
  user: null,
  isLogin: false,
}
const initialUser = {
  username: "",
  nickname : "",
  profileImgUrl: "",
}
// 미들웨어 
const logInDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    userAPI
      .login(username, password)
      .then((response) => {
        //sessionStorage에 토큰 저장
        sessionStorage.setItem ("token", response.headers.authorization);
        dispatch(isLoginDB());
        history.replace('/home');
      }).catch((error) => {
        console.log("logInDB : error", error.response);
        window.alert("이메일 혹은 비밀번호를 다시 확인해주세요.")
        return;
      });
  }
};

const isLoginDB = () => {
  return function (dispatch, getState, {history}) {
    userAPI
      .isLogin()
      .then((res) => {
        dispatch(getUser(res.data));
        localStorage.setItem('nickname', res.data.nickname)
      })
      .catch((err) => {
        console.log("isLogin : error", err);
        return;
      })
  }
}


//signUp 폼데이터로 보내기
const signUpDB = (username, password, nickname, profileImgUrl) => {
  console.log(username, password, nickname, profileImgUrl)
  const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("nickname", nickname);
    formData.append("profileImgUrl", profileImgUrl);
  return function (dispatch, getState, { history }) {
    userAPI
      .signUp(formData)
      .then((res) => {
        console.log(res);
        window.alert("회원가입되었습니다. 다시 로그인해주세요.");
        history.push('/'); 
      }).catch((err) => {
        console.log("signUpDB : error", err.response);
        window.alert("회원가입에 실패하였습니다. 다시 시도하여주세요.")
      })
  }
}
const kakaoLogInDB = (code) => {
  return function (dispatch, getState, {history}){
    userAPI
      .kakaoLogIn(code)
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.email);
        dispatch(setUser({
          username: res.data.email
        }
        ))
        history.push('/home');
        window.location.reload();
      })
      .catch((error) => {
        console.log("error: ", error);
        window.alert('로그인에 실패하였습니다. ')
        history.goBack();
      })
  }
}
const googleLogInDB = (code) => {
  return function (dispatch, getState, {history}) {
    userAPI
      .googleLogIn(code)
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        dispatch(setUser({
          username: res.data.username
        }))
        history.push('/home');
        window.location.reload();
      }
      ).catch((error) => {
        console.log("error: ", error);
        window.alert('로그인에 실패하였습니다. ');
        return;
        // history.goBack();
      })
  }
}
const logOutDB = () => {
  const token = sessionStorage.getItem('token');
  return function (dispatch, getState, { history }) {
    userAPI
      .logOut(token)
      .then((res) => {
        console.log("logOut : response", res);
        sessionStorage.removeItem("token");
        localStorage.removeItem("username");
        dispatch(logOut());
       history.push('/');  
        window.location.reload('');
      }
      ).catch((error) => {
        console.log("logOut : error", error.response);
      });
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
      draft.user = action.payload.user;
      draft.isLogin = true;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {
      draft.user = action.payload.user;
      draft.isLogin = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        draft.user = null;
        draft.isLogin = false;
    }),
  }, initialState
)



const actionCreators = {
  setUser,
  isLoginDB,
  signUpDB,
  kakaoLogInDB,
  googleLogInDB,
  logInDB,
  findPwdDB,
  changePwdDB,
  logOutDB,
}

export { actionCreators };