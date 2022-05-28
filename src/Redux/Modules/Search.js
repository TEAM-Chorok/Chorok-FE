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
const plantFiltering = createAction(PLANT_FILTERING, (searchlist, filterData) => ({ searchlist, filterData }));
const getPlanterior = createAction(GET_PLANTERIORLIST, (planteriorlist) => ({planteriorlist}));
const planteriorFiltering = createAction(PLANTERIOR_FILTERING, (filteringdata) => ({filteringdata}));
const getPlanteriorDetail = createAction(PLANTERIOR_DETAIL, (planteriordetail) => ({ planteriordetail }));
const getRecommend = createAction(GET_RECOMMEND, (recommendlist) => ({ recommendlist }));
const keywordSearching = createAction(KEYWORD_SEARCHING, (searchingdata) => ({ searchingdata }))
const keywordSearchingPhoto = createAction(KEYWORD_SEARCHING_PHOTO, (searchingdata, value) => ({ searchingdata, value }))
const keywordSearchingPhotoPlace = createAction(KEYWORD_SEARCHING_PHOTO_PLACE, (searchingdata) => ({ searchingdata }))
const keywordSearchingPlant = createAction(KEYWORD_SEARCHING_PLANT, (searchingdata, value) => ({ searchingdata, value }))
const getPlantDict = createAction(GET_PLANT_DICT, (plantlist) => ({plantlist}));


// 초기값
const initialState = {
  filterData:{
    plantTypeCode: '',
    plantPlaceCode: '',
    plantLevelCode: '',
    plantGrowthShapeCode: '',
  },
  value: '',

}

// 미들웨어 
// 식물도감 필터링 
const plantFilteringDB = (filterData, page) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .plantFiltering(filterData, page)
    .then((response) => {
      dispatch(plantFiltering(response.data, filterData));
    }).catch((error) => {
      console.log("plantFilteringDB : error", error.response);
    });
  }
};


// 식물도감 전체조회
const getPlantDictDB = (page) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .getPlantDict(page)
    .then((response) => {
      dispatch(getPlantDict(response.data))
    }).catch((error) => {
      console.log("getPlantDictDB : error", error.response);
    })
  }
}


// 플랜테리어 전체 목록
const getPlanteriorListDB = (page) => {
  return function (dispatch, getState, { history }) {
  searchAPI
  .getPlanteriorList(page)
  .then((response) => {
    dispatch(getPlanterior(response.data))
  }).catch((error) => {
      console.log("getPlanterior : error", error.response);
    })
}
};

// 플랜테리어 필터링 목록
const planteriorFilteringDB = (placeCode, page) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .planteriorFiltering(placeCode, page)
    .then((response) => {
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
      history.replace(`/planterior/post/${response.data.postId}`);
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
      history.replace(`/planterior/post/${response.data.postId}`);
      dispatch(getPlanteriorDetailDB(postId));
      window.location.reload()
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
      history.replace('/search');
      window.location.reload();
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
      dispatch(getPlanteriorDetailDB(commentdata.postId));
    }).catch((error) => {
      console.log("writePlanteriorCommentDB : error", error.response);
    })
  }
}

// 플랜테리어 댓글 수정
const editPlanteriorCommentDB = (editdata, postId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .editPlanteriorComment(editdata)
    .then((response) => {
      dispatch(getPlanteriorDetailDB(postId));
    }).catch((error) => {
      console.log("editPlanteriorCommentDB : error", error.response);
    })
  }
}

// 플랜테리어 댓글 삭제
const deletePlanteriorCommentDB = (commentId, postId) => {
  return function (dispatch, getState, { history }) {
    searchAPI
    .deletePlanteriorComment(commentId)
    .then((response) => {
      dispatch(getPlanteriorDetailDB(postId));
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
      dispatch(keywordSearching(response.data))
    }).catch((error) => {
      console.log("keywordSearchingDB : error", error.response);
    })
  }
}

// 탐색탭 키워드 검색 - 사진(플랜테리어)탭
const keywordSearchingPhotoDB = (value, page) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .keywordSearchingPhoto(value, page)
    .then((response) => {
      dispatch(keywordSearchingPhoto(response.data, value));
    }).catch((error) => {
      console.log("keywordSearchingPhotoDB : error", error.response);
    })
  }
}

// 탐색탭 키워드 검색 - 사진(플랜테리어)탭 장소 필터링
const keywordSearchingPhotoPlaceDB = (value, page) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .keywordSearchingPhotoPlace(value, page)
    .then((response) => {
      dispatch(keywordSearchingPhotoPlace(response.data.content))
    }).catch((error) => {
      console.log("keywordSearchingPhotoPlaceDB : error", error.response);
    })
  }
}

// 탐색탭 키워드 검색 - 식물도감
const keywordSearchingPlantDB = (value, page) => {
  return function (dispatch, getState, {history}) {
    searchAPI
    .keywordSearchingPlant(value, page)
    .then((response) => {
      dispatch(keywordSearchingPlant(response.data, value));
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
      dispatch(getRecommend(response.data));
    }).catch((error) => {
      console.log("getRecommendDB : error", error.response);
    })
  }
}


// 리듀서
export default handleActions(
  {
    [PLANT_FILTERING]: (state, action) => produce(state, (draft) => {
      if (action.payload.searchlist.page > 0) {
        draft.plantDictList.content.push(...action.payload.searchlist.content);
      } else {
        draft.plantDictList = action.payload.searchlist;
      }
      draft.filterData=action.payload.filterData;
      draft.plantDictList.page = action.payload.searchlist.page;
    }),
    [GET_PLANTERIORLIST]: (state, action) => produce(state, (draft) => {
      if(action.payload.planteriorlist.page > 0) {
        draft.planteriorList.content.push(...action.payload.planteriorlist.content);
      } else {
        draft.planteriorList = action.payload.planteriorlist;
      }
      draft.planteriorList.page = action.payload.planteriorlist.page;
    }),
    [PLANTERIOR_FILTERING]: (state, action) => produce(state, (draft) => {
      if (action.payload.filteringdata.page > 0) {
        draft.planteriorList.content.push(...action.payload.filteringdata.content);
      } else {
        draft.planteriorList = action.payload.filteringdata;
      }
      draft.planteriorList.page = action.payload.filteringdata.page;
    }),
    [PLANTERIOR_DETAIL]: (state, action) => produce(state, (draft) => {
      draft.planterior = action.payload.planteriordetail;
    }),
    [GET_RECOMMEND]: (state, action) => produce(state, (draft) => {
      draft.recommendlist = action.payload.recommendlist;
    }),
    [KEYWORD_SEARCHING]: (state, action) => produce(state, (draft) => {
      draft.result = action.payload.searchingdata;
    }),
    [KEYWORD_SEARCHING_PHOTO]: (state, action) => produce(state, (draft) => {
      if (action.payload.searchingdata.page > 0) {
        draft.resultPhoto.content.push(...action.payload.searchingdata.content);
      } else {
        draft.resultPhoto = action.payload.searchingdata;
      }
      draft.value = action.payload.value;
      draft.resultPhoto.page = action.payload.searchingdata.page;
    }),
    [KEYWORD_SEARCHING_PLANT]: (state, action) => produce(state, (draft) => {
      if (action.payload.searchingdata.page > 0) {
        draft.resultPlant.content.push(...action.payload.searchingdata.content);
      } else {
        draft.resultPlant = action.payload.searchingdata;
      }
      draft.value = action.payload.value;
      draft.resultPlant.page = action.payload.searchingdata.page;
    }),
    [GET_PLANT_DICT]: (state, action) => produce(state, (draft) => {
      if (action.payload.plantlist.page > 0) {
        draft.plantDictList.content.push(...action.payload.plantlist.content);
      } else {
        draft.plantDictList = action.payload.plantlist;
      }
      draft.plantDictList.page = action.payload.plantlist.page;
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