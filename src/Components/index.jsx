
// 혹시 몰라서 만든 내 식물 페이지 식물 프로필 comp...
import PlantProfile from "./PlantProfile";

// Home
import HomeMyplant from "./Home/HomeMyplant";
import HomeHeader from "./Home/HomeHeader";
import TodoContent from "./Home/TodoContent";
import TodoProfile from "./Home/TodoProfile";

import Questionnaire from "./Home/Questionnaire";
import Questionnaire2 from "./Home/Questionnaire2";
import Questionnaire3 from "./Home/Questionnaire3";
import Questionnaire4 from "./Home/Questionnaire4";

// Add Plant
// 사라진 페이지가 있어서 나중에 다시 정리하게 될 것 같아요! 
import AddLocationList from "./AddPlant/AddLocationList";
import AddClassList from "./AddPlant/AddClassList";
import AddPlantList from "./AddPlant/AddPlantList";
import BottomSheet from "./AddPlant/BottomSheet";

// Plant Card
import PlantCardProfile from "./PlantCard/PlantCardProfile";
import PlantCardFeed from "./PlantCard/PlantCardFeed";

// Search(planterior)
// 식물도감탭은 식물 추가 flow의 AddPlant 페이지로 처리했습니다!
import PlanteriorDetailContents from "./Search/Planterior/PlanteriorDetailContents";
import PlanteriorDetailComments from "./Search/Planterior/PlanteriorDetailComments";
import PlanteriorList from "./Search/Planterior/PlanteriorList";
import LabelingTestLink from "./Search/Planterior/LabelingTestLink";
import RecommendPlant from "./Search/Planterior/RecommendPlant"

import Planterior from "./Search/Planterior";

//community
import CommPostList from "./Community/CommPostList";
import CommPost from "./Community/CommPost";
import CommunityFilter from "./Community/CommunityFilter";
import CommPostCommentList from "./Community/CommPostCommentList";

import AddPostHeader from "./Community/AddPostHeader";
import AddPostFooter from "./Community/AddPostFooter";
import AddQuestion from "./Community/AddQuestion";
import AddPlantDairy from "./Community/AddPlantDairy";

import SearchHeader from "./SearchHeader";

// My Page
import MyPageHeader from "./MyPage/MyPageHeader";
import MyCategoryBar from "./MyPage/MyCategoryBar";

import MyPagePost from "./MyPage/MyPagePost";


import MyPicturesPostList from "./MyPage/MyPictures/MyPicturesPostList";

import ScrapPicturesPostList from "./MyPage/ScrapPicturesPostList";

import MyPlants from "./MyPage/MyPlants";
import MyPlantsList from "./MyPage/MyPlants/MyPlantsList";

import EditPlantHeader from "./MyPage/EditPlant/EditPlantHeader";
import EditPlantBody from "./MyPage/EditPlant/EditPlantBody";

import MyPostsPostList from "./MyPage/MyPostsPostList";

import DeactivationAgreement from "./MyPage/Setting/DeactivationAgreement";


// 기타 모듈화 컴포넌트
// 뒤로가기 버튼 + 타이틀 헤더 
import GeneralHeader from "./GeneralHeader";
// 타이틀 + 검색창 헤더
import PlantSearchHeader from "./PlantSearchHeader";
// 탭바
import Tabbar from "./Tabbar";


export {
    Questionnaire,Questionnaire2, Questionnaire3, Questionnaire4,
    PlantProfile,
    TodoContent, TodoProfile, HomeHeader, HomeMyplant,
    AddLocationList, AddClassList, AddPlantList, BottomSheet, 
    PlantCardProfile, PlantCardFeed, 
    Planterior, PlanteriorDetailContents, PlanteriorDetailComments, PlanteriorList, LabelingTestLink, RecommendPlant,
    CommPost, CommPostList, CommunityFilter, CommPostCommentList,
    AddQuestion, AddPlantDairy, AddPostHeader, AddPostFooter,
    MyPageHeader, MyCategoryBar, MyPagePost,
    MyPicturesPostList, ScrapPicturesPostList, 
     MyPlantsList, MyPlants, GeneralHeader,
    EditPlantHeader, EditPlantBody,
     MyPostsPostList,
     DeactivationAgreement,
    PlantSearchHeader, SearchHeader, Tabbar,
};

