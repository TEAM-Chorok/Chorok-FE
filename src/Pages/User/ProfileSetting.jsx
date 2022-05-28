import { Input, Text, Grid, Container, Image, Button } from '../../Elements';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../Redux/Modules/User';
import { ReactComponent as GoBackIcon } from "../../Assets/img/Icons/goBackIcon.svg"
import { userAPI } from '../../Shared/api';
import { useSelector } from 'react-redux';
import { GeneralHeader } from '../../Components';


const ProfileSetting = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user?.user);

  const previousImgUrl = user?.profileImgUrl;
  const previousNickname = user?.nickname;
  const previousProfileMsg = user?.profileMsg;

  const [nickname, setNickname] = React.useState(user?.nickname);
  const [profileImgUrl, setProfileImgUrl] = React.useState("");
  const [preview, setPreview] = React.useState(user?.profileImgUrl);
  const [profileMsg, setprofileMsg] = React.useState(user?.profileMsg);

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
        console.log(res.data.StatusCode);
        if (res.data.StatusCode === "400 BAD_REQUEST") {
          setDuplicatedNickname(true);
          if (nickname === previousNickname) {
            setDuplicatedNickname(false);
          }
        } else {
          setDuplicatedNickname(false);
        }
      })
      .catch((error) => {
        console.log(error);

      })
  }

  React.useEffect(() => {
    if (nickname === previousNickname) {
      {
        profileImgUrl === "" && profileMsg === previousProfileMsg ?
          setDisable(true) :
          setDisable(false);
      }
    } else {
      {
        duplicatedNickname === false ?
          setDisable(false) :
          setDisable(true);
      }
    }
  }, [preview, nickname, duplicatedNickname, profileMsg])


  //프로필 수정 dispatch 요청
  const editProfile = () => {
    dispatch(userActions.editProfileDB(nickname, profileImgUrl, preview, profileMsg))
  }



  return (
    <React.Fragment>
      <Header>
          <div onClick={()=>history.goBack()} className="grid">
            <GoBackIcon 
              style={{ width:"15px", height:"15px" }}/>
          </div>
          <Text line="2.5em" bold size="base">프로필 편집</Text>
        <div className="doneButton">
        {disable || duplicatedNickname ?
          <Button type="tran" disabled={disable}>
            <Text size="base" color="#A8A8A8">
              완료
            </Text>
          </Button>
          :
          <Button type="tran" _onClick={() => { editProfile(); }} className="doneButton">
            <Text size="base" weight="700" color="#0AAF42">
              완료
            </Text>
          </Button>
        }
        </div>
      </Header>
      <Container type="np">
        <Grid height="1px" width="100%" bg="#E0E0E0" />
      </Container>
      <Container>
        <Grid width="100%">
          <ProfileWrap>
            {/* 프로필 이미지 미리보기 */}
            {profileImgUrl !== "" ?

              <Image
                margin="10px auto"
                type="circle"
                imgUrl={preview}
                alt="preview-img"
                size="120px" /> :

              (preview === "null" || preview === null ?
                <Image
                  margin="10px auto"
                  type="circle"
                  imgUrl="/img/basicPlantImg.png"
                  alt="preview-img"
                  size="120px" /> :

                <Image
                  margin="10px auto"
                  type="circle"
                  imgUrl={previousImgUrl}
                  alt="preview-img"
                  size="120px" />
              )
            }
            {/* <Image size="134px" imgUrl="sample.jpeg" type="circle" margin="50px auto 40px auto"/> */}
            {/* 미리보기 클릭하면 input type=file 오픈하기 */}
            <input ref={profileRef}
              style={{ display: "none" }} type="file"
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
                setProfileImgUrl(e.target.files[0]);
              }} />
            <Button type="tran" _onClick={handleClick}>
              <Text size="small" weight="700" color="#0AAF42">사진 바꾸기</Text>
            </Button>
          </ProfileWrap>
        </Grid>
      </Container>
      <Container type="np">
        <Grid height="1px" width="100%" bg="#E0E0E0" />

      </Container>
      <Container>
        <Input
          type="squarenp"
          label="사용자 이름"
          _onChange={(e) => setNickname(e.target.value)}
          id="nickname" 
          max="8"
          defaultValue={previousNickname}
          placeholder="별명을 입력해주세요. ( 최대 8자 )" />
        <Grid width="100%" position="relative" height="44px" display="flex" align="center">
          {/* 중복확인 후에 아래 텍스트 출력 */}
          {openResult ?
            <TextBox>
              {duplicatedNickname ?
                <Text size="xsmall" color="#FA4D56">이미 존재하는 닉네임입니다.</Text> :
                <Text size="xsmall" color="#0AAF42">사용하실 수 있는 닉네임입니다.</Text>
              }
            </TextBox> :
            null
          }
          <ButtonBox>
            <Button
              type="tran"
              disabled={nickname === previousNickname}
              _onClick={() => { checkDuplicatedNickname(nickname); setOpenResult(true); }}>
              <Text size="xsmall" color="#6F6F6F">중복확인</Text>
            </Button>
          </ButtonBox>
        </Grid>
        <Input
          type="squarenp"
          label="소개" max="18"
          _onChange={(e) => setprofileMsg(e.target.value)}
          id="describe" defaultValue={previousProfileMsg} placeholder="소개"
          width="100%" height="48px" borderRadius="6px" border="1px solid #C6C6C6" padding="5px 0px 5px 10px" />

      </Container>
    </React.Fragment>
  );
}
const Header = styled.div`      
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 44px;
    text-align: center;
    .backIcon{
      position: absolute;
      left: 16px;
    }
    .doneButton{
      position: absolute;
      right: 12px;
    }
    .grid {
      position: absolute;
      display: flex;
      width: 24px;
      height: 24px;
      left: 8px;
      align-items: center;
    }
`
const ProfileWrap = styled.div`
width: 100%;
text-align: center;
margin: 0px auto;
position: relative;
`

const ButtonBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const TextBox = styled.div`
  position: absolute;
  top: 0;
  left: 4px;
`


export default ProfileSetting;