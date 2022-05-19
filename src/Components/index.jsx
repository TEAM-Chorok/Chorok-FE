
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
import AddPlantList from "./AddPlant/AddPlantList";
import BottomSheet from "./AddPlant/BottomSheet";
import SelectPlace from "./AddPlant/SelectPlace";
import WritePlantProfile from "./AddPlant/WritePlantProfile";
import AddDone from "./AddPlant/AddDone";


// Plant Card
import PlantCardProfile from "./PlantCard/PlantCardProfile";
import PlantCardFeed from "./PlantCard/PlantCardFeed";


// Search(planterior)
// 식물도감탭은 식물 추가 flow의 AddPlant 페이지로 처리했습니다!
import PlanteriorDetailContents from "./Search/Planterior/PlanteriorDetailContents";
import PlanteriorDetailComments from "./Search/Planterior/PlanteriorDetailComments";
import PlanteriorList from "./Search/Planterior/PlanteriorList";
import PlanteriorWriteComp from "./Search/Planterior/PlanteriorWrite";
import LabelingTestLink from "./Search/Planterior/LabelingTestLink";
import RecommendPlant from "./Search/Planterior/RecommendPlant"

import SearchOnFocus from "./Search/SearchOnFocus";
import AllResult from "./Search/SearchResult/AllResult";
import PlanteriorResult from "./Search/SearchResult/PlanteriorResult";
import PlantResult from "./Search/SearchResult/PlantResult";

import Planterior from "./Search/Planterior";

// Calendar
import CalendarTable from "./Calendar/CalendarTable";
import CalendarMyPlant from "./Calendar/CalendarMyPlant";
import CalendarTodo from "./Calendar/CalendarTodo";

//community
import CommPostList from "./Community/CommPostList";
import CommPost from "./Community/CommPost";
import CommunityFilter from "./Community/CommunityFilter";
import CommPostCommentList from "./Community/CommPostCommentList";
import DetailCommPost from "./Community/DetailCommPost";

import AddPostHeader from "./Community/AddPostHeader";
import AddPostFooter from "./Community/AddPostFooter";
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
// alert 모달
import Alert from "./Alert";
// 프로그래스바
import ProgressBar from "./ProgressBar";
// 네비게이션바
import Navbar from "./Navbar";
//그림자 
import Dimmer from "./Dimmer";
//모달버튼
import SideButton from "./SideButton";

export {
    Questionnaire,Questionnaire2, Questionnaire3, Questionnaire4,
    PlantProfile,
    TodoContent, TodoProfile, HomeHeader, HomeMyplant,
    AddPlantList, BottomSheet, SelectPlace, WritePlantProfile, AddDone,
    PlantCardProfile, PlantCardFeed, 
    CalendarTable, CalendarMyPlant, CalendarTodo,
    Planterior, PlanteriorDetailContents, PlanteriorDetailComments, PlanteriorList, PlanteriorWriteComp,
    SearchOnFocus, AllResult, PlanteriorResult, PlantResult, 
    LabelingTestLink, RecommendPlant,
    CommPost, CommPostList, CommunityFilter, DetailCommPost, AddPlantDairy, AddPostHeader, AddPostFooter,
    MyPageHeader, MyCategoryBar, MyPagePost, CommPostCommentList,
    MyPicturesPostList, ScrapPicturesPostList, 
    MyPlantsList, MyPlants, GeneralHeader,
    EditPlantHeader, EditPlantBody,
    MyPostsPostList, 
    DeactivationAgreement,
    PlantSearchHeader, SearchHeader, Tabbar, Alert, ProgressBar, Navbar, Dimmer, SideButton,
};

