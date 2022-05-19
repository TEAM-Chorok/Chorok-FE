import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { searchAPI, postAPI, myPageAPI } from "../../Shared/api";


// 액션 
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const GET_ALL_POST = "GET_ALL_POST";
const GET_POST_DETAIL = "GET_POST_DETAIL";
const POST_SEARCHING = "POST_SEARCHING";

const LIKE_POST = "LIKE_POST";
const BOOKMARK_POST = "BOOKMARK_POST";

const GET_MY_PHOTO_LIST = "GET_MY_PHOTO_LIST";
const GET_SCRAP_PHOTO_LIST = "GET_SCRAP_PHOTO_LIST";
const GET_SCRAP_PLANT_LIST = "GET_SCRAP_PLANT_LIST";

// 액션 생성
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, () => ({}));
const getPostList = createAction(GET_ALL_POST, (postList) => ({ postList }));
const getDetailPost = createAction(GET_POST_DETAIL, (post) => ({ post }));
const postSearching = createAction(POST_SEARCHING, (searchList) => ({ searchList }));

const likePost = createAction(LIKE_POST, (post) => ({ post }));
const bookmarkPost = createAction(BOOKMARK_POST, (post) => ({ post }));

const getPhotoList = createAction(GET_MY_PHOTO_LIST, (photoList) => ({ photoList }));
const getScrapPhotoList = createAction(GET_SCRAP_PHOTO_LIST, (scrapPhotoList) => ({ scrapPhotoList }));
const getScrapPlantList = createAction(GET_SCRAP_PLANT_LIST, (scrapPlant) => ({ scrapPlant }))

// initial State
const initialState = {
  list: [],
  post: {
    postId: 0,
    nickname: "",
    profileImgUrl: null,
    postTitle: "",
    postContent: "",
    postImgUrl: "",
    postType: "",
    postRecentTime: "",
    postLike: false,
    postLikeCount: 0,
    postBookMark: false,
    commentList: [
      {
        commentId: 0,
        nickname: "",
        profileImgUrl: null,
        commentContent: "",
        commentRecentTime: ""
      }
    ],
    plantPlace: null
  },
  is_loading: false,
}

// 미들웨어 
// 커뮤니티 글 작성
const addPostDB = (postTitle, postImgUrl, postContent, postTypeCode) => {
  console.log("dd")
  const formData = new FormData();
  formData.append("postTitle", postTitle);
  formData.append("postImgUrl", postImgUrl);
  formData.append("postContent", postContent);
  formData.append("postTypeCode", postTypeCode);
  return function (dispatch, getState, { history }) {
    postAPI
      .addPost(formData)
      .then((res) => {
        console.log("response:", res);
        dispatch(addPost(res)); // 데이터 주나 안주나
        history.push(`/community/${res.data.post.postId}`);
      }).catch((err) => {
        console.log("error: ", err);
        window.alert('글 작성하기에 실패하였습니다.');
        return;
      })
  }

}

//커뮤니티 글 불러오기(로그인)
const getPostListDB_login = (category) => {
  return function (dispatch, getState, { history }) {
    console.log(category);
    if (category === "all") {
      postAPI
        .getAllPost_login()
        .then((res) => {
          console.log(res.data);
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
          window.alert('게시글을 불러오지 못하였습니다.');
        })
    }
    if (category !== "all") {
      postAPI
        .getFilteredPost_login(category)
        .then((res) => {
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
          window.alert('게시글을 불러오지 못하였습니다.');
        })
    }
  }
}
//커뮤니티 글 불러오기(non-로그인)
const getPostListDB_non_login = (category) => {
  return function (dispatch, getState, { history }) {
    if (category === "all") {
      postAPI
        .getAllPost_nonLogin()
        .then((res) => {
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
          window.alert('게시글을 불러오지 못하였습니다.');
        })
    }
    if (category !== "all") {
      postAPI
        .getFilteredPost_nonLogin(category)
        .then((res) => {
          dispatch(getPostList(res.data));
        })
        .catch((error) => {
          console.log('error: ', error);
          window.alert('게시글을 불러오지 못하였습니다.');
        })
    }
  }
}

//게시글 디테일 조회
const getDetailPostDB = (postId) => {
  const _postId = parseInt(postId);
  console.log(_postId);
  return function (dispatch, getState, { history }) {
    console.log("게시글 detail 조회", _postId);
    postAPI
      .getDetailPost(_postId)
      .then((response) => {
        console.log(response);
        dispatch(getDetailPost(response.data));
      })
      .catch((err) => {
        console.log("error:", err);
        // window.alert("게시글 조회를 실패하였습니다.");
        return;
      })
  }
}

//커뮤니티 글 삭제
const deletePostDB = (postId) => {
  const _postId = parseInt(postId);
  return function (dispatch, getState, { history }) {
    console.log("게시글 삭제요청", _postId);
    postAPI
      .deletePost(_postId)
      .then((response) => {
        console.log("게시글 삭제 성공");
        dispatch(deletePost());
        window.alert('게시글이 성공적으로 삭제되었습니다.');
        history.push('/community');
      })
      .catch((err) => {
        console.log("error:", err);
        window.alert("게시글 삭제를 실패하였습니다.");
      })
  }
}

//커뮤니티 글 수정
const editPostDB = (postId, category, postTitle, postContent, postImgUrl) => {
  const _postId = parseInt(postId);
  const formData = new FormData();
  formData.append("postTitle", postTitle);
  formData.append("postImgUrl", postImgUrl);
  formData.append("postContent", postContent);
  formData.append("postTypeCode", category);
  return function (dispatch, getState, { history }) {
    console.log("게시글 수정 요청");
    postAPI
      .editPost(_postId, formData)
      .then((response) => {
        console.log("게시글 수정 성공");
        window.alert('게시글이 성공적으로 수정되었습니다.');
        dispatch(getDetailPost(response.data.post));
        history.push(`/community/${response.data.post.postId}`);
      })
      .catch((err) => {
        console.log("error:", err);
        window.alert("게시글 수정을 실패하였습니다.");
      })
  }
}
// 좋아요 표시하기
const likePostDB = (category, postId) => {
  const _postId = parseInt(postId);
  console.log(_postId);
  console.log(postId);
  return function (dispatch, getState, { history }) {
    postAPI
      .likePost(postId)
      .then((res) => {
        if (res.data.result === "true") {
          console.log('좋아요 성공');
        } else if (res.data.result === "false") {
          console.log('좋아요 취소');
        }
        dispatch(getPostListDB_login(category));
      })
      .catch((err) => {
        console.log("error:", err);
        window.alert("게시글 좋아요에 실패하였습니다.");
      })
  }
}
// detail페이지에서 좋아요 표시하기
const likeDetailPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    postAPI
      .likePost(postId)
      .then((res) => {
        if (res.data.result === "true") {
          console.log('좋아요 성공');
        } else if (res.data.result === "false") {
          console.log('좋아요 취소');
        }
        dispatch(getDetailPost(postId));
      })
      .catch((err) => {
        console.log("error:", err);
        window.alert("게시글 좋아요에 실패하였습니다.");
      })
  }
}

// 북마크 표시하기
const bookmarkPostDB = (category, postId) => {
  return function (dispatch, getState, { history }) {
    postAPI
      .bookmarkPost(postId)
      .then((res) => {
        if (res.data.result === "true") {
          console.log(res.data.result);
          window.alert("북마크로 등륵되었습니다.");
        } else {
          window.alert("북마크를 취소하였습니다.");
        }
        dispatch(getPostListDB_login(category));
      })
      .catch((err) => {
        console.log("error:", err);
        window.alert("게시글 북마크 등록에 실패하였습니다.");
      })
  }
}
// detail페이지에서 북마크 표시하기
const bookmarkDetailPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    postAPI
      .bookmarkPost(postId)
      .then((res) => {
        if (res.data.result === "true") {
          console.log(res.data.result);
          window.alert("북마크로 등륵되었습니다.");
        } else {
          window.alert("북마크를 취소하였습니다.");
        }
        dispatch(getDetailPost(postId));
      })
      .catch((err) => {
        console.log("error:", err);
        window.alert("게시글 좋아요에 실패하였습니다.");
      })
  }
}

// 커뮤니티 검색어 검색 (+ 필터링도 가능하게 해야됨)
const postSearchingDB = (postTypeCode, keyword) => {
  if (postTypeCode === "all") {
    postTypeCode = ""
  }
  console.log(postTypeCode, keyword);
  return function (dispatch, getState, { history }) {
    searchAPI
      .postSearching(postTypeCode, keyword)
      .then((res) => {
        console.log("response : ", res.data);
        dispatch(postSearching(res.data));
        dispatch(getPostListDB_login(res.data));
      }).catch((error) => {
        console.log("error: ", error);
        // window.alert('글 검색하기에 실패하였습니다.');
      });
  }
};

//내 사진 리스트
const getMyPhotoListDB = () => {
  return function (dispatch, getState, { history }) {
    console.log("getMyPhotoListDB ");
    myPageAPI
      .getMyPhotoList()
      .then((res) => {
        console.log("response : ", res);
        dispatch(getPhotoList(res.data));
      }).catch((error) => {
        console.log("error: ", error);
        // window.alert('내 사진 불러오기에 실패하였습니다.');
      });
  }
}

//스크랩한 사진 리스트
const getScrapPhotoListDB = () => {
  return function (dispatch, getState, { history }) {
    console.log("getScrapPhotoListDB ");
    myPageAPI
      .getScrapPhotoList()
      .then((res) => {
        console.log("response : ", res);
        dispatch(getScrapPhotoList(res.data));
      }).catch((error) => {
        console.log("error: ", error);
        // window.alert('스크랩한 사진 불러오기에 실패하였습니다.');
      });
  }
}
//스크랩한 사진 리스트
const getScrapPlantListDB = () => {
  return function (dispatch, getState, { history }) {
    console.log("getScrapPlantListDB ");
    myPageAPI
      .getScrapPlantList()
      .then((res) => {
        console.log("response : ", res);
        dispatch(getScrapPlantList(res.data));
      }).catch((error) => {
        console.log("error: ", error);
        // window.alert('스크랩한 식물 불러오기에 실패하였습니다.');
      });
  }
}

// Reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.post = action.payload.post;
    }),
    [GET_ALL_POST]: (state, action) => produce(state, (draft) => {
      draft.postList = action.payload.postList;
      draft.is_loading = true;
    }),
    [GET_POST_DETAIL]: (state, action) => produce(state, (draft) => {
      draft.post = action.payload.post;
    }),
    [POST_SEARCHING]: (state, action) => produce(state, (draft) => {
      draft.searchList = action.payload.searchList;
    }),
    [GET_MY_PHOTO_LIST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.list;
      draft.is_loading = true;
    }),
    [GET_SCRAP_PHOTO_LIST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.list;
      draft.is_loading = true;
    }),
    [GET_SCRAP_PLANT_LIST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.list;
      draft.is_loading = true;
    }),
  }, initialState
)


const actionCreators = {
  postSearchingDB,
  addPostDB,
  getPostListDB_login,
  getPostListDB_non_login,
  getDetailPostDB,
  editPostDB,
  deletePostDB,
  likePostDB,
  likeDetailPostDB,
  bookmarkPostDB,
  bookmarkDetailPostDB,
  getMyPhotoListDB,
  getScrapPhotoListDB,
  getScrapPlantListDB,
}

export { actionCreators };