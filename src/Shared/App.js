import React from 'react';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../Redux/configStore";

import { Login, SignUp, ProfileSetting, RecommendQuestion, FindPwd } from '../Pages';



function App() {
  return (
    <React.Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/profilesetting" exact component={ProfileSetting} />
        <Route path="/findpwd" exact component={FindPwd} />
        <Route path="/recommend/:no" exact component={RecommendQuestion} />
    </React.Fragment>
  );
}


export default App;