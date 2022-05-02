import { Input, Text} from '../../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '../../Elements/Grid';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Container from '../../Elements/Container';


const ProfileSetting = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container>
        <Grid padding="30px 10px">
          <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }}
              onClick={()=>history.goBack()}></ArrowBackIosNewOutlinedIcon>
              <Text>회원가입</Text>
          </Header>
          <ProfileWrap>
              <Text display="block">사용하실 닉네임과 프로필이미지를 <br />설정해주세요. 😀</Text>
              <Grid margin="20px auto 10px auto" >
                {/* 프로필 이미지 미리보기 */}
                <Image src="sample.jpeg"/>
              </Grid>
                {/* 미리보기 클릭하면 input type=file 오픈하기 */}
              <Input type="file" margin="20px auto" display="none" name="signup_profile_img"></Input>
              <Input display="inline-block" placeholder="닉네임" margin="10px 12px 10px 0px" width="233px" name="signup_profile_nickname"></Input>
              <Button style={{fontSize:"12px", height:"40px"}} variant='contained' >중복확인</Button>
              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none">사용가능한 닉네임입니다.</Text>
              
              <Button style={{display:"block", margin:"160px auto auto auto", width:"160px"}}variant='contained' name="signup_submit">회원가입</Button>
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
margin: 30px auto;`

const Image = styled.img`
width: 100px;
height: 100px;
border-radius:50px;
`
export default ProfileSetting;