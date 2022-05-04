import { Input, Text, Grid, Container} from '../../Elements';
import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';


// 프로필 편집
const ProfileSetting = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [preview, setPreview] = React.useState("https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg");

  const nicknameRef = React.useRef("닉네임");
  const profileRef = React.useRef("https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg");
  //이미지 미리보기 부분 클릭시 input클릭되게 연동
  const handleClick = () => {
    profileRef.current.click();
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

  return (
    <React.Fragment>
      <Container>
        <Grid padding="30px 0px" width="100%">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }}
              onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
              <Text bold>프로필 편집</Text>
          </Header>
          <ProfileWrap>
                {/* 프로필 이미지 미리보기 */}
                <Grid margin="50px auto"
                _onClick={handleClick}>
                  {preview && (
                    <Image
                      src={preview}
                      alt="preview-img"/>
                  )}  
                </Grid>
                
                {/* <Image size="134px" imgUrl="sample.jpeg" type="circle" margin="50px auto 40px auto"/> */}
                {/* 미리보기 클릭하면 input type=file 오픈하기 */}
              <input 
              ref={profileRef}
              type="file" 
              onChange={(e)=>{ 
                encodeFileToBase64(e.target.files[0]);}}
              style={{margin:"20px auto", display:"none" }} name="edit_profile_img"></input>
              <input 
              ref={nicknameRef}
              display="inline-block" defaultValue="닉네임"  name="signup_profile_nickname"
              style={{margin:"10px auto 5px auto", width: "312px", height: "56px", borderRadius:"50px", padding:"0px 20px", border:"1px solid #D5D8DB"}}></input>
              <Button style={{position:"absolute", top:"56%", right:"25px", color:"#0AAF42", fontSize:"12px", height:"40px"}} variant='text' onClick={()=>dispatch(userActions.logIn())} >중복확인</Button>
              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none" color="#0AAF42">사용가능한 닉네임입니다.</Text>
              <Text display="none" color="red">이미 존재하는 닉네임입니다.</Text>
              <Button
              onClick={()=>console.log(nicknameRef.current.value, profileRef.current.value)}
              style={{display:"block", margin:"160px auto auto auto", width:"148px", height:"38px", color:"white", backgroundColor:"#C1C7CD", borderRadius:"20px"}}variant='text' name="signup_submit">회원가입</Button>
          </ProfileWrap>
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
const ProfileWrap = styled.div`
width: 100%;
height: 80%;
text-align: center;
margin: 30px auto;
position: relative;
`
const Image = styled.img`
width: 134px;
height: 134px;
border-radius: 100px;
`
export default ProfileSetting;