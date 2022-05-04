import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { mainAPI } from "../../Shared/api";
import axios from "axios";


// 메인페이지 관련 리덕스 
// 주호님이 지속적으로 api 설계 변경하신다고 하셔서 기능구현은 뒤로 미뤄두었습니다 ㅠ.ㅠ! 

// 액션 
const GET_WEATHER = "GET_WEATHER";
const GET_DATA = "GET_DATA"

// 액션 생성
const getWeather = createAction(GET_WEATHER, (weather) => ({ weather }));
// open api test
const getdata = createAction(GET_DATA, (data) => ({ data }))

// 초기값
const initialState = {
  list:[]
}

// 미들웨어 
// 날씨 가져오기
// cors때문에 서버에서 내려받기로 
const getWeatherDB = (lat, lon) => {
  return function (dispatch, getState, { history }) {
    mainAPI
      .getWeather(lat, lon)
      .then((response) => {
        // console.log("getWeatherDB : response", response);
        dispatch(getWeather(response));
      }).catch((error) => {
        // console.log("getWeatherDB : error", error.response);
      });
  }
};

// 랜덤 문구 가져오기
const getSentenceDB = () => {
  return function (dispatch, getState, { history }) {
    
  }
}

// 내 식물 목록 가져오기
const getMyPlantDB = () => {
  return function (dispatch, getState, { history }) {
    
  }
}

// To-do 리스트 가져오기
const getTodoListDB = () => {
  return function (dispatch, getState, { history }) {
    
  }
}

// 투두 체크하기
const todoCheckedDB = () => {
  return function (dispatch, getState, { history }) {

  }
}

// open api test
const getdataDB = () => {
  return function (dispatch, getState, { history }) {
      axios
          .get("https://api.instantwebtools.net/v1/passenger?page=1&size=10")
          .then((response) => {
              // console.log("getdata : response", response);
          }).catch((error) => {
              // console.log("getdataDB : error", error.response);
          });
  }
};

// 리듀서
export default handleActions(
  {
    [GET_WEATHER]: (state, action) => produce(state, (draft) => {
      // console.log("GET_WEATHER : WEATHER", action.payload.weather)
      draft.weather = action.payload.weather;
    }),
    [GET_DATA]: (state, action) => produce(state, (draft) => {
      // console.log("GET_DATA : DATA", action.payload.data);
      draft.data = action.payload.data;
    })
  }, initialState
)



const actionCreators = {
  getWeatherDB,
  getdataDB,
}

export { actionCreators };