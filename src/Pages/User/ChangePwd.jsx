import { Input, Text, Grid} from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';

const ChangePwd = (props) => {
  const history = useHistory();
  const tempPwdRef = React.useRef("");
  const newPwdRef = React.useRef("");
  const newPwdCheckRef = React.useRef("");

  if(tempPwdRef === "" || newPwdCheckRef === "" || newPwdRef === ""){
    alert('모든 칸을 채워주세요!');
    return;
  }
  if(newPwdRef !== newPwdCheckRef){
    alert('비밀번호가 일치하지 않습니다. 다시 확인하여 주세요.');
    return;
  }
  return (
      <React.Fragment>
        <Grid padding="30px 10px">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} 
              onClick={()=> history.replace('/')}></ArrowBackIosNewOutlinedIcon>
              <Text>비밀번호 변경</Text>
          </Header>
          <ChangePwdWrap>
            <Text display="block">비밀번호 변경을 위해 <br />임시비밀번호와 새로운 비밀번호를 입력해주세요.</Text>
            <Input placeholder="임시 비밀번호" name="change_pwd_temp_pwd" ref={tempPwdRef}
             margin="20px auto 0px auto" ></Input>
            <Input placeholder="새로운 비밀번호" name="change_pwd_new_pwd" ref={newPwdRef}
            type="password" margin="10px auto" ></Input>
            <Input placeholder="새로운 비밀번호 확인" name="change_pwd_new_pwd_check" 
            ref={newPwdCheckRef}
            type="password" margin="10px auto"></Input>
            <Button style={{marginTop: "30px"}}variant='contained' name="change_pw_submit" >비밀번호 변경하기</Button>
        </ChangePwdWrap>
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
const ChangePwdWrap = styled.div`
width: 100%;
height: 80%;
text-align: center;
margin: 30px auto;
`
export default ChangePwd;