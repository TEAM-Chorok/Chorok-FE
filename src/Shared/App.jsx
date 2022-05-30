import React from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { AddDone, Navbar, SearchOnFocus } from '../Components';
import MobileFrame from '../Components/MobileFrame';
import {
  Login, Home, SignUp, Kakao, Google, ProfileSetting, Labeling,
  Recommendation, FindPwd, ChangePwd,
  AddPlants, SearchPlant, PlantCard,
  Search, PlanteriorDetail, PlanteriorWrite,
  Result,
  CalendarPage,
  Community, MyPage, Setting,
  MyPlantsPage, MyPicturesPage, ScrapPicturesPage, ScrapPlantsPage,
  EditPlant, MyPostsPage, DeactivateAccount,
  Test,
  AddPost, EditPost, 
  PostDetail,
  LogInEmail,
  ScrapPostsPage,
  EmailValidation,
} from '../Pages';
import theme from './theme';
import { ReactComponent as Frame } from '../Assets/img/phoneframe.svg';
import { useLocation, Switch } from 'react-router-dom';
import Event from '../Pages/Event';
import NotFound from '../Pages/NotFound';
import Easter from '../Pages/Easter';



function App() {

  const lo = useLocation().pathname.split('/')[1];

  return (
    <React.Fragment>
      <ThemeProvider theme={theme} >
        <Wrap>
          <MobileFrame className="MobileFramePage">
          {/* <Frame className='frame'/> */}
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/logIn" exact component={LogInEmail} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signup/emailValidation" component={EmailValidation} />

            <Route path="/auth/kakao/callback" component={Kakao} />
            <Route path="/auth/google/callback" exact component={Google} />

            <Route path="/findpwd" exact component={FindPwd} />
            <Route path="/changepwd" exact component={ChangePwd} />

            <Route path="/profilesetting" exact component={ProfileSetting} />
            <Route path="/labeling" exact component={Labeling} />
            <Route path="/recommendation/:plantId" exact component={Recommendation} />

            <Route path="/home" exact component={Home} />

            <Route path="/plant" exact component={SearchPlant} />
            <Route path="/add/:plantNo" exact component={AddPlants} />
            <Route path="/done" exact component={AddDone} />

            <Route path="/plant/:plantname" exact component={PlantCard} />

            <Route path="/calendar" exact component={CalendarPage} />

            <Route path="/search" exact component={Search} />
            <Route path="/search/:result" exact component={Result} />
            <Route path="/planterior/write" exact component={PlanteriorWrite} />
            <Route path="/planterior/edit/:postId" exact component={PlanteriorWrite} />
            <Route path="/planterior/post/:postId" exact component={PlanteriorDetail} />

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
            <Route path="/setting/scrap-posts" exact component={ScrapPostsPage} />
            <Route path="/setting/profile" exact component={ProfileSetting} />
            <Route path="/setting/changepwd" exact component={ChangePwd} />
            <Route path="/setting/deactivation" exact component={DeactivateAccount} />

            <Route path="/event" exact component={Event} />
            <Route path="/easter" exact component={Easter} />
            
            <Route component={NotFound} />
          </Switch>
            { lo === "" || lo === "labeling" || lo === "add" || lo === 'event' ? null : <Navbar /> }
            
          </MobileFrame>
        </Wrap>
      </ThemeProvider>
    </React.Fragment>
  );
}


const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/img/background/desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;

  @media ${({ theme }) => theme.device.labtop} {
  background-image: url('/img/background/labtop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  }

  @media ${({ theme }) => theme.device.tablet} {
  background-image: url('/img/background/tablet.svg');
  background-repeat: no-repeat;
  background-size: cover;
  }

  .MobileFramePage {
    z-index: 999;
  }
`

export default App;