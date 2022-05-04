
// 혹시 몰라서 만든 내 식물 페이지 식물 프로필 comp...
import PlantProfile from "./PlantProfile";

// Home
import HomeMyplant from "./Home/HomeMyplant";
import HomeHeader from "./Home/HomeHeader";
import TodoContent from "./Home/TodoContent";
import TodoProfile from "./Home/TodoProfile";

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
import SearchPageHeader from "./Search/SearchHeader";
import PlanteriorList from "./Search/Planterior/PlanteriorList";
import LabelingTestLink from "./Search/Planterior/LabelingTestLink";
import RecommendPlant from "./Search/Planterior/RecommendPlant"

import Planterior from "./Search/Planterior";


import CommPostList from "./Community/CommPostList";
import CommPost from "./Community/CommPost";

import SearchHeader from "./SearchHeader";

import MyPage from "../Pages/MyPage/MyPage";
import MyPageHeader from "./MyPage/MyPageHeader";
import MyCategoryBar from "./MyPage/MyCategoryBar";

import SettingHeader from "./MyPage/SettingHeader";

export {
    PlantProfile,
    TodoContent, TodoProfile, HomeHeader, HomeMyplant,
    AddLocationList, AddClassList, AddPlantList, BottomSheet, 
    PlantCardProfile, PlantCardFeed, 
    Planterior, PlanteriorDetailContents, PlanteriorDetailComments, SearchPageHeader, PlanteriorList, LabelingTestLink, RecommendPlant,
    CommPost, CommPostList,
    SearchHeader,
    MyPage, MyPageHeader, MyCategoryBar, 
    SettingHeader,
};
