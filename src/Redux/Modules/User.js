import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { userAPI } from "../../Shared/api";


// 액션 
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
const FIND_PWD = "FIND_PWD";
const CHANGE_PWD = "CHANGE_PWD"

// 액션 생성
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({ }));
const changePassword = createAction(CHANGE_PWD, (user) => ({}));

// 초기값
const initialState = {
  user: null,
  isLogin: false,
}

// 미들웨어 
const logInDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    userAPI
      .login(username, password)
      .then((response) => {
        //localStorage에 토큰 저장
        localStorage.setItem ("token", response.headers.authorization);
        dispatch(isLoginDB());
        history.replace('/home');
      }).catch((error) => {
        console.log("logInDB : error", error.response);
        // window.alert("이메일 혹은 비밀번호를 다시 확인해주세요.");
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
        localStorage.setItem('nickname', res.data.nickname);
      })
      .catch((err) => {
        console.log("isLogin : error", err);
        return;
      })
  }
}


//signUp 폼데이터로 보내기
const signUpDB = (username, password, nickname, profileImgUrl) => {
  const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("nickname", nickname);
    formData.append("profileImgUrl", profileImgUrl);
  return function (dispatch, getState, { history }) {
    userAPI
      .signUp(formData)
      .then((res) => {
        history.replace('/'); 
      }).catch((err) => {
        console.log("signUpDB : error", err.response);
        // window.alert("회원가입에 실패하였습니다. 다시 시도하여주세요.")
      })
  }
}

const emailValidationDB = (token, email) => {
  console.log(token, email);
  return function (dispatch, getState, { history }) {
    userAPI
      .emailValidation(token, email)
      .then((response) => {
        localStorage.setItem ("token", response.headers.authorization);
        dispatch(isLoginDB());
      }).catch((err) => {
        console.log(err);
        // window.alert("이메일 인증에 실패하였습니다. 다시 시도하여주세요."); 
        history.replace('/');
      })
  }

}

//카카오로그인
const kakaoLogInDB = (code) => {
  return function (dispatch, getState, {history}){
    userAPI
      .kakaoLogIn(code)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
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
        // window.alert('로그인에 실패하였습니다. ')
        history.goBack();
      })
  }
}
//구글 로그인
const googleLogInDB = (code) => {
  return function (dispatch, getState, {history}) {
    userAPI
      .googleLogIn(code)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(setUser({
          username: res.data.username
        }))
        history.push('/home');
        window.location.reload();
      }
      ).catch((error) => {
        console.log("error: ", error);
        // window.alert('로그인에 실패하였습니다. ');
        return;
        // history.goBack();
      })
  }
}
//전체 로그아웃
const logOutDB = () => {
  const token = localStorage.getItem('token');
  return function (dispatch, getState, { history }) {
    userAPI
      .logOut(token)
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("nickname");
        localStorage.removeItem("username");
        dispatch(logOut());
        history.push('/');  
        window.location.reload();
      }
      ).catch((error) => {
        console.log("logOut : error", error.response);
      });
  }

}

//프로필 수정 ( 닉네임, 자기소개 메시지 )
const editProfileDB = (nickname, profileImgUrl, preview, profileMsg) => {
  const formData = new FormData();
  
  if(profileImgUrl === ""){
    formData.append("nickname", nickname);
    formData.append("profileMsg", profileMsg);
    formData.append("originalUrl", preview);
  }else {
    formData.append("nickname", nickname);
    formData.append("profileImgUrl", profileImgUrl);
    formData.append("profileMsg", profileMsg);
  }
  return function (dispatch, getState, {history}) {
    userAPI
      .editProfile(formData)
      .then((response) => {
        dispatch(isLoginDB());
        history.push('/mypage');
        window.location.reload();
      }).catch((error) => {
        console.log("editProfile : error", error.response);
      });
  }
}

//회원 탈퇴
const deactivateUserDB = () => {
  return function (dispatch, getState, {history}) {
    userAPI
      .deactivateUser()
      .then((response) => {
        window.alert('정상적으로 회원탈퇴 되었습니다.');
        localStorage.removeItem("token");
        localStorage.removeItem("nickname");
        localStorage.removeItem("username");
        history.push('/');
        window.location.reload();
      }).catch((error) => {
        console.log("deactivate : error", error.response);
        // window.alert('회원탈퇴를 실패하였습니다.');

      });
  }
}

const findPwdDB = (userName, userId) => {
  // return function( dispatch, getState, {history} ) {

  //   userAPI
  //     .findPwd(userName, userId)
  //     .then(() => {
  //       window.alert('고객님의 이메일 함을 확인해주세요. 비밀번호 변경 링크를 보내드렸습니다.');
  //     })
  //     .catch((error) => {
  //       console.log("logInDB : error", error.response);
  //       alert("아이디와 성함을 다시 확인해주세요.")
  //     });
  // }
}
const changePwdDB = (password) => {
  return function( dispatch, getState, {history} ) {
    const formData = new FormData();
    formData.append("password", password);
    userAPI
      .changePwd(password)
      .then(() => {
        // window.alert('고객님의 비밀번호가 정상적으로 변경되었습니다.');
        history.replace('/home');
        window.location.reload();
      })
      .catch((error) => {
        console.log("logInDB : error", error.response);
        // alert("비밀번호를 다시 확인해주세요.")
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
  emailValidationDB,
  kakaoLogInDB,
  googleLogInDB,
  logInDB,
  deactivateUserDB,
  logOutDB,
  findPwdDB,
  changePwdDB,
  editProfileDB,
}

export { actionCreators };