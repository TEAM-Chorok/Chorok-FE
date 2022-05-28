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
      labelAPI
        .labeling(answer1, answer2, answer3, answer4)
        .then((res) => {
          dispatch(labeling(res.data, true));
          history.replace(`/recommendation/${res.data.plantId}`);
        })
        .catch((err) => {
          console.log("레이블링 에러", err);
        });
    };
  };

  const labeling_non_loginDB = (answer1, answer2, answer3, answer4) => {
    return function (dispatch, getState, { history }) {
      labelAPI
        .labeling_nonLogin(answer1, answer2, answer3, answer4)
        .then((res) => {
          dispatch(labeling(res.data, true));
          history.replace(`/recommendation/${res.data.plantId}`);
        })
        .catch((err) => {
          console.log("레이블링 에러", err);
        });
    };
  }


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
    labeling_non_loginDB,
  }
  
  export { actionCreators };