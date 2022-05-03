import { Input, Text, Image, Grid} from '../../Elements';
import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Container from '../../Elements/Container';

// 프로필 편집
const ProfileSetting = () => {
  const history = useHistory();

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
                <Image size="134px" imgUrl="sample.jpeg" type="circle" margin="50px auto 40px auto"/>
                {/* 미리보기 클릭하면 input type=file 오픈하기 */}
              <Input type="file" margin="20px auto" display="none" name="signup_profile_img"></Input>
              <Input display="inline-block" defaultValue="닉네임" margin="10px auto 5px auto" width="312px" height="56px" name="signup_profile_nickname" borderRadius="50px" padding="0px 20px"></Input>
              <Button style={{position:"absolute", top:"54%", right:"30px", color:"#0AAF42", fontSize:"12px", height:"40px"}} variant='text' >중복확인</Button>
              {/* 중복확인 후에 아래 텍스트 출력 */}
              <Text display="none" color="#0AAF42">사용가능한 닉네임입니다.</Text>
              <Text display="none" color="red">이미 존재하는 닉네임입니다.</Text>
              <Button style={{display:"block", margin:"160px auto auto auto", width:"148px", height:"38px", color:"white", backgroundColor:"#C1C7CD", borderRadius:"20px"}}variant='text' name="signup_submit">회원가입</Button>
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

export default ProfileSetting;