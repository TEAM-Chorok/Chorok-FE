import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text } from "../../../Elements";
import { ReactComponent as HomeIcon } from '../../../Assets/img/navbarIcons/home.svg'
import { ReactComponent as SearchIcon } from '../../../Assets/img/navbarIcons/search.svg'
import { ReactComponent as CalendarIcon } from '../../../Assets/img/navbarIcons/calendar.svg'
import { ReactComponent as CommunityIcon } from '../../../Assets/img/navbarIcons/community.svg'
import { ReactComponent as UserIcon } from '../../../Assets/img/navbarIcons/user.svg'

const Navbar = (props) => {
  const history = useHistory();
  
  const location = useLocation();
  const url = location.pathname.split('/')[1];
  
  const [check, setCheck] = React.useState({
    home: false,
    search: false,
    calendar: false,
    community: false,
    mypage: false,
  })

  React.useEffect(() => {
    if(url === 'home') {
      setCheck({home:true, search:false, calendar:false, community:false, mypage:false,});
    } else if(url === 'search') {
      setCheck({home:false, search:true, calendar:false, community:false, mypage:false,});
    } else if(url === 'calendar') {
      setCheck({home:false, search:false, calendar:true, community:false, mypage:false,});
    } else if(url === 'community') {
      setCheck({home:false, search:false, calendar:false, community:true, mypage:false,});
    } else if(url === 'mypage') {
      setCheck({home:false, search:false, calendar:false, community:false, mypage:true,});
    }
  }, [url])

  return (
    <React.Fragment>
      <NavBox>
        <InnerBox>
        
          <ItemBox onClick={() => {
            history.push('/home');
          }}>
            <Grid width="100%" height="100%">
              <Grid margin="auto">
                  <HomeIcon fill={check.home?"#0AAF42":"#A8A8A8"}/>
              </Grid>
              <Grid margin="-6px auto">
              {check.home?
                <Text bold size="xxsmall" color="#0AAF42">홈</Text>:
                <Text size="xxsmall" color="#6F6F6F">홈</Text>}
              </Grid>
            </Grid>
          </ItemBox>

          <ItemBox onClick={() => {
            history.push('/search')
          }}>
            <Grid width="100%" height="100%">
              <Grid margin="auto">
                  <SearchIcon fill={check.search?"#0AAF42":"#A8A8A8"} stroke={check.search?"#0AAF42":"#A8A8A8"}/>
              </Grid>
              <Grid margin="-6px auto">
              {check.search?
                <Text bold size="xxsmall" color="#0AAF42">탐색</Text>:
                <Text size="xxsmall" color="#6F6F6F">탐색</Text>}
              </Grid>
            </Grid>
          </ItemBox>

          <ItemBox onClick={() => {
            history.push('/calendar')
          }}>
            <Grid width="100%" height="100%">
              <Grid margin="auto">
                  <CalendarIcon fill={check.calendar?"#0AAF42":"#A8A8A8"}/>
              </Grid>
              <Grid margin="-6px auto">
              {check.calendar?
                <Text bold size="xxsmall" color="#0AAF42">캘린더</Text>:
                <Text size="xxsmall" color="#6F6F6F">캘린더</Text>}
              </Grid>
            </Grid>
          </ItemBox>

          <ItemBox onClick={() => {
            history.push('/community')
          }}>
            <Grid width="100%" height="100%">
              <Grid margin="auto">
                  <CommunityIcon fill={check.community?"#0AAF42":"#A8A8A8"} stroke={check.community?"#0AAF42":"#A8A8A8"}/>
              </Grid>
              <Grid margin="-6px auto">
              {check.community?
                <Text bold size="xxsmall" color="#0AAF42">초록톡</Text>:
                <Text size="xxsmall" color="#6F6F6F">초록톡</Text>}
              </Grid>
            </Grid>
          </ItemBox>

          <ItemBox onClick={() => {
            history.push('/mypage')
          }}>
            <Grid width="100%" height="100%">
              <Grid margin="auto">
                  <UserIcon fill={check.mypage?"#0AAF42":"#A8A8A8"} stroke={check.mypage?"#0AAF42":"#A8A8A8"}/>
              </Grid>
              <Grid margin="-6px auto">
              {check.mypage?
                <Text bold size="xxsmall" color="#0AAF42">마이페이지</Text>:
                <Text size="xxsmall" color="#6F6F6F">마이페이지</Text>}
              </Grid>
            </Grid>
          </ItemBox>

        </InnerBox>
      </NavBox>
    </React.Fragment>
  );
}

const NavBox = styled.div`
  position: fixed;
  bottom: 0;
  box-sizing: border-box;

  width: 100%;
  height: 56px;

  border-top: 1px solid #E0E0E0;
  background: #fff;
  
  z-index: 50;
`

const InnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 8px auto;
  align-items:center;
  width: 342px;
`

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export default Navbar;