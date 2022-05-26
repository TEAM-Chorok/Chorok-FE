import { Input, Text, Grid, Container } from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { KAKAO_AUTH_URL } from '../../Shared/OAuthKaKao.js';
import { GOOGLE_AUTH_URL } from '../../Shared/OAuthGoogle.js';

const Login = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container type="np">
      <Div>
        <Container>
          <InnerDiv>
            {/* 로고 */}
            <Text display="block" fontSize="26px" bold color="#ffffff" >내 공간에 <br />활기를 더해줄,<br />초록</Text>
          </InnerDiv>
          
          <InnerDiv style={{marginTop:"148px"}}>

              <Grid width="100%" margin="8px 0px 0px 0px">
                <a href={KAKAO_AUTH_URL}><div
                  style={{ placeItems: "self-start", display: "grid", gridTemplateColumns: "0.3fr 0.15fr 0.8fr", width: "100%", fontWeight: "500", height: "48px", alignItems: "center", backgroundColor: "#FEE500 ", padding: "14px", borderRadius: "6px", color: "#242424", boxShadow: "none", boxSizing: "border-box" }}>
                  <div></div>
                  <img src="img/socialLoginLogo/kakao 1.svg" style={{ margin: "0px 4px" }} />
                  <Text size="small" bold>카카오로 계속하기</Text>
                </div></a>
              </Grid>
              <Grid width="100%" margin="8px 0px 0px 0px">
                <a href={GOOGLE_AUTH_URL}><div
                  style={{ placeItems: "self-start", display: "grid", gridTemplateColumns: "0.35fr 0.15fr 0.8fr", width: "100%", fontWeight: "500", height: "48px", alignItems: "center", backgroundColor: "#FFFFFF ", padding: "14px", borderRadius: "6px", color: "#392020", boxShadow: "none", boxSizing: "border-box" }}>
                  <div></div>
                  <img src="img/socialLoginLogo/logo_google.svg" style={{ margin: "0px 4px" }} />
                  <Text size="small" bold>구글로 계속하기</Text>
                </div></a>
              </Grid>

              {/* <Grid width="100%" margin="8px 0px 0px 0px">
              <Button 
                href={GOOGLE_AUTH_URL}
                variant='contained' 
                style={{textAlign:"center", display:"block", width:"100%", fontWeight:"700",height: "48px", alignItems:"center", backgroundColor:"#FFFFFF ", padding:"14px", borderRadius:"6px",  color:"#392020", boxShadow:"none", boxSizing:"border-box"}}>
                  <img src="img/logo_google.svg" style={{margin:"0px 4px"}}/>
                   구글로 계속하기</Button>
            </Grid> */}

              <Grid width="100%" margin="8px 0px 0px 0px">
                <Button variant='text'
                  style={{ textAlign: "center", display: "block", width: "100%", height: "48px", backgroundColor: "#E0E0E0", color: "black", fontWeight: "700", borderRadius: "6px", border: "1px solid #E0E0E0", boxShadow: "none", boxSizing: "border-box" }}
                  onClick={() => history.push('/logIn')}>
                  <Text size="small" bold>이메일로 계속하기</Text>
                </Button>
              </Grid>
            </InnerDiv>


            <GridBox>
              <Button variant='text'
                style={{ paddingLeft: "100px", color: "#ffffff", fontSize: "14px", fontWeight: "700" }}
                onClick={() => history.push('/signup')}>
                <Text bold color="#fff">회원가입</Text>
              </Button>
              <Button variant='text'
                style={{ paddingRight: "100px", color: "#ffffff", fontSize: "14px", fontWeight: "700" }}
                onClick={() => history.push('/home')}>
                <Text bold color="#fff">둘러보기</Text>
                </Button>
            </GridBox>
          </Container>
        </Div>
      </Container>
    </React.Fragment>
  );
}

const InnerDiv = styled.div`
// width: 100%;
// height: 100%;,
margin: 20px 10px 20px 10px;
box-sizing: border-box;
`
const GridBox = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
box-sizing: border-box;
`
const Div = styled.div`
padding: 60px 0px;
width: 100%;
height: 100vh;
background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('/img/LoginPage.svg');
background-size: cover;
`
export default Login;