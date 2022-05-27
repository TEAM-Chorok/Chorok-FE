import { Input, Text, Grid, Container} from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { GeneralHeader } from '../../Components';
import { pwdCheck } from '../../Shared/RegEx';
import { ReactComponent as HideIcon } from '../../Assets/img/hidePassword.svg';
import { ReactComponent as ShowIcon } from '../../Assets/img/showPassword.svg';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';

const ChangePwd = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState("");
  const [passwordChk, setPasswordChk] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
    

  //비밀번호 정규식
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  //비밀번호 일치 확인
    const passwordMatch = () => {
      if(password === passwordChk) {
        return true;
      }else { return false;}
    }

    const changePwd = () => {
      dispatch(userActions.changePwdDB(password));
    }

  
  return (
      <React.Fragment>
        <Container>
            <GeneralHeader title="비밀번호 변경" size="base" />
            {passwordMatch() === false ? 
            <Button 
            disabled={passwordMatch() === false}
            style={{fontSize:"16px", position: "absolute", right: "0px", top:"16px"}}>완료</Button> :
            <Button 
            onClick={()=>changePwd()}
            style={{fontSize:"16px", position: "absolute", right: "0px", top:"16px", color:"#0AAF42", fontWeight:"700"}}>완료</Button>
            }
            
          </Container>
        <Container type="np">
            <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
        </Container>
        <Container>
          <Grid width="100%">
          {passwordMatch(password, passwordChk) || passwordChk === ""?
              <Grid width="100%" >
                <Grid width="100%">
                <Grid width="100%" position="relative">
                  <Input 
                  type={showPassword? "shownPassword" : "password"}
                  _onChange={(e)=>{setPassword(e.target.value); 
                                  pwdCheck(e.target.value)}} 
                                  border="1px solid #D5D8DB"
                  placeholder="비밀번호" 
                  margin="0px 0px 0px 0px" ></Input>

                  <HideBtn style={{position:"absolute", top:"32%", right:"8px"}}
                  onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword? <ShowIcon/> : <HideIcon/> }</HideBtn>
                </Grid>
                    <Grid  margin="0px 0px 8px 8px">
                      { password !== "" && !pwdCheck(password) ? 
                            <Text size="xxsmall" color="#FA4D56"> 영문 대문자, 소문자, 숫자를 포함하여 8~20자를 입력해주세요.</Text> : ""
                      }
                    </Grid>
                  </Grid>
                  <Grid width="100%" position="relative">
                    <Input 
                    type={showPassword? "shownPassword" : "password"}
                    border="1px solid #D5D8DB"
                    _onChange={(e)=>{setPasswordChk(e.target.value); 
                                    pwdCheck(e.target.value); }} 
                    placeholder="비밀번호 확인"  
                    margin="0px 0px 0px 0px"></Input>
                    
                    <HideBtn  style={{position:"absolute", top:"32%", right:"8px"}}
                    onClick={()=>setShowPassword(!showPassword)} >
                      {showPassword? <ShowIcon/> : <HideIcon/> }</HideBtn>
                  </Grid> 
                </Grid>

                : 
              <Grid width="100%">
                <Grid width="100%" position="relative">
                  <Input 
                  type={showPassword? "shownPassword" : "password"}
                  _onChange={(e)=>{setPassword(e.target.value); 
                                  pwdCheck(e.target.value)}} 
                  border="1px solid #FA4D56" 
                  placeholder="비밀번호" margin="0px 0px 8px 0px" ></Input>

                  <HideBtn  style={{position:"absolute", top:"32%", right:"8px"}}
                  onClick={()=>setShowPassword(!showPassword)}  >
                    {showPassword? <ShowIcon/> : <HideIcon/> }</HideBtn>
                </Grid>
              <Grid width="100%" position="relative">
                <Input 
                type={showPassword? "shownPassword" : "password"}
                 border="1px solid #FA4D56" 
                _onChange={(e)=>{setPasswordChk(e.target.value); 
                                pwdCheck(e.target.value); }} 
                placeholder="비밀번호 확인" margin="0px 0px 0px 0px" ></Input> 

                <HideBtn  style={{position:"absolute", top:"32%", right:"8px"}}
                onClick={()=>setShowPassword(!showPassword)}  >
                  {showPassword? <ShowIcon/> : <HideIcon/> }</HideBtn>
              </Grid>
              </Grid>
              
              }
              
              {passwordMatch(password, passwordChk) || passwordChk === ""?
                "" : 
                <Grid  margin="0px 0px 0px 10px">
                  <Text size="xsmall" color="#FA4D56"> 비밀번호가 일치하지 않습니다.</Text>
                </Grid>
              }

          </Grid>
        </Container>
      </React.Fragment>
  );
}
const HideBtn = styled.button`
  width:fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
`
export default ChangePwd;