import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Navbar, Questionnaire } from '../Components';
import { Container } from '../Elements';
import {
  Login, Home, SignUp, Kakao, ProfileSetting, Labeling,
  Recommendation, FindPwd, ChangePwd,
  AddPlants, SearchPlant, PlantCard,
  Search, PlanteriorDetail, PlanteriorWrite,
  Result,
  CalendarPage,
  Community, MyPage, Setting,
  MyPlantsPage, MyPicturesPage, ScrapPicturesPage, ScrapPlantsPage,
  EditPlant, MyPostsPage, DeactivateAccount,
  Test,
  AddPost,
  PostDetail,
} from '../Pages';
import EditPost from '../Pages/Community/EditPost';
import theme from './theme';


function App() {

  
  return (
    <React.Fragment>
      <ThemeProvider theme={theme} >
        <Container app>
          <Container rt>

            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />

            <Route path="/auth/kakao/callback" component={Kakao} />

            <Route path="/findpwd" exact component={FindPwd} />
            <Route path="/changepwd" exact component={ChangePwd} />

            <Route path="/profilesetting" exact component={ProfileSetting} />
            <Route path="/labeling" exact component={Labeling} />
            <Route path="/recommendation/:plantId" exact component={Recommendation} />

            <Route path="/home" exact component={Home} />

            <Route path="/plant" exact component={SearchPlant} />
            <Route path="/add/:plantNo" exact component={AddPlants} />

            <Route path="/plant/:plantname" exact component={PlantCard} />

            <Route path="/calendar" exact component={CalendarPage} />

            <Route path="/search" exact component={Search} />
            <Route path="/search/:result" exact component={Result} />
            <Route path="/planterior/write" exact component={PlanteriorWrite} />
            <Route path="/planterior/post/:postId" exact component={PlanteriorDetail} />

            <Route path="/test" exact component={Test} />

            <Route path="/community" exact component={Community} />
            <Route path="/addpost" exact component={AddPost} />
            <Route path="/community/:postId" exact component={PostDetail} />
            <Route path="/community/editpost/:postId" exact component={EditPost} />

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
          </Container>

          <Navbar />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}


export default App;