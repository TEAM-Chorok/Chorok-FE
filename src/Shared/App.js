import React from 'react';

import { Route } from 'react-router-dom';
import { Login, Home, Recommendation, AddLocation, AddClass, AddPlant, PlantCard,  SignUp, ProfileSetting, Labeling, FindPwd, ChangePwd , Community, MyPage, Setting, MyPlantsPage, MyPicturesPage, ScrapPicturesPage, ScrapPlantsPage, EditPlant, MyPostsPage, DeactivateAccount } from '../Pages';


function App() {
  return (
    <React.Fragment>

        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />

        <Route path="/findpwd" exact component={FindPwd} />
        <Route path="/changepwd" exact component={ChangePwd} />

        <Route path="/profilesetting" exact component={ProfileSetting} />
        <Route path="/labeling/:no" exact component={Labeling} />

        <Route path="/recommendation" exact component={Recommendation} />

        <Route path="/home" exact component={Home} />

        <Route path="/add" exact component={AddLocation} />
        <Route path="/add/:location" exact component={AddClass} />
        <Route path="/add/:location/list" exact component={AddPlant} />

        <Route path="/plant/:plantname" exact component={PlantCard} />

        <Route path="/community" exact component={Community} />

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