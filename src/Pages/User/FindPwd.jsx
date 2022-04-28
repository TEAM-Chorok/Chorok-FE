import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../Elements/Container';
import { Input, Text, Grid} from '../../Elements/index';
import { Button } from '@mui/material';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const FindPwd = (props) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container>
        <Grid padding="30px 10px">
        <Header>
                <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} 
                onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
                <Text>비밀번호 찾기</Text>
            </Header>
        <FindPwdWrap>
            <form>
                <Text display="block">회원정보를 입력하시면 이메일로 <br />비밀번호 변경 링크를 보내드려요.</Text>
                <Input placeholder="이름" name="search_pw_name" 
                margin="20px auto 10px auto"></Input>
                <Input placeholder="이메일(아이디)" name="search_pw_id" type="email"></Input>
                <Button style={{marginTop: "30px"}}variant='contained' name="search_pw_submit" >비밀번호 찾기</Button>
                </form>
            </FindPwdWrap>
        </Grid>

      </Container>
    </React.Fragment>
  );
}

const FindPwdWrap = styled.div`
width: 100%;
height: 80%;
text-align: center;
margin: 30px auto;
`

const Header = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  margin: 10px auto;
`

export default FindPwd;