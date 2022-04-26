import { Input, Text} from '../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Grid from '../Elements/Grid';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';

const FindPwd = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid padding="30px 10px">
        <Header>
            <ArrowBackIosNewOutlinedIcon style={{position: "relative", left: "-320px", top:"8px" }} onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
            <Text>비밀번호 찾기</Text>
        </Header>
        <FindPwdWrap>
            <Text display="block">회원정보를 입력하시면 이메일로</Text>
            <Text display="block">임시 비밀번호를 발급해드려요.</Text>
            <Input placeholder="이름" margin="20px auto 10px auto"></Input>
            <Input placeholder="이메일(아이디)" type="email"></Input>
            <Button style={{marginTop: "30px"}}variant='contained'>비밀번호 찾기</Button>
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
export default FindPwd;