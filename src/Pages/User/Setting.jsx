import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GeneralHeader } from "../../Components";
import { Container, Grid, Permit, Text } from "../../Elements";
import { actionCreators as userActions } from "../../Redux/Modules/User";

const Setting = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userActions.logOutDB());
  }
  return (
    <React.Fragment>
      <Permit>
          <Grid width="100%">
            <GeneralHeader title="설정" size="base" />
            <Grid width="100%" height="1px" bg="#E0E0E0"/>
          </Grid>
        <Container type="np">
          <Grid width="100%">
            <ScrapSettingWrap>
              <SettingUpperDiv onClick={() => history.push('/setting/myposts')}>
                <Text>내가 쓴 초록톡</Text>
              </SettingUpperDiv>
              <SettingUpperDiv onClick={() => history.push('/setting/scrap-posts')}>
                <Text>스크랩한 초록톡</Text>
              </SettingUpperDiv>
              <SettingUpperDiv onClick={() => history.push('/setting/profile')}>
                <Text>프로필 편집</Text>
              </SettingUpperDiv>
              <SettingLowerDiv onClick={() => history.push('/setting/changepwd')}>
                <Text>비밀번호 변경</Text>
              </SettingLowerDiv>
            </ScrapSettingWrap>
            <Border></Border>
            <TeamInfoWrap>
              <SettingUpperDiv onClick={() => { window.open('https://github.com/TEAM-Chorok', '_blank') }}>
                <Text>Our Team</Text>
              </SettingUpperDiv>
              <SettingLowerDiv>
                <Text color="#C6C6C6">FAQ / 문의사항</Text>
              </SettingLowerDiv>
            </TeamInfoWrap>
            <Border></Border>
            <UserInfoEdit>
              <SettingUpperDiv onClick={() => logOut()}>
                <Text>로그아웃</Text>
              </SettingUpperDiv>
              <SettingLowerDiv onClick={() => history.push('/setting/deactivation')}>
                <Text>회원 탈퇴</Text>
              </SettingLowerDiv>
            </UserInfoEdit>
          </Grid>
        </Container>
      </Permit>
    </React.Fragment>
  )
}
const ScrapSettingWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0px;
`
const TeamInfoWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0px;
`
const UserInfoEdit = styled.div`
  width: 100%;
  height: fit-content;
`
const SettingUpperDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

  width: 100%;
  height: 60px;
  
  box-sizing: border-box;
  border-bottom: 1px solid #F4F4F4;
`
const SettingLowerDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #F4F4F4;
`
const Border = styled.div`
    width: 100%;
    height: 12px;
    background-color: #F7F8FA;
    border: none;
`
export default Setting; 