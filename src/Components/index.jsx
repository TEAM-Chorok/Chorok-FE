
// 혹시 몰라서 만든 내 식물 페이지 식물 프로필 comp...
import PlantProfile from "./PlantProfile";

// Home
import HomeMyplant from "./Home/HomeMyplant";
import HomeHeader from "./Home/HomeHeader";
import TodoContent from "./Home/TodoContent";
import TodoProfile from "./Home/TodoProfile";

import FirstVisitHome from "./Home/FirstVisitHome";

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
import LabelingTestLink from "./Search/Planterior/LabelingTestLink";
import RecommendPlant from "./Search/Planterior/RecommendPlant"

import Planterior from "./Search/Planterior";


import CommPostList from "./Community/CommPostList";
import CommPost from "./Community/CommPost";

import AddQuestion from "./Community/AddQuestion";
import AddPlantDairy from "./Community/AddPlantDairy";

import SearchHeader from "./SearchHeader";

// My Page
import MyPageHeader from "./MyPage/MyPageHeader";
import MyCategoryBar from "./MyPage/MyCategoryBar";

import MyPagePost from "./MyPage/MyPagePost";

import MyPicturesHeader from "./MyPage/MyPictures/MyPicturesHeader";
import MyPicturesPostList from "./MyPage/MyPictures/MyPicturesPostList";

import ScrapPicturesHeader from "./MyPage/ScrapPicturesHeader";
import ScrapPicturesPostList from "./MyPage/ScrapPicturesPostList";

import MyPlants from "./MyPage/MyPlants";
import MyPlantsHeader from "./MyPage/MyPlants/MyPlantsHeader";
import MyPlantsList from "./MyPage/MyPlants/MyPlantsList";

import EditPlantHeader from "./MyPage/EditPlant/EditPlantHeader";
import EditPlantBody from "./MyPage/EditPlant/EditPlantBody";

import MyPostsHeader from "./MyPage/Setting/MyPostsHeader";
import MyPostsPostList from "./MyPage/MyPostsPostList";

import SettingHeader from "./MyPage/Setting/SettingHeader";
import DeactivationAgreement from "./MyPage/Setting/DeactivationAgreement";


// 기타 모듈화 컴포넌트
// 타이틀 + 검색창 헤더
import PlantSearchHeader from "./PlantSearchHeader";
// 탭바
import Tabbar from "./Tabbar";
// alert 모달
import Alert from "./Alert";


export {
    FirstVisitHome,
    PlantProfile,
    TodoContent, TodoProfile, HomeHeader, HomeMyplant,
    AddPlantList, BottomSheet, SelectPlace, WritePlantProfile, AddDone,
    PlantCardProfile, PlantCardFeed, 
    Planterior, PlanteriorDetailContents, PlanteriorDetailComments, PlanteriorList, LabelingTestLink, RecommendPlant,
    CommPost, CommPostList, AddQuestion, AddPlantDairy,
    MyPageHeader, MyCategoryBar, MyPagePost,
    MyPicturesPostList, MyPicturesHeader, 
    ScrapPicturesHeader, ScrapPicturesPostList, 
    MyPlantsHeader, MyPlantsList, MyPlants, 
    EditPlantHeader, EditPlantBody,
    MyPostsHeader, MyPostsPostList,
    SettingHeader, DeactivationAgreement,
    PlantSearchHeader, SearchHeader, Tabbar, Alert,

};

