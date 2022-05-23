import { Input, Text, Grid, Container} from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { GeneralHeader } from '../../Components';

const ChangePwd = (props) => {
  const history = useHistory();
  const tempPwdRef = React.useRef("");
  const newPwdRef = React.useRef("");
  const newPwdCheckRef = React.useRef("");

  //비밀번호 정규식
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  useEffect(() => {
    if(newPwdCheckRef === "" || newPwdRef === ""){
      alert('모든 칸을 채워주세요!');
      return;
    }
    if(newPwdRef === newPwdCheckRef){
      alert('비밀번호가 일치하지 않습니다. 다시 확인하여 주세요.');
      return;
    }
  }, []);
  
  return (
      <React.Fragment>
        <Container>
            <GeneralHeader title="비밀번호 변경" size="base" />
            <Button style={{fontSize:"16px", position: "absolute", right: "0px", top:"16px"}}>완료</Button>
          </Container>
        <Container type="np">
            <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
        </Container>
        <Container>
          <Grid width="100%">
            <ChangePwdWrap>
              <Text display="block" color="#718096">변경하실 비밀번호를 입력해주세요.  :&#41;</Text>
              <Input type="password" placeholder="임시 비밀번호"></Input>
              <input style={{width:"93%", height: "56px", borderRadius:"50px",
              margin:"20px auto 0px auto", border:"1px solid darkgrey", paddingLeft:"20px"}}  placeholder="임시 비밀번호" name="change_pwd_temp_pwd" ref={tempPwdRef}  ></input>
              <input style={{width:"93%", height: "56px", borderRadius:"50px",
              margin:"20px auto 0px auto", border:"1px solid darkgrey", paddingLeft:"20px"}} placeholder="새로운 비밀번호" name="change_pwd_new_pwd" ref={newPwdRef}
              type="password"></input>
              <input style={{width:"93%", height: "56px", borderRadius:"50px",
              margin:"20px auto 0px auto", border:"1px solid darkgrey", paddingLeft:"20px"}} placeholder="새로운 비밀번호 확인" name="change_pwd_new_pwd_check"
              ref={newPwdCheckRef}
              type="password"></input>

              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none" color="#0AAF42">비밀번호가 일치합니다.</Text>
              <Text display="none" color="red">비밀번호가 일치하지 않습니다.</Text>
          </ChangePwdWrap>
          </Grid>
        </Container>
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

`
export default ChangePwd;