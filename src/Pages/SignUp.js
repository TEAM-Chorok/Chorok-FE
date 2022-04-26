import { Input, Text} from '../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Grid from '../Elements/Grid';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid padding="30px 10px">
        <Header>
            <ArrowBackIosNewOutlinedIcon style={{position: "relative", left: "-320px", top:"8px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
            <Text>회원가입</Text>
        </Header>
        <FindPwdWrap>
            <Text display="block">반가워요! 이름과 이메일, 비밀번호를 <br />입력해주세요. 😀</Text>
            <Input placeholder="이름" name="signup_username" margin="20px auto 0px auto"></Input>
            <Input display="inline-block" placeholder="이메일(아이디)" name="signup_id" type="email" margin="10px 10px 10px auto" width="233px"></Input>
            <Button style={{fontSize:"12px", height:"40px"}} variant='contained'>중복확인</Button>
            {/* 중복확인 후에 아래 텍스트 출력 */}
            <Text display="none">사용가능한 이메일입니다.</Text>
            <hr />
            <Input placeholder="비밀번호" type="password" name="signup_pwd"></Input>
            <Input placeholder="비밀번호 확인" type="password" name="signup_pwd_check"></Input>
            <Text fontSize="0.7em">비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요</Text>
            <Button style={{display:"block", margin:"160px auto auto auto", width:"160px"}}variant='contained'>다음</Button>
        </FindPwdWrap>
      </Grid>
    </React.Fragment>
    );
  }
  const Header = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  margin: 10px auto;
`
const FindPwdWrap = styled.div`
width: 100%;
height: 80%;
text-align: center;
margin: 30px auto;
`

export default SignUp;