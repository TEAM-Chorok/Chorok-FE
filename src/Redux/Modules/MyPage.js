import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { myPageAPI, postAPI } from "../../Shared/api";

//actions
const GET_MY_PLANT_LIST = 'GET_MY_PLANT_LIST';
const GET_MY_PLANT_DETAIL = 'GET_MY_PLANT_DETAIL';
const INITIAL_MY_PLANT_DETAIL = 'INITIAL_MY_PLANT_DETAIL';
const DELETE_MY_PLANT = 'DELETE_MY_PLANT';
const EDIT_MY_PLANT = 'EDIT_MY_PLANT';

const GET_MY_PHOTO_SCRAP_PHOTO_LIST = 'GET_MY_PHOTO_SCRAP_PHOTO_LIST';
const GET_MY_PHOTO_LIST = "GET_MY_PHOTO_LIST";
const GET_SCRAP_PHOTO_LIST = "GET_SCRAP_PHOTO_LIST";
const GET_SCRAP_PLANT_LIST = "GET_SCRAP_PLANT_LIST";
const GET_MY_POST_LIST = "GET_MY_POST_LIST";
const GET_SCRAP_SIX_POST_LIST = "GET_SCRAP_SIX_POST_LIST";
const GET_SCRAP_POST_LIST = "GET_SCRAP_POST_LIST";

//action creators
const getMyPlantList = createAction(GET_MY_PLANT_LIST, (myPlantCount, plantList) => ({myPlantCount, plantList}))
const getMyPlantDetail = createAction(GET_MY_PLANT_DETAIL, (myPlant) => ({myPlant}));
const initialMyPlantDetail = createAction(INITIAL_MY_PLANT_DETAIL, () => ({}));
const deleteMyPlant = createAction(DELETE_MY_PLANT, () => ({}));
const editMyPlant = createAction(EDIT_MY_PLANT, () => ({}));

const getMyPhotoScrapPhotoList = createAction(GET_MY_PHOTO_SCRAP_PHOTO_LIST, (list) => ({list}));
const getPhotoList = createAction(GET_MY_PHOTO_LIST, (photoList) => ({photoList}));
const getScrapPhotoList = createAction(GET_SCRAP_PHOTO_LIST, (scrapPhotoList) => ({scrapPhotoList}));
const getScrapPlantList = createAction(GET_SCRAP_PLANT_LIST, (scrapPlant) => ({scrapPlant}));
const getMyPostList = createAction(GET_MY_POST_LIST, (postList) => ({postList}));
const getScrapSixPlantList = createAction(GET_SCRAP_SIX_POST_LIST, (scrapPlantCount, scrapPlantList) => ({scrapPlantCount, scrapPlantList}));
const getScrapPostList = createAction(GET_SCRAP_POST_LIST, (scrapPostList) => ({scrapPostList}));

//initial state
const initialState = {
    list: []
}

//middleWare 

//내 식물 불러오기 (6개)
const getMySixPlantsDB = () => {
    return function ( dispatch, getState, {history}) {
        myPageAPI
            .getMyPlantList()
            .then((res) => {
                dispatch(getMyPlantList(res.data.myPlantCount, res.data.mypageMyplantSixDtos));
            })
            .catch((err) => {
                console.log("error: ", err);
                window.alert('내 식물 리스트를 불러오는 데에 실패하였습니다.');
                return;
            })
    }
}
// 내 식물 상세정보
const getMyPlantDetailDB = (myPlantNo) => {
    return function (dispatch, getState, {history}){
        myPageAPI
            .getMyDetailPlant(myPlantNo)
            .then((res) => {
                dispatch(getMyPlantDetail(res.data));
            })
            .catch((err) => {
                console.log("error:" , err);
                window.alert('내 식물 상세 정보를 불러오는 데에 실패하였습니다. ')
                return;
            })
    }
}
//내 식물 삭제하기
const deleteMyPlantDB = (myPlantNo) => {
    console.log(myPlantNo);
    return function (dispatch, getState, {history}){
        myPageAPI
            .deleteMyPlant(myPlantNo)
            .then((res) => {
                console.log(res.data);
                history.push('/myplants');
                window.location.reload();
            })
            .catch((err) => {
                console.log("error:" , err);
                window.alert('내 식물 삭제하는 데에 실패하였습니다. ')
                return;
            })
    }
}
//나의 식물 수정 on process...
const editMyPlantDB = (myPlantId, myPlantName, myPlantPlaceCode, myPlantImgUrl, originalUrl) => {
    const formData = new FormData();
    if(myPlantImgUrl === ""){
        formData.append("myPlantName", myPlantName);
        formData.append("myPlantPlaceCode", myPlantPlaceCode);
        formData.append("originalUrl", originalUrl);
    }else{
        formData.append("myPlantName", myPlantName);
        formData.append("myPlantPlaceCode", myPlantPlaceCode);
        formData.append("myPlantImgUrl", myPlantImgUrl);
    }
    
    return function (dispatch, getState, {history}){
        myPageAPI
            .editMyPlant(myPlantId, formData)
            .then((res) => {
                console.log(res.data);
                history.push('/myplants');
                window.location.reload();
            })
            .catch((err) => {
                console.log("error:" , err);
                window.alert('내 식물 수정하는 데에 실패하였습니다. ')
                return;
            })
    }
}

//내 사진 + 스크랩한 사진 리스트 (최대6개)
const getMyPhotoScrapedPhotoListDB = () => {
    return function (dispatch, getState, {history}){
        myPageAPI
            .getMyPhotoScrapPhotoList()
            .then((res)=> {
                dispatch(getMyPhotoScrapPhotoList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('내 사진 불러오기에 실패하였습니다.');
            });
    }
}


//내 사진 전체 리스트
const getMyPhotoListDB = (page) => {
    return function (dispatch, getState, {history}){
        myPageAPI
            .getMyPhotoList(page)
            .then((res)=> {
                dispatch(getPhotoList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('내 사진 불러오기에 실패하였습니다.');
            });
    }
}

//스크랩한 사진 전체 리스트
const getScrapPhotoListDB = (page) => {
    return function (dispatch, getState, {history}){
        myPageAPI
            .getScrapPhotoList(page)
            .then((res)=> {
                dispatch(getScrapPhotoList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('스크랩한 사진 불러오기에 실패하였습니다.');
            });
    }
}
//스크랩한 식물 리스트 (최대 6개)
const getScrapSixPlantListDB = () => {
    return function (dispatch, getState, {history}) {
        myPageAPI
            .getScrapSixPlantList()
            .then((res)=> {
                dispatch(getScrapSixPlantList(res.data.count, res.data.myBookMarkPlant));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('스크랩한 사진 불러오기에 실패하였습니다.');
            });
    }
}

//스크랩한 식물 리스트
const getScrapPlantListDB = (page) => {
    return function (dispatch, getState, {history}){
        myPageAPI
            .getScrapPlantList(page)
            .then((res)=> {
                dispatch(getScrapPlantList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('스크랩한 식물 불러오기에 실패하였습니다.');
            });
    }
}

//내가 쓴 글 전체 리스트
const getMyPostListDB = (page) => {
    return function (dispatch, getState, {history}) {
        myPageAPI
            .getMyPostList(page)
            .then((res)=> {
                dispatch(getMyPostList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('내 글 불러오기에 실패하였습니다.');
            });
    }
}

//스크랩한 글 전체 리스트
const getScrapPostListDB = (page) => {
    return function (dispatch, getState, {history}) {
        myPageAPI
            .getScrapPostList(page)
            .then((res)=> {
                console.log(res.data);
                dispatch(getScrapPostList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('내 글 불러오기에 실패하였습니다.');
            });
    }
}

//좋아요 및 조회
const likePostDB = (page, postId) => {
    return function (dispatch, getState, {history}) {
        postAPI 
            .likePost(postId)
            .then((res) => {
                console.log(res.data);
                if(page === "mypictures"){
                    dispatch(getMyPhotoListDB(0));
                }
                else if(page === "scrap-picture"){
                    dispatch(getScrapPhotoListDB(0));
                }
                else if(page === "myposts"){
                    dispatch(getMyPostListDB(0));
                }
                else if(page === "scrap-posts"){
                    dispatch(getScrapPostListDB(0));
                }
            })
            .catch((error) => {
                console.log("error: ", error);
                return;
            })
    }
}

//북마크 및 조회
const bookmarkPostDB = (page, postId) => {
    return function (dispatch, getState, {history}) {
        postAPI
            .bookmarkPost(postId)
            .then((res) => {
                console.log(res.data);
                if(page === "mypictures"){
                    dispatch(getMyPhotoListDB(0));
                }
                else if(page === "scrap-picture"){
                    dispatch(getScrapPhotoListDB(0));
                }
                else if(page === "myposts"){
                    dispatch(getMyPostListDB(0));
                }
                else if(page === "scrap-posts"){
                    dispatch(getScrapPostListDB(0));
                }
            })
            .catch((error) => {
                console.log("error: ", error);
                return;
            })
    }
}

//reducer
export default handleActions(
    {
        [GET_MY_PLANT_DETAIL]:  (state, action) => produce(state, (draft) => {
            draft.plant = action.payload.myPlant;
        }),
        [GET_MY_PLANT_LIST]: (state, action) => produce(state, (draft) => {
            draft.plantList = action.payload.plantList;
            draft.myPlantCount = action.payload.myPlantCount;
        }),
        [INITIAL_MY_PLANT_DETAIL]: (state, action) => produce(state, (draft) => {
            draft.plant = null;
        }),
        [GET_MY_PHOTO_SCRAP_PHOTO_LIST]: (state, action) => produce(state, (draft) => {
            draft.myPlanteriorBookMarKList = action.payload.list.myPlanteriorBookMarKList;
            draft.myPlanteriorBookMarkCount = action.payload.list.myPlanteriorBookMarkCount;
            draft.myPlanteriorCount = action.payload.list. myPlanteriorCount;
            draft.myPlanteriorList = action.payload.list.myPlanteriorList;
        }),
        [GET_MY_PHOTO_LIST]: (state, action) => produce(state, (draft) => {            
            if(action.payload.photoList.page > 0){
                draft.photoList.content.push(...action.payload.photoList.content);
            }else {
                draft.photoList = action.payload.photoList;
              }
              draft.photoList.page = action.payload.photoList.page;
        }),
        [GET_SCRAP_PHOTO_LIST]: (state, action) => produce(state, (draft) => {
            if(action.payload.scrapPhotoList.page > 0){
                draft.scrapPhotoList.content.push(...action.payload.scrapPhotoList.content);
            }else {
                draft.scrapPhotoList = action.payload.scrapPhotoList;
              }
              draft.scrapPhotoList.totalPage = action.payload.scrapPhotoList.totalPage;
              draft.scrapPhotoList.page = action.payload.scrapPhotoList.page;
        }),
        [GET_SCRAP_PLANT_LIST]: (state, action) => produce(state, (draft) => {
            draft.scrapPlant = action.payload.scrapPlant;
        }),
        [GET_MY_POST_LIST]: (state, action) => produce(state, (draft) => {
            if(action.payload.postList.page > 0){
                draft.postList.content.push(...action.payload.postList.content);
            }else {
                draft.postList = action.payload.postList;
            }
            draft.postList.page = action.payload.postList.page;
        }),
        [GET_SCRAP_SIX_POST_LIST]: (state, action) => produce(state, (draft) => {
            console.log(action.payload);
            draft.scrapPlantList = action.payload.scrapPlantList;
            draft.scrapPlantCount = action.payload.scrapPlantCount;
        }),
        [GET_SCRAP_POST_LIST]: (state, action) => produce(state, (draft) => {
            if(action.payload.scrapPostList.page > 0){
                draft.scrapPostList.content.push(...action.payload.scrapPostList.content);
            }else {
                draft.scrapPostList = action.payload.scrapPostList;
            }
            draft.scrapPostList.page = action.payload.scrapPostList.page;
        }),
    }, initialState
)

const actionCreators = {
    getMyPlantDetailDB,
    deleteMyPlantDB,
    editMyPlantDB,
    getMySixPlantsDB,
    getMyPhotoScrapedPhotoListDB,
    getMyPhotoListDB,
    getScrapPhotoListDB,
    getScrapPlantListDB,
    getMyPostListDB,
    getScrapSixPlantListDB,
    getScrapPostListDB,
    likePostDB,
    bookmarkPostDB,
    initialMyPlantDetail,
}

export { actionCreators };