import { Input, Text} from '../../Elements/index';
import { Button } from '@mui/material';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Grid from '../../Elements/Grid';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useHistory } from 'react-router-dom';
import Container from '../../Elements/Container';
import { useEffect } from 'react';
//1. 회원가입 이메일 . 비밀번호 . 닉네임 정규식  > const emailCheck, passwordCheck, nicknameCheck
//2. 프로필 이미지 용량 제한

const SignUp = () => {
  const history = useHistory();

  const [nextPage, setNextPage] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
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
    return new Promise((reseolve) => {
      reader.onload = () => {
        setPreview(reader.result);
      }
    })
  }
  //나중에 여기서 dispatch해서 넘겨줄것
  const signUp = () => {
    console.log(username, password, profileImgUrl, nickname);
  }

  return (
    <React.Fragment>
      <Container>
        <Grid padding="30px 10px">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} 
              onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
              <Text>회원가입</Text>
          </Header>
        {nextPage ? 
          <FindPwdWrap>
              <Text display="block">반가워요! 이메일과 비밀번호를 <br />입력해주세요. 😀</Text>
              <Input _onChange={(e)=>setUsername(e.target.value)} placeholder="이메일(아이디)" name="signup_id" type="email" 
              display="inline-block"  margin="10px 10px 10px auto" width="233px"></Input>
              <Button style={{fontSize:"12px", height:"40px"}} variant='contained'>중복확인</Button>
              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none">사용가능한 이메일입니다.</Text>
              <hr />
              <Input _onChange={(e)=>setPassword(e.target.value)} placeholder="비밀번호" type="password" name="signup_pwd"></Input>
              <Input placeholder="비밀번호 확인" type="password" name="signup_pwd_check"></Input>
              <Text fontSize="0.7em">비밀번호는 영문 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요</Text>
              <Button style={{display:"block", margin:"160px auto auto auto", width:"160px"}} variant='contained'
              onClick={() => {showNextPage()}}>다음</Button>
          </FindPwdWrap> : 

          <ProfileWrap>
              <Text display="block">사용하실 닉네임과 프로필이미지를 <br />설정해주세요. 😀</Text>

                {/* 미리보기 클릭하면 input type=file 오픈하기 */}
              <Grid margin="20px auto 10px auto" 
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
               display="inline-block" margin="10px 12px 10px 0px" width="233px" ></Input>
              <Button style={{fontSize:"12px", height:"40px"}} variant='contained' >중복확인</Button>
              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none">사용가능한 닉네임입니다.</Text>
              
              <Button style={{display:"block", margin:"160px auto auto auto", width:"160px"}}variant='contained' name="signup_submit" onClick={()=>signUp()}>회원가입</Button>
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
const FindPwdWrap = styled.div`
width: 100%;
height: 80%;
text-align: center;
margin: 30px auto;
`
const ProfileWrap = styled.div`
width: 100%;
height: 80%;
text-align: center;
margin: 30px auto;`

const Image = styled.img`
width: 100px;
height: 100px;
border-radius:50px;
`
export default SignUp;