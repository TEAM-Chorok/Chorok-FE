import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { searchAPI } from "../../Shared/api";


// 액션 
const PLANT_FILTERING = "PLANT_FILTERING";
const GET_PLANTERIORLIST = "GET_PLANTERIORLIST";
const PLANTERIOR_FILTERING = "PLANTERIOR_FILTERING";
const PLANT_DETAIL = "PLANT_DETAIL";
const PLANTERIOR_DETAIL = "PLANTERIOR_DETAIL";

// 액션 생성
const plantFiltering = createAction(PLANT_FILTERING, (searchlist) => ({ searchlist }));
const getPlanterior = createAction(GET_PLANTERIORLIST, (planteriorlist) => ({planteriorlist}));
const planteriorFiltering = createAction(PLANTERIOR_FILTERING, (filteringdata) => ({filteringdata}));
const getPlantDetail = createAction(PLANT_DETAIL, (plantData) => ({plantData}));
const getPlanteriorDetail = createAction(PLANTERIOR_DETAIL, (planteriordetail) => ({ planteriordetail }))

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
      // dispatch(plantFiltering(response));
    }).catch((error) => {
      console.log("plantFilteringDB : error", error.response);
    });
  }
};

const getPlanteriorListDB = () => {
  return function (dispatch, getState, { history }) {
  // searchAPI
  // .getPlanteriorList()
  // .then((response) => {
  //   console.log("getPlanterior : response", response);
  //   dispatch(getPlanterior(response))
  // }).catch((error) => {
    //   console.log("getPlanterior : error", error.response);
    // })
    const response = [
    {
      postId: "1",
      postImgUrl: "https://i.pinimg.com/originals/11/b2/c2/11b2c270f13907f7017f90440801720c.jpg",
      postContent: "첫번째에에 첫첫 첫번째 첫번째에에 첫첫 첫번째 첫번째에에 첫첫 첫번째 ",
      nickname: "작성자예요옹",
    },
    {
      postId: "2",
      postImgUrl: "https://cdn.onebauer.media/one/lifestyle-legacy/4b/88ecc/c88f7/bdf8f/77e19/bd43f/79478/plant_620x349.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill",
      postContent: "두번째 게시글 두두 두번째 게시글 두번째 게시글 두번째 게시글",
      nickname: "식물죠아",
    },
    {
      postId: "3",
      postImgUrl: "https://i.pinimg.com/564x/eb/f6/fa/ebf6faeea4e7615722f44c076951648c.jpg",
      postContent: "이거는 세번째라구잉 세번째 세번째 이거는 세번째라구잉 ",
      nickname: "조아조앙",
    },
    {
      postId: "4",
      postImgUrl: "https://i.pinimg.com/originals/3c/80/22/3c8022ab0bcdc891fa55aff4185b1e34.jpg",
      postContent: "네번째글이에용 네번째글이에용 네번째글이에용 네번째글이에용",
      nickname: "플랜트킹",
    },
    {
      postId: "5",
      postImgUrl: "https://i.pinimg.com/originals/11/b2/c2/11b2c270f13907f7017f90440801720c.jpg",
      postContent: "이건 다섯번째 글입니다 다섯번째~~!~!! 다섯다섯",
      nickname: "작성자예요옹",
    },
    {
      postId: "6",
      postImgUrl: "https://cdn.onebauer.media/one/lifestyle-legacy/4b/88ecc/c88f7/bdf8f/77e19/bd43f/79478/plant_620x349.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill",
      postContent: "여섯번째 글은 이거이거 위치가 신기하게 잡히는구만",
      nickname: "식물죠아",
    },
    {
      postId: "7",
      postImgUrl: "https://i.pinimg.com/564x/eb/f6/fa/ebf6faeea4e7615722f44c076951648c.jpg",
      postContent: "이거는 일곱번째 글이에용",
      nickname: "조아조앙",
    },
    {
      postId: "8",
      postImgUrl: "https://i.pinimg.com/originals/3c/80/22/3c8022ab0bcdc891fa55aff4185b1e34.jpg",
      postContent: "마지막 여덟번째 글입니당당 너무졸리당",
      nickname: "플랜트킹",
    },
  ];
  dispatch(getPlanterior(response));
}
};

const planteriorFilteringDB = (placeCode) => {
  return function (dispatch, getState, { history }) {
    // searchAPI
    // .planteriorFiltering(placeCode)
    // .then((response) => {
    //   console.log("planteriorFiltering : response", response);
    //   dispatch(planteriorFiltering(response))
    // }).catch((error) => {
    //   console.log("planteriorFiltering : error", error.response);
    // })

    const response = [
      {
        postId: 23,
        postImgUrl: "https://i.pinimg.com/originals/3c/80/22/3c8022ab0bcdc891fa55aff4185b1e34.jpg",
        postContent: "플랜테리어 글 내용용용",
        nickname: "김주호"
      },
      {
        postId: 24,
        postImgUrl: "https://i.pinimg.com/564x/eb/f6/fa/ebf6faeea4e7615722f44c076951648c.jpg",
        postContent: "플랜테리어 글 내용용용",
        nickname: "김주호"
      },

    ]
    dispatch(planteriorFiltering(response))
  }
};

// 플랜테리어 상세
const getPlanteriorDetailDB = () => {
  return function (dispatch, getState, { history }) {
    // searchAPI
    //   .getPlanteriorDetail(plantNo)
    //   .then((response) => {
    //     console.log("getPlanteriorDB : response", response);
    //     dispatch(getPlanteriorDetail(response))
    //   }).catch((error) => {
    //     console.log("getPlanteriorDetailDB : error", error.response);
    //   })
    const response = {
      postId: 1,
      nickname: "작성자",
      profileImgUrl: "",
      postTitle: "글제목이필요할까요",
      postContent: "글내용입니다아앙",
      postImgUrl: "https://i.pinimg.com/564x/eb/f6/fa/ebf6faeea4e7615722f44c076951648c.jpg",
      postType: "플랜테리어",
      postPlace: "거실",
      postLike: true,
      postLikeCount: 30,
      postRecentTime: "2022-05-01",
      
      postBookMark: true,
      postCommentCount: 20,
      postComment: [
        {
          commentNo: 1,
          nickName: "닉네임1",
          profileImgUrl: "",
          commentContent: "코멘트1",
          commentRecentTime: "2022-05-04"
        },
        {
          commentNo: 2,
          nickName: "닉네임2",
          profileImgUrl: "",
          commentContent: "코멘트2",
          commentRecentTime: "2022-05-05"
        },
        {
          commentNo: 3,
          nickName: "닉네임3",
          profileImgUrl: "",
          commentContent: "코멘트3",
          commentRecentTime: "2022-05-06"
        },
      ]
    }
    dispatch(getPlanteriorDetail(response))
    
  }
}


// 식물카드
const getPlantDetailDB = (plantNo) => {
  return function (dispatch, getState, { history }) {
  searchAPI
  .getPlantDetail(plantNo)
  .then((response) => {
    console.log("getPlantDetailDB : response", response);
    dispatch(getPlantDetail(response))
  }).catch((error) => {
    console.log("getPlantDetailDB : error", error.response);
  })
  }
};

const addPlantDB = (plantData) => {
  return function (dispatch, getState, { history }) {
  searchAPI
  .addPlant(plantData)
  .then((response) => {
    console.log("addPlantDB : response", response);
  }).catch((error) => {
    console.log("addPlantDB : error", error.response);
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
      // console.log("GET_PLANTERIORLIST : planteriorList", action.payload.planteriorlist);
      draft.planteriorList = action.payload.planteriorlist;
    }),
    [PLANTERIOR_FILTERING]: (state, action) => produce(state, (draft) => {
      console.log("PLANTERIOR_FILTERING : planteriorList", action.payload.filteringdata);
      draft.planteriorList = action.payload.filteringdata;
    }),
    [PLANT_DETAIL]: (state, action) => produce(state, (draft) => {
      console.log("PLANT_DETAIL : plantdata", action.payload.plantdata);
      // draft.plantData = action.payload.plantData;
    }),
    [PLANTERIOR_DETAIL]: (state, action) => produce(state, (draft) => {
      console.log("PLANTERIOR_FILTERING : planteriordetail", action.payload.planteriordetail);
      // draft.planterior = action.payload.planteriordetail;
    }),
  }, initialState
)


const actionCreators = {
  plantFilteringDB,
  getPlanteriorListDB,
  planteriorFilteringDB,
  getPlantDetailDB,
  addPlantDB,
  getPlanteriorDetailDB,
}

export { actionCreators };