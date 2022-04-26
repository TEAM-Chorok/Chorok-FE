import { Input, Text} from '../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Grid from '../Elements/Grid';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid padding="30px 10px">
        <InnerWrap>
          <InnerDiv>
            {/* 로고 */}
            <img src="favicon.ico" style={{width:"100px", height: "100px", margin:"0px auto"}}/>
          </InnerDiv>
          <InnerDiv>
            <Input placeholder="이메일(아이디)" type="email" name="user_id"/>
            <Input type="password" placeholder="비밀번호" name="user_pwd" />
            <Button variant='contained' style={{display:"block", margin:"10px auto", width:"320px"}}>Login</Button>
            <Button variant='text' style={{display:"block", margin:"10px auto", width:"320px"}} onClick={()=>history.push('/findpwd')}>비밀번호 찾기</Button>
          </InnerDiv>
          <hr />
          <InnerDiv>
            <Button variant='contained' style={{display:"block", margin:"10px auto", width:"320px"}}>Google Login</Button>
            <Button variant='contained' style={{display:"block", margin:"10px auto", width:"320px"}}>KaKao Login</Button>
          </InnerDiv>
          <hr />
          <InnerDiv>
            <Text >회원이 아니신가요? </Text>
            <Button variant='contained' style={{display:"block", margin:"10px auto", width:"320px"}} onClick={()=>history.push('/signup')}>회원가입</Button>
            <Button variant='text' style={{display:"block", margin:"10px auto", width:"320px"}}>먼저 둘러보고 싶어요! </Button>
          </InnerDiv>
        </InnerWrap>
      </Grid>
    </React.Fragment>
    );
  }
  
const InnerWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
`
const InnerDiv = styled.div`
width: 100%;
height: 100%;
margin: 0px auto;
text-align:center;
`
export default Login;