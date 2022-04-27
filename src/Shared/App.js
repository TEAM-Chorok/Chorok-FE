import React from 'react';

import { Route } from 'react-router-dom';
import { Login, Home, AddLocation, AddClass, AddPlant, PlantCard,  SignUp, ProfileSetting, RecommendQuestion, FindPwd, ChangePwd } from '../Pages';


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

    </React.Fragment>
  );
}


export default App;