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

const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// 액션 생성
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, () => ({}));
const getPostList = createAction(GET_ALL_POST, (postList) => ({ postList }));
const getDetailPost = createAction(GET_POST_DETAIL, (post) => ({ post }));
const postSearching = createAction(POST_SEARCHING, (searchList) => ({ searchList }));

const likePost = createAction(LIKE_POST, (post) => ({ post }));
const bookmarkPost = createAction(BOOKMARK_POST, (post) => ({ post }));

const addComment = createAction(ADD_COMMENT, () => ({ }));
const editComment = createAction(EDIT_COMMENT, () => ({}));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));


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
    const formData = new FormData();
    formData.append("postTitle", postTitle);
    formData.append("postContent", postContent);
    formData.append("postTypeCode", postTypeCode);
    if(postImgUrl !== ""){
      formData.append("postImgUrl", postImgUrl);
    }
    return function (dispatch, getState, { history }){
        postAPI
            .addPost(formData)
            .then((res) => {
                console.log("response:" , res);
                dispatch(addPost(res)); // 데이터 주나 안주나
                history.push(`/community`);
                window.location.reload();
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
          dispatch(getPostList(res.data.content));
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
          dispatch(getPostList(res.data.content));
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
          dispatch(getPostList(res.data.content));
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
  return function (dispatch, getState, { history }) {
    console.log("게시글 detail 조회", _postId);
    postAPI
      .getDetailPost(_postId)
      .then((response) => {
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
    return function(dispatch, getState, { history }) {
        console.log("게시글 삭제요청", postId);
        postAPI
            .deletePost(postId)
            .then((response) => {
                console.log("게시글 삭제 성공");
                dispatch(deletePost());
                window.alert('게시글이 성공적으로 삭제되었습니다.');
                history.push('/community');
                window.location.reload();
            })
            .catch((err)=>{
                console.log("error:" , err);
                window.alert("게시글 삭제를 실패하였습니다.");
            })
    }
}

//커뮤니티 글 수정
const editPostDB = (formData, postId) => {

  return function (dispatch, getState, { history }) {
    postAPI
      .editPost(formData, postId)
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

//검색 보류보류
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


//댓글 달기
const addCommentDB = (postId, commentContent) => {
  const commentdata = {postId, commentContent };
  return function (dispatch, getState, { history }){
    postAPI
      .addComment(commentdata)
      .then((res) => {
        dispatch(getDetailPostDB(postId));
      }).catch((error) => {
        console.log("error: ", error);
        // window.alert('댓글 작성하기를 실패하였습니다.');
      });
  }
}

//댓글 수정 (postId는 필요하지 않은지?)
const editCommentDB = (postId, editdata) => {

    return function (dispatch, getState, { history }){
      postAPI
        .editComment(editdata)
        .then((res) => {
          console.log("response : ", res.data);
          dispatch(getDetailPostDB(postId));
        }).catch((error) => {
          console.log("error: ", error);
          // window.alert('댓글 수정하기를 실패하였습니다.');
        });
    }
}

//댓글 삭제
const deleteCommentDB = (postId, commentId) => {
  
    return function (dispatch, getState, { history }){
      postAPI
        .deleteComment(commentId)
        .then((res) => {
          console.log("response : ", res.data);
          dispatch(getDetailPostDB(postId));
        }).catch((error) => {
          console.log("error: ", error);
          // window.alert('댓글 삭제하기를 실패하였습니다.');
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
    addCommentDB,
    editCommentDB,
    deleteCommentDB,
}

export { actionCreators };