import React from 'react';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../Redux/configStore";

import { Login, SignUp, ProfileSetting, RecommendQuestion, FindPwd, ChangePwd } from '../Pages';



function App() {
  return (
    <React.Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/findpwd" exact component={FindPwd} />
        <Route path="/changepwd" exact component={ChangePwd} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/profilesetting" exact component={ProfileSetting} />
        <Route path="/recommend/:no" exact component={RecommendQuestion} />
    </React.Fragment>
  );
}


export default App;