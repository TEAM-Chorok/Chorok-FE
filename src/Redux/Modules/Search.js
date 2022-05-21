import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { searchAPI } from "../../Shared/api";


// 액션 
const PLANT_FILTERING = "PLANT_FILTERING";
const GET_PLANTERIORLIST = "GET_PLANTERIORLIST";
const PLANTERIOR_FILTERING = "PLANTERIOR_FILTERING";
const PLANTERIOR_DETAIL = "PLANTERIOR_DETAIL";
const GET_RECOMMEND = "GET_RECOMMEND";
const KEYWORD_SEARCHING = "KEYWORD_SEARCHING";
const KEYWORD_SEARCHING_PHOTO = "KEYWORD_SEARCHING_PHOTO";
const KEYWORD_SEARCHING_PHOTO_PLACE = "KEYWORD_SEARCHING_PHOTO_PLACE";
const KEYWORD_SEARCHING_PLANT = "KEYWORD_SEARCHING_PLANT";
const GET_PLANT_DICT = "GET_PLANT_DICT";


// 액션 생성
const plantFiltering = createAction(PLANT_FILTERING, (searchlist) => ({ searchlist }));
const getPlanterior = createAction(GET_PLANTERIORLIST, (planteriorlist) => ({planteriorlist}));
const planteriorFiltering = createAction(PLANTERIOR_FILTERING, (filteringdata) => ({filteringdata}));
const getPlanteriorDetail = createAction(PLANTERIOR_DETAIL, (planteriordetail) => ({ planteriordetail }));
const getRecommend = createAction(GET_RECOMMEND, (recommendlist) => ({ recommendlist }));
const keywordSearching = createAction(KEYWORD_SEARCHING, (searchingdata) => ({ searchingdata }))
const keywordSearchingPhoto = createAction(KEYWORD_SEARCHING_PHOTO, (searchingdata) => ({ searchingdata }))
const keywordSearchingPhotoPlace = createAction(KEYWORD_SEARCHING_PHOTO_PLACE, (searchingdata) => ({ searchingdata }))
const keywordSearchingPlant = createAction(KEYWORD_SEARCHING_PLANT, (searchingdata) => ({ searchingdata }))
const getPlantDict = createAction(GET_PLANT_DICT, (plantlist) => ({plantlist}));


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
      // console.log("plantFilteringDB : response", response.data.plantList);
      dispatch(plantFiltering(response.data.plantList));
    }).catch((error) => {
      console.log("plantFilteringDB : error", error.response);
    });
  }
};

// 플랜테리어 전체 목록
const getPlanteriorListDB = () => {
  return function (dispatch, getState, { history }) {
  searchAPI
  .getPlanteriorList()
  .then((response) => {
    // console.log("getPlanterior : response", response.data);
    dispatch(getPlanterior(response.data))
  }).catch((error) => {
      console.log("getPlanterior : error", error.response);
    })
}
};

// 플랜테리어 필터링 목록
const planteriorFilteringDB = (placeCode) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .planteriorFiltering(placeCode)
    .then((response) => {
      // console.log("planteriorFiltering : response", response.data);
      dispatch(planteriorFiltering(response.data))
    }).catch((error) => {
      console.log("planteriorFiltering : error", error.response);
    })
  }
};

// 플랜테리어 게시글 작성
const writePlanteriorPostDB = (postdata) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .writePlanteriorPost(postdata)
    .then((response) => {
      console.log("writePlanteriorPostDB : response", response);
      history.push(`/planterior/post/${response.data.postId}`);
      window.location.reload();
    }).catch((error) => {
      console.log("writePlanteriorPostDB : error", error.response);
    })
  }
}

// 플랜테리어 게시글 수정
const editPlanteriorPostDB = (postdata, postId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .editPlanteriorPost(postdata, postId)
    .then((response) => {
      console.log("editPlanteriorPostDB : response", response);
    }).catch((error) => {
      console.log("editPlanteriorPostDB : error", error.response);
    })
  }
}

// 플랜테리어 게시글 삭제
const deletePlanteriorPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .deletePlanteriorPost(postId)
    .then((response) => {
      console.log("deletePlanteriorPostDB : response", response);
    }).catch((error) => {
      console.log("deletePlanteriorPostDB : error", error.response);
    })
  }
}

// 플랜테리어 게시글 좋아요
const likePlanteriorPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .likePlanteriorPost(postId)
    .then((response) => {
      console.log("likePlanteriorPostDB : response", response);
      dispatch(getPlanteriorDetailDB(postId));
    }).catch((error) => {
      console.log("likePlanteriorPostDB : error", error.response);
    })
  }
}

// 플랜테리어 게시글 북마크
const bookMarkPlanteriorPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .bookMarkPlanteriorPost(postId)
    .then((response) => {
      console.log("bookMarkPlanteriorPostDB : response", response);
      dispatch(getPlanteriorDetailDB(postId));
    }).catch((error) => {
      console.log("bookMarkPlanteriorPostDB : error", error.response);
    })
  }
}

// 플랜테리어 댓글 작성
const writePlanteriorCommentDB = (commentdata) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .writePlanteriorComment(commentdata)
    .then((response) => {
      console.log("writePlanteriorCommentDB : response", response);
      dispatch(getPlanteriorDetailDB(commentdata.postId));
    }).catch((error) => {
      console.log("writePlanteriorCommentDB : error", error.response);
    })
  }
}

// 플랜테리어 댓글 수정
const editPlanteriorCommentDB = (commentdata) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .editPlanteriorComment(commentdata)
    .then((response) => {
      console.log("editPlanteriorCommentDB : response", response);
    }).catch((error) => {
      console.log("editPlanteriorCommentDB : error", error.response);
    })
  }
}

// 플랜테리어 댓글 삭제
const deletePlanteriorCommentDB = (commentId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .deletePlanteriorComment(commentId)
    .then((response) => {
      console.log("deletePlanteriorCommentDB : response", response);
    }).catch((error) => {
      console.log("deletePlanteriorCommentDB : error", error.response);
    })
  }
}


// 플랜테리어 게시글 상세조회
const getPlanteriorDetailDB = (postId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
      .getPlanteriorDetail(postId)
      .then((response) => {
        // console.log("getPlanteriorDB : response", response.data);
        dispatch(getPlanteriorDetail(response.data));
      }).catch((error) => {
        console.log("getPlanteriorDetailDB : error", error.response);
      })
  }
}

// 탐색탭 키워드 검색 - 전체탭
const keywordSearchingDB = (value) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .keywordSearching(value)
    .then((response) => {
      // console.log("keywordSearchingDB : searching", response.data);
      dispatch(keywordSearching(response.data))
    }).catch((error) => {
      console.log("keywordSearchingDB : error", error.response);
    })
  }
}

// 탐색탭 키워드 검색 - 사진(플랜테리어)탭
const keywordSearchingPhotoDB = (value) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .keywordSearchingPhoto(value)
    .then((response) => {
      // console.log("keywordSearchingPhotoDB : searching", response.data);
      dispatch(keywordSearchingPhoto(response.data))
    }).catch((error) => {
      console.log("keywordSearchingPhotoDB : error", error.response);
    })
  }
}

// 탐색탭 키워드 검색 - 사진(플랜테리어)탭 장소 필터링
const keywordSearchingPhotoPlaceDB = (value) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .keywordSearchingPhotoPlace(value)
    .then((response) => {
      // console.log("keywordSearchingPhotoPlaceDB : searching", response.data);
      dispatch(keywordSearchingPhotoPlace(response.data))
    }).catch((error) => {
      console.log("keywordSearchingPhotoPlaceDB : error", error.response);
    })
  }
}

// 탐색탭 키워드 검색 - 식물도감
const keywordSearchingPlantDB = (value) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .keywordSearchingPlant(value)
    .then((response) => {
      // console.log("keywordSearchingPlantDB : searching", response.data.plantList);
      dispatch(keywordSearchingPlant(response.data.plantList))
    }).catch((error) => {
      console.log("keywordSearchingPlantDB : error", error.response);
    })
  }
}

// 추천식물 조회
const getRecommendDB = () => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .getRecommend()
    .then((response) => {
      // console.log("getRecommendDB : recommend", response);
      dispatch(getRecommend(response.data));
    }).catch((error) => {
      console.log("getRecommendDB : error", error.response);
    })
  }
}

// 식물도감 전체조회
const getPlantDictDB = () => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .getPlantDict()
    .then((response) => {
      // console.log("getPlantDictDB : response", response.data);
      dispatch(getPlantDict(response.data.plantList))
    }).catch((error) => {
      console.log("getPlantDictDB : error", error.response);
    })
  }
}


// 리듀서
export default handleActions(
  {
    [PLANT_FILTERING]: (state, action) => produce(state, (draft) => {
      // console.log("PLANT_FILTERING : searchList", action.payload.searchList);
      draft.plantDictList = action.payload.searchlist;
    }),
    [GET_PLANTERIORLIST]: (state, action) => produce(state, (draft) => {
      // console.log("GET_PLANTERIORLIST : planteriorList", action.payload.planteriorlist);
      draft.planteriorList = action.payload.planteriorlist;
    }),
    [PLANTERIOR_FILTERING]: (state, action) => produce(state, (draft) => {
      // console.log("PLANTERIOR_FILTERING : planteriorList", action.payload.filteringdata);
      draft.planteriorList = action.payload.filteringdata;
    }),
    [PLANTERIOR_DETAIL]: (state, action) => produce(state, (draft) => {
      // console.log("PLANTERIOR_DETAIL : planteriordetail", action.payload.planteriordetail);
      draft.planterior = action.payload.planteriordetail;
    }),
    [GET_RECOMMEND]: (state, action) => produce(state, (draft) => {
      // console.log("GET_RECOMMEND : recommendList", action.payload.recommendlist);
      draft.recommendlist = action.payload.recommendlist;
    }),
    [KEYWORD_SEARCHING]: (state, action) => produce(state, (draft) => {
      // console.log("KEYWORD_SEARCHING : searchingdata", action.payload.searchingdata);
      draft.result = action.payload.searchingdata;
    }),
    [KEYWORD_SEARCHING_PHOTO]: (state, action) => produce(state, (draft) => {
      console.log("KEYWORD_SEARCHING_Photo : searchingdata", action.payload.searchingdata);
      draft.resultPhoto = action.payload.searchingdata;
    }),
    [KEYWORD_SEARCHING_PLANT]: (state, action) => produce(state, (draft) => {
      console.log("KEYWORD_SEARCHING_Plant : searchingdata", action.payload.searchingdata);
      draft.resultPlant = action.payload.searchingdata;
    }),
    [GET_PLANT_DICT]: (state, action) => produce(state, (draft) => {
      // console.log("GET_PLANT_DICT : plantlist", action.payload.plantlist);
      draft.plantDictList = action.payload.plantlist;
    }),
  }, initialState
)


const actionCreators = {
  plantFilteringDB,
  getPlanteriorListDB,
  planteriorFilteringDB,
  getPlanteriorDetailDB,
  getRecommendDB,
  keywordSearchingDB,
  keywordSearchingPhotoDB,
  keywordSearchingPhotoPlaceDB,
  keywordSearchingPlantDB,
  getPlantDictDB,
  writePlanteriorPostDB,
  editPlanteriorPostDB,
  deletePlanteriorPostDB,
  writePlanteriorCommentDB,
  editPlanteriorCommentDB,
  deletePlanteriorCommentDB,
  likePlanteriorPostDB,
  bookMarkPlanteriorPostDB,
  }

export { actionCreators };