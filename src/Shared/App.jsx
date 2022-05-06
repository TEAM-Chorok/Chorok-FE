import React from 'react';

import { Route } from 'react-router-dom';
import {

  Login, Home, SignUp, Kakao, ProfileSetting, Labeling,
  Recommendation, FindPwd, ChangePwd,
  AddLocation, AddClass, AddPlant, PlantCard,
  Search, PlanteriorDetail,
  Community, MyPage, Setting,
  MyPlantsPage, MyPicturesPage, ScrapPicturesPage, ScrapPlantsPage,
  EditPlant, MyPostsPage, DeactivateAccount,
  Test,
  AddQuestion,
  AddPlantDairy,
  AddPost
} from '../Pages';



// 이후 수정하게 될 파일이라 import를 따로 해놨습니다>.<! 
import CalendarPage from '../Pages/Calendar/Calendar';

function App() {
  return (
    <React.Fragment>

        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />

        <Route path="/auth/kakao/callback" component={Kakao} />

        <Route path="/findpwd" exact component={FindPwd} />
        <Route path="/changepwd" exact component={ChangePwd} />

        <Route path="/profilesetting" exact component={ProfileSetting} />
        <Route path="/labeling/:no" exact component={Labeling} />

        <Route path="/recommendation" exact component={Recommendation} />

        <Route path="/home" exact component={Home} />

        <Route path="/add" exact component={AddPlant} />

      <Route path="/plant/:plantname" exact component={PlantCard} />

      <Route path="/calendar" exact component={CalendarPage} />

      <Route path="/search" exact component={Search} />
      <Route path="/photo/:photoId" exact component={PlanteriorDetail} />

      <Route path="/test" exact component={Test} />

      <Route path="/community" exact component={Community} />
      <Route path="/addpost" exact component={AddPost}/>

      <Route path="/mypage" exact component={MyPage} />
      <Route path="/myplants" exact component={MyPlantsPage} />
      <Route path="/myplant/:id" exact component={EditPlant} />
      <Route path="/mypictures" exact component={MyPicturesPage} />
      <Route path="/scrap-plant" exact component={ScrapPlantsPage} />
      <Route path="/scrap-picture" exact component={ScrapPicturesPage} />

      <Route path="/setting" exact component={Setting} />
      <Route path="/setting/myposts" exact component={MyPostsPage} />
      <Route path="/setting/profile" exact component={ProfileSetting} />
      <Route path="/setting/changepwd" exact component={ChangePwd} />
      <Route path="/setting/deactivation" exact component={DeactivateAccount} />
    </React.Fragment>
  );
}


export default App;