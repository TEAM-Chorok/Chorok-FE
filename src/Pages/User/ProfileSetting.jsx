import { Input, Text, Grid, Container, Image} from '../../Elements';
import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useDispatch } from 'react-redux';
import { GeneralHeader } from '../../Components';
import { actionCreators as userActions } from '../../Redux/Modules/User';
import { ReactComponent as GoBackIcon } from "../../Assets/img/Icons/goBackIcon.svg"
import { userAPI } from '../../Shared/api';
import { useSelector } from 'react-redux';


// 프로필 편집  --- 이미지 수정 안됨
//나눠서 api 짜고 dispatch 두가 걸깅
const ProfileSetting = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(state=>state.user?.user);

  const previousImgUrl = user?.profileImgUrl;
  const previousNickname = user?.nickname;
  const previousProfileMsg= user?.profileMsg;

  const [nickname, setNickname] = React.useState(previousNickname);
  const [profileImgUrl, setProfileImgUrl] = React.useState("");
  const [preview, setPreview] = React.useState("");
  const [describeSelf, setDescribeSelf] = React.useState();

  const [openResult, setOpenResult] = React.useState();
  const [duplicatedNickname, setDuplicatedNickname] = React.useState();

  const profileRef = React.useRef("");
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
  const [disable, setDisable] = React.useState(true);

  //닉네임 중복 확인
  const checkDuplicatedNickname = (nickname) => {
    userAPI
    .nicknameCheck(nickname)
    .then((res) => {
      setDuplicatedNickname(false);
    })
    .catch((error) => {
      console.log(error);
      setDuplicatedNickname(true);
    })
  }

  React.useEffect(() => {
      if(nickname === previousNickname){
        { profileImgUrl === "" ? 
          setDisable(true) : 
          setDisable(false);
        }
      }else {
        { duplicatedNickname !== true && duplicatedNickname !== false ? 
          setDisable(true):
          setDisable(false);
        }
      }
  }, [preview, nickname, describeSelf, duplicatedNickname])
  

  //프로필 수정 dispatch 요청
  const editProfile = () => {

    {profileImgUrl === "" ? 

      dispatch(userActions.editProfileDB(nickname, describeSelf))  : 

      dispatch(userActions.editProfileDB(nickname, describeSelf));
      // dispatch(userActions.editProfileImgDB(profileImgUrl));

    }
    
  }

  return (
    <React.Fragment>
      <Container>
        <Header>
          <GoBackIcon style={{ position: "absolute",  left: "0px", top:"12px"}} 
              onClick={() => history.goBack()}/>
          <Text line="2.5em">프로필 편집</Text>
          {disable || duplicatedNickname ? 
              <Button 
                  disabled={disable || duplicatedNickname}
                  style={{fontSize:"16px", position: "absolute", right: "0px", top:"0px"}}>완료</Button> : 
              <Button
                  onClick={()=>{editProfile()}}
                  style={{color: "#24A148", fontSize:"16px", position: "absolute", right: "0px", top:"0px"}}>완료</Button>
          }
        </Header>
      </Container>
      <Container type="np">
          <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
      </Container>
      <Container>
         <Grid width="100%">
          <ProfileWrap>
                {/* 프로필 이미지 미리보기 */}
                {preview? 
                    <Image
                        margin="10px auto"
                        type="circle"  
                        imgUrl={preview}
                        alt="preview-img"
                        size="120px"/> : 
                    (previousImgUrl !== "" ? 
                        <Image
                            margin="10px auto"
                            type="circle"  
                            imgUrl={previousImgUrl}
                            alt="preview-img"
                            size="120px"/> :
                        <Image
                            margin="10px auto"
                            type="circle"  
                            imgUrl="/img/basicPlantImg.png"
                            alt="preview-img"
                            size="120px"/>

                    )
                }
                {/* <Image size="134px" imgUrl="sample.jpeg" type="circle" margin="50px auto 40px auto"/> */}
                {/* 미리보기 클릭하면 input type=file 오픈하기 */}
                <input ref={profileRef} 
                style={{display:"none"}} type="file"
                onChange={(e)=>{ 
                    encodeFileToBase64(e.target.files[0]);
                    setProfileImgUrl(e.target.files[0]); }} />
                <Button style={{display:"block", color:"#0AAF42", margin: "0px auto", fontWeight:"700"}} 
                        onClick={handleClick}> 사진 바꾸기 </Button>
              </ProfileWrap>
              </Grid>
              </Container>
              <Container type="np">
                  <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
              </Container>
              <Container>
              <label htmlFor='nickname'>사용자 닉네임</label>
                <Input 
                  type="square"
                  _onChange={(e)=>setNickname(e.target.value)}
                  id="nickname" defaultValue={previousNickname} placeholder="별명" 
                  width="100%" height="48px" borderRadius="6px" border="1px solid #C6C6C6" padding="5px 0px 5px 10px" />
                  <Grid width="100%" position="relative" height="44px" display="flex" align="center">
                  {/* 중복확인 후에 아래 텍스트 출력 */}
                  {openResult? 
                    <Grid  margin="0px 0px 0px 10px">
                      {duplicatedNickname  ? 
                        <Text size="xsmall" color="#FA4D56">이미 존재하는 닉네임입니다.</Text> : 
                        <Text size="xsmall" color="#0AAF42">사용하실 수 있는 닉네임입니다.</Text> 
                      }
                    </Grid>: 
                    null
                  }
                    <Button 
                    disabled={!nickname}
                    onClick={()=>{checkDuplicatedNickname(nickname); setOpenResult(true);}}
                    style={{position:"absolute", top:"0px", right:"0px", color:"#0AAF42", size:"xsmall", height:"40px"}} variant='text' >중복확인</Button>
                  </Grid>
              <label htmlFor='describe'>소개</label>
                <Input 
                  type="square"
                  _onChange={(e)=>setDescribeSelf(e.target.value)}
                  id="describe" defaultValue={previousProfileMsg} placeholder="소개" 
                  width="100%" height="48px" borderRadius="6px" border="1px solid #C6C6C6" padding="5px 0px 5px 10px" />
              
      </Container>
    </React.Fragment>
    );
}
const Header = styled.div`      
    position: relative; 
    width: 100%;
    text-align: center;
`
const ProfileWrap = styled.div`
width: 100%;
text-align: center;
margin: 0px auto;
position: relative;
`
export default ProfileSetting;