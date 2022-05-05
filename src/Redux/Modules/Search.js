import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { searchAPI } from "../../Shared/api";


// 액션 
const PLANT_FILTERING = "PLANT_FILTERING";
const GET_PLANTERIORLIST = "GET_PLANTERIORLIST";
const PLANTERIOR_FILTERING = "PLANTERIOR_FILTERING";

// 액션 생성
const plantFiltering = createAction(PLANT_FILTERING, (searchlist) => ({ searchlist }));
const getPlanterior = createAction(GET_PLANTERIORLIST, (planteriorlist) => ({planteriorlist}));
const planteriorFiltering = createAction(PLANTERIOR_FILTERING, (filteringdata) => ({filteringdata}));

// 초기값
const initialState = {
  list: []
}

// 미들웨어 
// 식물도감 필터링 
const plantFilteringDB = (filterData) => {
  return function (dispatch, getState, { history }) {
    console.log("plantFilteringDB : filterData", filterData)
    searchAPI
    .plantFiltering(filterData)
    .then((response) => {
      console.log("plantFilteringDB : response", response);
      dispatch(plantFiltering(response));
    }).catch((error) => {
      console.log("plantFilteringDB : error", error.response);
    });
  }
};

const getPlanteriorListDB = (placeCode) => {
  return function (dispatch, getState, { history }) {
    console.log("플랜테리어 리스트 가져오기");
  // searchAPI
  // .getPlanteriorList(placeCode)
  // .then((response) => {
  //   console.log("getPlanterior : response", response);
  //   dispatch(getPlanterior(response))
  // }).catch((error) => {
  //   console.log("getPlanterior : error", error.response);
  // })
  }
};

const planteriorFilteringDB = (placeCode) => {
  return function (dispatch, getState, { history }) {
  searchAPI
  .planteriorFiltering(placeCode)
  .then((response) => {
    console.log("planteriorFiltering : response", response);
    dispatch(planteriorFiltering(response))
  }).catch((error) => {
    console.log("planteriorFiltering : error", error.response);
  })
  }
};



// 리듀서
export default handleActions(
  {
    [PLANT_FILTERING]: (state, action) => produce(state, (draft) => {
      console.log("PLANT_FILTERING : searchList", action.payload.searchList);
      // draft.searchList = action.payload.searchList;
    }),
    [GET_PLANTERIORLIST]: (state, action) => produce(state, (draft) => {
      console.log("GET_PLANTERIORLIST : planteriorList", action.payload.planteriorList);
      // draft.planteriorList = action.payload.planteriorList;
    }),
    [PLANTERIOR_FILTERING]: (state, action) => produce(state, (draft) => {
      console.log("PLANTERIOR_FILTERING : planteriorList", action.payload.filteringdata);
      // draft.planteriorList = action.payload.filteringdata;
    }),

  }, initialState
)


const actionCreators = {
plantFilteringDB,
getPlanteriorListDB,
planteriorFilteringDB,
}

export { actionCreators };