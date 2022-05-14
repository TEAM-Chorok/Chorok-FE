import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Grid, Image, Text } from "../Elements";


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
    }
    if(url === 'search') {
      setCheck({home:false, search:true, calendar:false, community:false, mypage:false,});
    }
    if(url === 'calendar') {
      setCheck({home:false, search:false, calendar:true, community:false, mypage:false,});
    }
    if(url === 'community') {
      setCheck({home:false, search:false, calendar:false, community:true, mypage:false,});
    }
    if(url === 'mypage') {
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
                <Image type="square" size="20px" 
                  imgUrl={check.home?"img/navbaricon/home_check.svg":"img/navbaricon/home.svg"}/>
              </Grid>
              <Grid margin="auto">
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
                <Image type="square" size="20px" 
                  imgUrl={check.search?"img/navbaricon/search_check.svg":"img/navbaricon/search.svg"}/>
              </Grid>
              <Grid margin="auto">
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
                <Image type="square" size="20px" 
                  imgUrl={check.calendar?"img/navbaricon/calendar_check.svg":"img/navbaricon/calendar.svg"}/>
              </Grid>
              <Grid margin="auto">
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
                <Image type="square" size="20px" 
                  imgUrl={check.community?"img/navbaricon/community_check.svg":"img/navbaricon/community.svg"}/>
              </Grid>
              <Grid margin="auto">
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
                <Image type="square" size="20px" 
                  imgUrl={check.mypage?"img/navbaricon/user_check.svg":"img/navbaricon/user.svg"}/>
              </Grid>
              <Grid margin="auto">
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
  width: 100%;
  height: 80px;

  border-top: 1px solid #E0E0E0;
  background: #fff;
`

const InnerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin:auto;
  align-items:center;
  width: 342px;
  height: 100%;
`

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export default Navbar;