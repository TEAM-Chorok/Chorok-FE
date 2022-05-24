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
              <Text margin="16px 0px 24px 8px" display="block" color="#718096">변경하실 비밀번호를 입력해주세요.  :&#41;</Text>
              <Input type="password" placeholder="비밀번호" _ref={newPwdRef} margin="0px 0px 8px 0px"></Input>
              <Input type="password" placeholder="비밀번호 확인" _ref={newPwdCheckRef} margin="0px 0px 8px 0px"></Input>

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