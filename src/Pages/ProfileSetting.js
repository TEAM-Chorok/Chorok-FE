import { Input, Text} from '../Elements/index';
import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Grid from '../Elements/Grid';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const ProfileSetting = () => {
  return (
    <React.Fragment>
      <Grid padding="30px 10px">
        <Header>
            <ArrowBackIosNewOutlinedIcon style={{position: "relative", left: "-320px", top:"8px" }}></ArrowBackIosNewOutlinedIcon>
            <Text>회원가입</Text>
        </Header>
        <ProfileWrap>
            <Text display="block">사용하실 닉네임과 프로필이미지를 </Text>
            <Text display="block">설정해주세요. 😀</Text>
            <div>
              {/* 프로필 이미지 미리보기 */}
            <img src="favicon.ico" style={{width:"100px", height: "100px", margin:"30px auto 10px auto", borderRadius:"50px"}}/>
            </div>
            <Input type="file" margin="20px auto" display="none" name="signup_profile_img"></Input>
            <Input display="inline-block" placeholder="닉네임" margin="10px 12px 10px 0px" width="233px" name="signup_profile_nickname"></Input>
            <Button style={{fontSize:"12px", height:"40px"}} variant='contained' >중복확인</Button>
            {/* 중복확인 후에 아래 텍스트 출력 */}
            <Text display="none">사용가능한 닉네임입니다.</Text>
            
            <Button style={{display:"block", margin:"160px auto auto auto", width:"160px"}}variant='contained' name="signup_submit">회원가입</Button>
        </ProfileWrap>
      </Grid>
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
`

export default ProfileSetting;