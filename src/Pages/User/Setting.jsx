import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GeneralHeader } from "../../Components";
import { Container, Grid, Permit } from "../../Elements";
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
            <Container type="np">
                <Grid width="100%"  >
                    <GeneralHeader title="설정" />
                </Grid>
                <Grid width="100%">
                    <hr style={{border:"1px solid #E0E0E0", margin: "0px", padding: "0px"}} />
                    <ScrapSettingWrap>
                        <SettingUpperDiv onClick={()=>history.push('/setting/myposts')}>내가 쓴 초록톡</SettingUpperDiv>
                        <SettingUpperDiv onClick={()=>history.push('/setting/scrap-posts')}>스크랩한 초록톡</SettingUpperDiv>
                        <SettingUpperDiv onClick={()=>history.push('/setting/profile')}>프로필 편집</SettingUpperDiv>
                        <SettingLowerDiv onClick={()=>history.push('/setting/changepwd')}>비밀번호 변경</SettingLowerDiv>
                    </ScrapSettingWrap>
                    <Border></Border>
                    <TeamInfoWrap>
                        <SettingUpperDiv><a href="https://github.com/TEAM-Chorok">Our Team</a></SettingUpperDiv>
                        <SettingLowerDiv style={{color: "#C6C6C6"}}>FAQ / 문의사항</SettingLowerDiv>
                    </TeamInfoWrap>
                    <Border></Border>
                    <UserInfoEdit>
                        <SettingUpperDiv onClick={()=>logOut()}>로그아웃</SettingUpperDiv>
                        <SettingLowerDiv onClick={()=>history.push('/setting/deactivation')}>회원 탈퇴</SettingLowerDiv>
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
width: 100%;
height: 60px;
padding: 16px;
box-sizing: border-box;
border-bottom: 1px solid lightgrey;
`
const SettingLowerDiv = styled.div`
width: 100%;
height: 60px;
padding: 16px;
box-sizing: border-box;
`
const Border = styled.div`
    width: 100%;
    height: 12px;
    background-color: #F7F8FA;
    border: none;
`
export default Setting; 