import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { plantAPI } from "../../Shared/api";



// 액션 
const PLANT_DETAIL = "PLANT_DETAIL";
const PLANT_PLACE = "PLANT_PLACE";

// 액션 생성
const getPlantDetail = createAction(PLANT_DETAIL, (plantData) => ({plantData}));
const getPlantPlace = createAction(PLANT_PLACE, (placelist) => ({placelist}));

// 초기값
const initialState = {
  list: []
}

// 미들웨어 
// 식물카드
const getPlantDetailDB = (plantNo) => {
  return function (dispatch, getState, { history }) {
  plantAPI
  .getPlantDetail(plantNo)
  .then((response) => {
    // console.log("getPlantDetailDB : response", response);
    dispatch(getPlantDetail(response.data))
  }).catch((error) => {
    console.log("getPlantDetailDB : error", error.response);
  })
  }
};

// 식물 추가하기
const addPlantDB = (plantData) => {
  return function (dispatch, getState, { history }) {
  plantAPI
  .addPlant(plantData)
  .then((response) => {
    // console.log("addPlantDB : response", response);
  }).catch((error) => {
    console.log("addPlantDB : error", error.response);
  })
  }
};

// 식물 위치 목록
const getPlantPlaceDB = () => {
  return function (dispatch, getState, { history }) {
  plantAPI
  .getPlantPlace()
  .then((response) => {
    console.log("getPlantPlaceDB : response", response.data);
    dispatch(getPlantPlace(response.data));
  }).catch((error) => {
    console.log("getPlantPlaceDB : error", error.response);
  })
  }
};



// 리듀서
export default handleActions(
  {
    [PLANT_DETAIL]: (state, action) => produce(state, (draft) => {
      // console.log("PLANT_DETAIL : plantdata", action.payload.plantdata);
      draft.plantData = action.payload.plantData;
    }),
    [PLANT_PLACE]: (state, action) => produce(state, (draft) => {
      draft.place = action.payload.placelist;
    }),
  }, initialState
)



const actionCreators = {
  getPlantDetailDB,
  addPlantDB,
  getPlantPlaceDB,
}

export { actionCreators };