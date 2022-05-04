import React from 'react';

import { Route } from 'react-router-dom';
import {
  Login, Home, SignUp, ProfileSetting,
  RecommendQuestion, FindPwd, ChangePwd,
  AddLocation, AddClass, AddPlant, PlantCard,
  Search, PlanteriorDetail,
  Community, MyPage, Setting,
  MyPlantsPage, MyPicturesPage, ScrapPicturesPage, ScrapPlantsPage,
  Test
} from '../Pages';

// 이후 수정하게 될 파일이라 import를 따로 해놨습니다>.<! 
import CalendarPage from '../Pages/Calendar/Calendar';

function App() {
  return (
    <React.Fragment>

      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />

      <Route path="/findpwd" exact component={FindPwd} />
      <Route path="/changepwd" exact component={ChangePwd} />

      <Route path="/profilesetting" exact component={ProfileSetting} />
      <Route path="/recommend/:no" exact component={RecommendQuestion} />

      <Route path="/home" exact component={Home} />

      <Route path="/add" exact component={AddLocation} />
      <Route path="/add/:location" exact component={AddClass} />
      <Route path="/add/:location/list" exact component={AddPlant} />

      <Route path="/plant/:plantname" exact component={PlantCard} />

      <Route path="/calendar" exact component={CalendarPage} />

      <Route path="/search" exact component={Search} />
      <Route path="/photo/:photoId" exact component={PlanteriorDetail} />

      <Route path="/pagetest" exact component={Test} />

      <Route path="/community" exact component={Community} />

      <Route path="/mypage" exact component={MyPage} />
      <Route path="/myplants" exact component={MyPlantsPage} />
      <Route path="/mypictures" exact component={MyPicturesPage} />
      <Route path="/scrap-plant" exact component={ScrapPlantsPage} />
      <Route path="/scrap-picture" exact component={ScrapPicturesPage} />

      <Route path="/setting" exact component={Setting} />
    </React.Fragment>
  );
}


export default App;