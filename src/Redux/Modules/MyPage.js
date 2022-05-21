import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { myPageAPI } from "../../Shared/api";

//actions
const GET_MY_PLANT_LIST = 'GET_MY_PLANT_LIST';
const GET_MY_PLANT_DETAIL = 'GET_MY_PLANT_DETAIL';
const DELETE_MY_PLANT = 'DELETE_MY_PLANT';
const EDIT_MY_PLANT = 'EDIT_MY_PLANT';

const GET_MY_PHOTO_SCRAP_PHOTO_LIST = 'GET_MY_PHOTO_SCRAP_PHOTO_LIST';
const GET_MY_PHOTO_LIST = "GET_MY_PHOTO_LIST";
const GET_SCRAP_PHOTO_LIST = "GET_SCRAP_PHOTO_LIST";
const GET_SCRAP_PLANT_LIST = "GET_SCRAP_PLANT_LIST";
const GET_MY_POST_LIST = "GET_MY_POST_LIST";

//action creators
const getMyPlantList = createAction(GET_MY_PLANT_LIST, (myPlantCount, plantList) => ({myPlantCount, plantList}))
const getMyPlantDetail = createAction(GET_MY_PLANT_DETAIL, (myPlant) => ({myPlant}));
const deleteMyPlant = createAction(DELETE_MY_PLANT, () => ({}));
const editMyPlant = createAction(EDIT_MY_PLANT, () => ({}));

const getMyPhotoScrapPhotoList = createAction(GET_MY_PHOTO_SCRAP_PHOTO_LIST, (list) => ({list}));
const getPhotoList = createAction(GET_MY_PHOTO_LIST, (photoList) => ({photoList}));
const getScrapPhotoList = createAction(GET_SCRAP_PHOTO_LIST, (scrapPhotoList) => ({scrapPhotoList}));
const getScrapPlantList = createAction(GET_SCRAP_PLANT_LIST, (scrapPlant) => ({scrapPlant}));
const getMyPostList = createAction(GET_MY_POST_LIST, (postList) => ({postList}));

//initial state
const initialState = {
    plantList: [],
    plant : {},
    myPlantCount: 0,
    photoList: [],
    postList: [],
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
                console.log(res.data);
                dispatch(getMyPlantDetail(res.data));
            })
            .catch((err) => {
                console.log("error:" , err);
                window.alert('내 식물 상세 정보를 불러오는 데에 실패하였습니다. ')
                return;
            })
    }
}
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
const editMyPlantDB = () => {
    const formData = new FormData();
    formData.append();
    return function (dispatch, getState, {history}){
        myPageAPI
            .getMyDetailPlant(formData)
            .then((res) => {
                console.log(res.data);
                history.push('/myplants');
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
const getMyPhotoListDB = () => {
    return function (dispatch, getState, {history}){
        myPageAPI
            .getMyPhotoList()
            .then((res)=> {
                console.log(res.data.content)
                dispatch(getPhotoList(res.data.content));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('내 사진 불러오기에 실패하였습니다.');
            });
    }
}

//스크랩한 사진 전체 리스트
const getScrapPhotoListDB = () => {
    return function (dispatch, getState, {history}){
        myPageAPI
            .getScrapPhotoList()
            .then((res)=> {
                console.log(res.data);
                dispatch(getScrapPhotoList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('스크랩한 사진 불러오기에 실패하였습니다.');
            });
    }
}
//스크랩한 식물 리스트
const getScrapPlantListDB = () => {
    return function (dispatch, getState, {history}){
        console.log("getScrapPlantListDB ");
        myPageAPI
            .getScrapPlantList()
            .then((res)=> {
                console.log("response : ", res);
                dispatch(getScrapPlantList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('스크랩한 식물 불러오기에 실패하였습니다.');
            });
    }
}

//내가 쓴 글 전체 리스트
const getMyPostListDB = () => {
    return function (dispatch, getState, {history}) {
        myPageAPI
            .getMyPostList()
            .then((res)=> {
                dispatch(getMyPostList(res.data));
            }).catch((error) => {
                console.log("error: ", error);
                // window.alert('내 글 불러오기에 실패하였습니다.');
            });
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
        [GET_MY_PHOTO_SCRAP_PHOTO_LIST]: (state, action) => produce(state, (draft) => {
            draft.myPlanteriorBookMarKList = action.payload.list.myPlanteriorBookMarKList;
            draft.myPlanteriorBookMarkCount = action.payload.list.myPlanteriorBookMarkCount;
            draft.myPlanteriorCount = action.payload.list. myPlanteriorCount;
            draft.myPlanteriorList = action.payload.list.myPlanteriorList;
        }),
        [GET_MY_PHOTO_LIST]: (state, action) => produce(state, (draft) => {
            draft.photoList = action.payload.photoList;
        }),
        [GET_SCRAP_PHOTO_LIST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.list;
            draft.is_loading = true;
        }),
        [GET_SCRAP_PLANT_LIST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.list;
            draft.is_loading = true;
        }),
        [GET_MY_POST_LIST]: (state, action) => produce(state, (draft) => {
            draft.postList = action.payload.postList;
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
}

export { actionCreators };