import { Input, Button, Text, Grid, Container} from '../../Elements/index';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { GeneralHeader } from '../../Components';
import { pwdCheck } from '../../Shared/RegEx';
import { ReactComponent as HideIcon } from '../../Assets/img/hidePassword.svg';
import { ReactComponent as ShowIcon } from '../../Assets/img/showPassword.svg';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';
import { useEffect } from 'react';


const ChangePwd = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogin = localStorage.getItem('token') ? true : false ;
  
  const url = new URL(window.location.href);
  const token = url.searchParams.get("token");
  const email = url.searchParams.get("email");

  const [password, setPassword] = React.useState("");
  const [passwordChk, setPasswordChk] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
    
  //비밀번호 정규식
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  //비밀번호 일치 확인
    const passwordMatch = (password, passwordChk) => {
      if (password === passwordChk) {
        return true;
      } else { return false; }
    }
    
    useEffect(() => {
      console.log(password);
    }, [password])

    const changePwd = () => {
      if(isLogin){ //로그인 했을 때 비밀번호 변경
        dispatch(userActions.changePwdDB(password));
      }else {
        //이메일 인증 통해서 비밀번호 변경
        console.log(token, email, password);
        dispatch(userActions.changePwd_non_loginDB(token, email, password));
      }
    }
  
      return (
      <React.Fragment>
        <GeneralHeader title="비밀번호 변경" size="base" />
        <AbsoluteBox>
          {passwordMatch(password, passwordChk) === false ?
            <Button type="tran" disabled="true">
              <Text color="#A8A8A8">완료</Text>
            </Button> :
            <Button type="tran" _onClick={() => changePwd()}>
              <Text color="#0AAF42" weight="700">완료</Text>
            </Button>
          }
        </AbsoluteBox>
  
        <Container type="np">
          <Grid height="1px" width="100%" bg="#E0E0E0" />
        </Container>
        <Container>
          <Grid margin="12px 4px">
            <Text weight="400">변경하실 비밀번호를 입력해주세요 :)</Text>
          </Grid>
  
  {/* 비밀번호 동일할 때  */}
          <Grid width="100%"> 
            {passwordMatch(password, passwordChk) || passwordChk === "" ? 
              <Grid width="100%" position="relative">
                <Grid is_flex width="100%" position="relative">
                  <Input
                    _value={password}
                    margin="4px auto 0px auto"
                    type={showPassword ? "shownPassword" : "password"}
                    _onChange={(e) => {
                      setPassword(e.target.value);
                      pwdCheck(e.target.value)
                    }}
                    border="1px solid #D5D8DB"
                    placeholder="비밀번호" ></Input>
  
                  <HideBtn style={{ position: "absolute", top: "18px", right: "8px" }}
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ShowIcon /> : <HideIcon />}</HideBtn>
                </Grid>
                  <Grid margin="4px 4px 12px 20px">
                    {password !== "" && !pwdCheck(password) ?
                      <Text size="xxsmall" color="#FA4D56"> 영문 대문자, 소문자, 숫자를 포함하여 8~20자를 입력해주세요.</Text> : ""
                    }
                  </Grid>
                <Grid is_flex width="100%" position="relative">
                  <Input
                    type={showPassword ? "shownPassword" : "password"}
                    border="1px solid #D5D8DB"
                    _value={passwordChk}
                    margin="0px auto 4px auto"
                    _onChange={(e) => {
                      setPasswordChk(e.target.value);
                      pwdCheck(e.target.value);
                    }}
                    placeholder="비밀번호 확인"  ></Input>
                  <HideBtn style={{ position: "absolute", top: "16px", right: "8px" }}
                    onClick={() => setShowPassword(!showPassword)} >
                    {showPassword ? <ShowIcon /> : <HideIcon />}</HideBtn>
                </Grid>
              </Grid>
  
              :
  // 비밀번호 다를 때
              <Grid width="100%" position="relative">
                <Input
                  type={showPassword ? "shownPassword" : "password"}
                  _value={password}
                  margin="4px auto 8px auto"
                  _onChange={(e) => {
                    setPassword(e.target.value);
                    pwdCheck(e.target.value)
                  }}
                  border="1px solid #FA4D56"
                  placeholder="비밀번호"  ></Input>
  
                <HideBtn style={{ position: "absolute", top: "18px", right: "8px" }}
                  onClick={() => setShowPassword(!showPassword)}  >
                  {showPassword ? <ShowIcon /> : <HideIcon />}</HideBtn>
  
                <Grid is_flex width="100%" position="relative">
                  <Input
                    margin="4px auto 4px auto"
                    type={showPassword ? "shownPassword" : "password"}
                    border="1px solid #FA4D56"
                    _value={passwordChk}
                    _onChange={(e) => {
                      setPasswordChk(e.target.value);
                      pwdCheck(e.target.value);
                    }}
                    placeholder="비밀번호 확인" />
  
                  <HideBtn style={{ position: "absolute", top: "20px", right: "8px" }}
                    onClick={() => setShowPassword(!showPassword)}  >
                    {showPassword ? <ShowIcon /> : <HideIcon />}</HideBtn>
                </Grid>
              </Grid>
  
            }
  
            {passwordChk === "" ? null : (
               passwordMatch(password, passwordChk) === true ?
                <Grid margin="-4px 4px 12px 4px">
                  <Text size="xsmall" color="#24A148"> 비밀번호가 일치합니다.</Text>
                </Grid> :
                <Grid margin="-4px 4px 12px 4px">
                  <Text size="xsmall" color="#FA4D56"> 비밀번호가 일치하지 않습니다.</Text>
                </Grid>
              )
            }
  
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
  const HideBtn = styled.button`
    width:fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;
  `
  
  const AbsoluteBox = styled.div`
    position: absolute;
    top: 0px;
    right: 12px;
  `
  
  export default ChangePwd;