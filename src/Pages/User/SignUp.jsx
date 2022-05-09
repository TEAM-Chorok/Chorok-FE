import { Input, Text, Container} from '../../Elements/index';
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Grid from '../../Elements/Grid';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';
//1. 회원가입 이메일 . 비밀번호 . 닉네임 정규식  > const emailCheck, passwordCheck, nicknameCheck
//2. 프로필 이미지 용량 제한

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const [nextPage, setNextPage] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordChk, setPasswordChk] = React.useState("");
  const [profileImgUrl, setProfileImageUrl] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [preview, setPreview] = React.useState("sample.jpeg");

  //회원가입페이지 1 > 2 로 넘어가는 변수
  const showNextPage = () => {
    setNextPage(false);
  }
  //이미지 미리보기 부분 클릭시 input클릭되게 연동
  const profileImageRef = useRef("");
  const handleClick = () => {
    profileImageRef.current.click();
  }

// Base64로 인코딩하여 미리보기 이미지 출력
  const reader = new FileReader();
  const encodeFileToBase64 = (fileBlob) => {
    reader.readAsDataURL(fileBlob);
    return new Promise(() => {
      reader.onload = () => {
        setPreview(reader.result);
      }
    })
  }
  //email& 비밀번호 정규식  
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  //콘솔 대신 input창 아래 혹은 상단에 표시
  const emailCheck = (username) => {
    return emailRegEx.test(username);
  }
  const passwordCheck = (password) => {
    if(password.match(passwordRegEx)===null) {
      console.log('비밀번호 형식을 확인해주세요');
      return;
    }else{
      console.log('비밀번호 형식이 맞아요');
    }
  }
  const passwordDoubleCheck = (password, passwordChk) => {
    if(password !== passwordChk){
      console.log('비밀번호가 다릅니다.');
      return;
    }else{
      console.log('비밀번호가 동일합니다');
    }
  }

  const signUp = (username, password, profileImgUrl, nickname) => {
    // 나중에 여기서 dispatch해서 넘겨줄것
    dispatch(userActions.signUpDB(username, password, profileImgUrl, nickname));
    console.log(username, password, profileImgUrl, nickname); 
    //환영 페이지 
    setTimeout(() => {
      setLoading(true)
    }, 100);
  }
  //환영페이지 return
  if(loading === true) {
    return (
      <>
        <Container>
          <Grid padding="30px 0px" width="100%" height="800px"> 
            <div style={{textAlign:"center", width: "100%", margin: "300px 0px"}}>
              <div>환영합니다!</div>
              <div>공간을 바꿔줄 다양한 식물을</div>
              <div>만나보세요!</div>
            </div>
          </Grid>
        </Container>
      </>
    )
  }
  return (
    <React.Fragment>
      <Container>
        <Grid padding="30px 0px" width="100%">
          {/* <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} 
              onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
              <Text>회원가입</Text>
          </Header> */}
        {nextPage ? 
          <SingUpPage>
              <Text margin="88px 0px 32px 12px" fontSize="20px" display="block" bold>반가워요! 이메일과 비밀번호를 <br />입력해주세요. 😀</Text>
              <Input 
              _onChange={(e)=>{setUsername(e.target.value); 
                              emailCheck(e.target.value)}} 
              placeholder="이메일(아이디)" name="signup_id" type="email" 
              display="inline-block"  margin="10px 10px 10px auto" height="52px" width="100%" padding="0px 0px 0px 20px" border="1px solid #D5D8DB"></Input>
              <Button 
              style={{position:"absolute", top:"31%", right:"15px", color:"#0AAF42", fontSize:"12px", height:"40px"}} variant='text'>중복확인</Button>
              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none">사용가능한 이메일입니다.</Text>
              <Input 
              _onChange={(e)=>{setPassword(e.target.value); 
                              passwordCheck(e.target.value)}} 
              placeholder="비밀번호" type="password" name="signup_pwd" height="52px" width="100%" padding="0px 0px 0px 20px" border="1px solid #D5D8DB"
              margin="32px 0px 0px 0px"></Input>
              <Input 
              _onChange={(e)=>{setPasswordChk(e.target.value); 
                              passwordDoubleCheck(password, e.target.value)}} 
              placeholder="비밀번호 확인" type="password" name="signup_pwd_check" height="52px" width="100%" padding="0px 0px 0px 20px" border="1px solid #D5D8DB"></Input>
              <Text fontSize="0.7em" color="grey">비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요</Text>
              <Button style={{display:"block", margin:"95px auto auto auto", width:"150px", height:"40px", boxShadow:"none", backgroundColor:"#F8F8F8", color:"#D5D8DB", borderRadius:"50px"}} variant='contained'
              onClick={() => {showNextPage()}}>다음으로</Button>
          </SingUpPage> : 

          <ProfileWrap>
              <Text margin="88px 0px 32px 12px" fontSize="20px" display="block" bold>사용하실 닉네임과 프로필이미지를 <br />설정해주세요. 😀</Text>

                {/* 미리보기 클릭하면 input type=file 오픈하기 */}
              <Grid margin="50px auto 10px auto" 
              // _onClick={() => document.getElementById('profileUpdate').click()} 
              _onClick={handleClick}>
                {/* 프로필 이미지 미리보기 */}
                {preview && (
                <Image
                  src={preview}
                  alt="preview-img"/>
              )}
              </Grid>
              <input 
              ref = {profileImageRef}
              onChange={(e)=>{setProfileImageUrl(e.target.value); 
                              encodeFileToBase64(e.target.files[0]);}} 
              type="file" 
              name="signup_profile_img" id="profileUpdate"
              style={{margin:"20px auto", display:"none"}} ></input>
              <Input  
              _onChange={(e) => setNickname(e.target.value)} 
              placeholder="닉네임" name="signup_profile_nickname"
               display="inline-block" margin="10px 12px 10px 0px" height="52px" width="100%" padding="0px 0px 0px 20px" border="1px solid #D5D8DB" ></Input>
              <Button style={{position:"absolute", top:"68%", right:"15px", color:"#0AAF42", fontSize:"12px", height:"40px"}} variant='text' >중복확인</Button>
              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none">사용가능한 닉네임입니다.</Text>
              
              <Button style={{display:"block", margin:"95px auto auto auto", width:"150px", height:"40px", boxShadow:"none", backgroundColor:"#F8F8F8", color:"#D5D8DB", borderRadius:"50px"}} variant='contained' name="signup_submit" onClick={()=>signUp()}>회원가입</Button>
          </ProfileWrap>
        }
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
const SingUpPage = styled.div`
width: 100%;
height: 80%;
// text-align: center;
margin: 30px auto;
position: relative;
`
const ProfileWrap = styled.div`
width: 100%;
height: 80%;
// text-align: center;
margin: 30px auto;
position: relative;
`

const Image = styled.img`
width: 134px;
height: 134px;
border-radius: 100px;
`
export default SignUp;