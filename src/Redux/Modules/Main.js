import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { mainAPI } from "../../Shared/api";
import axios from "axios";


// 메인페이지 관련 리덕스 

// 액션 
const GET_WEATHER = "GET_WEATHER";
const GET_MY_PLANT = "GET_MY_PLANT";

// 액션 생성
const getWeather = createAction(GET_WEATHER, (weather) => ({ weather }));
const getMyPlant = createAction(GET_MY_PLANT, (myplant) => ({myplant}))

// 초기값
const initialState = {
  list:[]
}

// 미들웨어 
// 날씨 가져오기
const getWeatherDB = (userLocation) => {
  return function (dispatch, getState, { history }) {
    mainAPI
      .getWeather(userLocation)
      .then((response) => {
        console.log("getWeatherDB : response", response);
        const weatherData = {
          weather: response.main,
          temp: response.temp,
          temp_min: response.temp_min,
          temp_max: response.temp_max,
          humidity: response.humidity,
        }
        dispatch(getWeather(weatherData));
      }).catch((error) => {
        console.log("getWeatherDB : error", error.response);
      });
  }
};

// 랜덤 문구 가져오기
const getSentenceDB = () => {
  return function (dispatch, getState, { history }) {
    mainAPI
      .getSentence()
      .then((response) => {
        console.log("getSentenceDB : response", response)
      }).catch((error) => {
        console.log("getSentenceDB : error", error.response);
      });
  }
}

// 내 식물 목록 가져오기
const getMyPlantDB = () => {
  return function (dispatch, getState, { history }) {
    mainAPI
    .getMyPlant()
    .then((response) => {
      console.log("getMyplantDB : response", response)
    }).catch((error) => {
      console.log("getMyplantDB : error", error.response);
    });
  }
}

// To-do 리스트 가져오기
const getTodoListDB = () => {
  return function (dispatch, getState, { history }) {
    mainAPI
    .getTodoList()
    .then((response) => {
      console.log("getTodoListDB : response", response)
    }).catch((error) => {
      console.log("getTodoListDB : error", error.response);
    });
  }
}

// 투두 체크하기
const todoCheckDB = (todoNo) => {
  return function (dispatch, getState, { history }) {
    mainAPI
    .todoCheck(todoNo)
    .then((response) => {
      console.log("todoCheckDB : response", response);
    }).catch((error) => {
      console.log("todoCheckDB : error", error.response);
    })
  }
}

const todoUnCheckDB = (todoNo) => {
  return function (dispatch, getState, { history }) {
    mainAPI
    .todoUnCheck(todoNo)
    .then((response) => {
      console.log("todoCheckDB : response", response);
    }).catch((error) => {
      console.log("todoCheckDB : error", error.response);
    })
  }
}


// 리듀서
export default handleActions(
  {
    [GET_WEATHER]: (state, action) => produce(state, (draft) => {
      // console.log("GET_WEATHER : WEATHER", action.payload.weather)
      draft.weather = action.payload.weather;
    }),
    [GET_MY_PLANT]: (state, action) => produce(state, (draft) => {
      draft.myplant = action.payload.myplant;
    })
  }, initialState
)



const actionCreators = {
  getWeatherDB,
  getSentenceDB,
  getMyPlantDB,
  getTodoListDB,
  todoCheckDB,
  todoUnCheckDB,
}

export { actionCreators };