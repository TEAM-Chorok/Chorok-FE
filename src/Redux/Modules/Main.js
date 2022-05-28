import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { mainAPI } from "../../Shared/api";
import axios from "axios";


// 메인페이지 관련 리덕스 

// 액션 
const GET_WEATHER = "GET_WEATHER";
const GET_MY_PLANT = "GET_MY_PLANT";
const GET_TODO_LIST = "GET_TODO_LIST";
const GET_SENTENCE = "GET_SENTENCE";
const GET_MY_PLANT_PAGE = "GET_MY_PLANT_PAGE";

// 액션 생성
const getWeather = createAction(GET_WEATHER, (weather) => ({ weather }));
const getMyPlant = createAction(GET_MY_PLANT, (myplant) => ({ myplant }));
const getTodoList = createAction(GET_TODO_LIST, (todolist) => ({ todolist }));
const getSentence = createAction(GET_SENTENCE, (sentence) => ({ sentence }));
const getMyPlantPage = createAction(GET_MY_PLANT_PAGE, (myplantlist) => ({ myplantlist }));

// 초기값
const initialState = {
  list: []
}

// 미들웨어 
// 날씨 가져오기
const getWeatherDB = (userLocation) => {
  return function (dispatch, getState, { history }) {
    mainAPI
      .getWeather(userLocation)
      .then((response) => {
        // 날씨 데이터 한글 변환
        let weather = '';
        let arr = [['Clear', 'Clouds', 'Rain', 'Snow', 'Mist', 'Thunderstorm', 'Drizzle',
          'Fog', 'Haze', 'Dust', 'Sand', 'Ash', 'Smoke', 'Squall', 'Tornado'],
        ['맑음', '흐림', '비', '눈', '안개', '천둥', '비', '안개', '먼지', '황사', '먼지', '흐림', '스콜', '폭풍']];

        for (let i = 0; i < arr[0].length; i++) {
          if (arr[0][i] === response.data.weather[0].main) {
            weather = arr[1][i];
            break;
          }
        }

        // 날씨 데이터 정제 
        const weatherData = {
          weather: weather,
          temp: Math.floor(response.data.main.temp - 273.15),
          temp_min: Math.floor(response.data.main.temp_min - 273.15),
          temp_max: Math.floor(response.data.main.temp_max - 273.15),
          humidity: response.data.main.humidity,
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
        dispatch(getSentence(response.data));
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
        dispatch(getMyPlant(response.data));
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
        dispatch(getTodoList(response.data));
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
        dispatch(getTodoListDB());
      }).catch((error) => {
        console.log("todoCheckDB : error", error.response);
      })
  }
}

// 투두 체크 취소
const todoUnCheckDB = (todoNo) => {
  return function (dispatch, getState, { history }) {
    mainAPI
      .todoUnCheck(todoNo)
      .then((response) => {
        dispatch(getTodoListDB());
      }).catch((error) => {
        console.log("todoCheckDB : error", error.response);
      })
  }
}

// 내 식물 탭 전용 식물데이터 
const getMyPlantPageDB = () => {
  return function (dispatch, getState, {history}) {
    mainAPI
    .getMyPlantPage()
    .then((response) => {
      dispatch(getMyPlantPage(response.data));
    }).catch((error) => {
      console.log("getMyPlantPageDB : error", error.response);
    })
  }
}




// 리듀서
export default handleActions(
  {
    [GET_WEATHER]: (state, action) => produce(state, (draft) => {
      draft.weather = action.payload.weather;
    }),
    [GET_MY_PLANT]: (state, action) => produce(state, (draft) => {
      draft.myplant = action.payload.myplant;
    }),
    [GET_TODO_LIST]: (state, action) => produce(state, (draft) => {
      draft.todo = action.payload.todolist;
    }),
    [GET_SENTENCE]: (state, action) => produce(state, (draft) => {
      draft.sentence = action.payload.sentence;
    }),
    [GET_MY_PLANT_PAGE]: (state, action) => produce(state, (draft) => {
      draft.myplantlist = action.payload.myplantlist;
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
  getMyPlantPageDB,
}

export { actionCreators };