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
          <Grid padding="30px 0px" width="100%">
            <GeneralHeader title="비밀번호 변경" size="h5" />
            <ChangePwdWrap>
              <Text display="block" color="#718096">변경하실 비밀번호를 입력해주세요.  :&#41;</Text>
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

              <Button style={{display:"block", margin:"160px auto auto auto", width:"148px", height:"38px", color:"white", backgroundColor:"#C1C7CD", borderRadius:"20px"}}variant='text' name="signup_submit">변경하기</Button>
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
height: 80%;
margin: 60px auto 33px auto;

`
export default ChangePwd;