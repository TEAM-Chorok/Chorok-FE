import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { labelAPI } from "../../Shared/api";

//액션
const LABEL = "LABEL";

//액션 creators (payloadCreator부분 : 파라미터로 전달받은 값을 객체 안에 넣는 것)
const labeling = createAction(LABEL, (recommend, loading) => ({recommend, loading}));

//initialState
const initialState = {
    recommend: {
        plantId: "",
        imgUrl: "",
        plantName: "",
    },
    loading: false,

};

//MiddleWare
const labelingDB = (answer1, answer2, answer3, answer4) => {
    return function (dispatch, getState, { history }) {
      console.log("labeling", answer1, answer2, answer3, answer4);
      labelAPI
        .labeling(answer1, answer2, answer3, answer4)
        .then((res) => {
          console.log("추천 식물:", res.data.plantName);
          dispatch(labeling(res.data, false));
          history.push(`/recommendation/${res.data.plantId}`);
        })
        .catch((err) => {
          console.log("레이블링 에러", err);
        });
    };
  };



//Recuer
export default handleActions(
    {
      [LABEL] : (state, action) => produce(state, (draft) => {
        draft.recommend = action.payload.recommend;
        draft.loading = false;
      })
    
    }, initialState
  )

const actionCreators = {
    labelingDB,
  }
  
  export { actionCreators };