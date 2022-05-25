import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { calendarAPI } from "../../Shared/api";
import { actionCreators as mainActions } from "./Main";

// 액션 
const GET_CHECKED = "GET_CHECKED";

// 액션 생성
const getChecked = createAction(GET_CHECKED, (checkeddata) => ({ checkeddata }));

// 초기값
const initialState = {
  list: []
}

// 미들웨어 
// 달력 체크 데이터 가져오기
const getCheckedDB = (year, month, plantNo) => {
  return function (dispatch, getState, { history }) {

    if (!plantNo) {
      dispatch(getChecked());
      return;
    }

    calendarAPI
      .getChecked(year, month, plantNo)
      .then((response) => {

        console.log("getCheckedDB : response", response);
        const blooming = [];
        const changing = [];
        const leafcleaning = [];
        const supplements = [];
        const watering = [];
        const refreshing = [];

        for (let i = 0; i < response.data.bloomingDays.length; i++) {
          blooming.push(response.data.bloomingDays[i].bloomingDay);
        }
        for (let i = 0; i < response.data.changing.length; i++) {
          changing.push(response.data.changing[i].toDoTime);
        }
        for (let i = 0; i < response.data.leafCleaning.length; i++) {
          leafcleaning.push(response.data.leafCleaning[i].toDoTime);
        }
        for (let i = 0; i < response.data.supplements.length; i++) {
          supplements.push(response.data.supplements[i].toDoTime);
        }
        for (let i = 0; i < response.data.watering.length; i++) {
          watering.push(response.data.watering[i].toDoTime);
        }
        for (let i = 0; i < response.data.airRefreshing.length; i++) {
          refreshing.push(response.data.airRefreshing[i].toDoTime);
        }

        const checkedData = {
          blooming, changing, leafcleaning, supplements, watering, refreshing,
        }

        dispatch(getChecked(checkedData));
      }).catch((error) => {
        console.log("getCheckedDB : error", error.response);
      });
  }
};

// 개화 체크
const postBloomingDB = (plantNo, data, year, month) => {
  return function (dispatch, getState, { history }) {
    calendarAPI
    .postBlooming(plantNo, data)
    .then((response) => {
      console.log("postBloomingDB : response", response.data);
      dispatch(getCheckedDB(year, month, plantNo));
    }).catch((error) => {
      console.log("postBloomingDB : error", error.response);
      })
    }
}

// 개화 체크 해제
const deleteBloomingDB = (plantNo, date, year, month) => {
  return function (dispatch, getState, { history }) {
    calendarAPI
    .deleteBlooming(plantNo,date)
    .then((response) => {
      console.log("postBloomingDB : response", response.data);
      dispatch(getCheckedDB(year, month, plantNo));
    }).catch((error) => {
      console.log("postBloomingDB : error", error.response);
      })
    }
}

// 개화 외 목록 체크
const checkCalendarDB = (date, plantNo, workType, year, month) => {
  console.log(`/calendar/${date}/${plantNo}/${workType}`);
  return function (dispatch, getState, { history }) {
    calendarAPI
      .checkCalendar(plantNo, date, workType)
      .then((response) => {
        console.log("checkCalendarDB : response", response.data);
        dispatch(mainActions.getTodoListDB());
        dispatch(getCheckedDB(year, month, plantNo));
      }).catch((error) => {
        console.log("checkCalendarDB : response", error.response);
      })
    }
  }
  
const unCheckCalendarDB = (date, plantNo, workType, year, month) => {
  console.log(`/calendar/${date}/${plantNo}/${workType}`);
  return function (dispatch, getState, { history }) {
    calendarAPI
    .unCheckCalendar(plantNo, date, workType)
    .then((response) => {
      console.log("checkCalendarDB : response", response.data);
        dispatch(mainActions.getTodoListDB());
        dispatch(getCheckedDB(year, month, plantNo));
      }).catch((error) => {
        console.log("checkCalendarDB : response", error.response);
      })
  }
}



// 리듀서
export default handleActions(
  {
    [GET_CHECKED]: (state, action) => produce(state, (draft) => {
      // console.log("GET_CHECKED : CHECKED DATA", action.payload.checkeddata)
      draft.checkedData = action.payload.checkeddata;
    }),
  }, initialState
)



const calendarActions = {
  getCheckedDB,
  postBloomingDB,
  deleteBloomingDB,
  checkCalendarDB,
  unCheckCalendarDB,
}

export { calendarActions };