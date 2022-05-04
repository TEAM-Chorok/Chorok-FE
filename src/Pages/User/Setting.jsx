import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SettingHeader } from "../../Components";
import { Container, Grid } from "../../Elements";
import { actionCreators as userActions } from "../../Redux/Modules/User";

const Setting = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(userActions.logOutDB());
        console.log("로그아웃 시도");
    }
    return (
        <React.Fragment>
            <Container>
                <Grid width="100%"  padding="30px 0px">
                    <SettingHeader />
                    <ScrapSettingWrap>
                        <SettingUpperDiv onClick={()=>history.push('/setting/myposts')}>내가 쓴 글</SettingUpperDiv>
                        <SettingUpperDiv onClick={()=>history.push('/setting/profile')}>프로필 편집</SettingUpperDiv>
                        <SettingLowerDiv onClick={()=>history.push('/setting/changepwd')}>비밀번호 변경</SettingLowerDiv>
                    </ScrapSettingWrap>
                    <TeamInfoWrap>
                        <SettingUpperDiv>Our Team</SettingUpperDiv>
                        <SettingLowerDiv>FAQ / 문의사항</SettingLowerDiv>
                    </TeamInfoWrap>
                    <UserInfoEdit>
                        <SettingUpperDiv onClick={()=>signOut()}>로그아웃</SettingUpperDiv>
                        <SettingLowerDiv onClick={()=>history.push('/setting/deactivation')}>계정 비활성화</SettingLowerDiv>
                    </UserInfoEdit>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
const ScrapSettingWrap = styled.div`
width: 100%;
height: fit-content;
margin: 30px 0px 10px 0px;
`
const TeamInfoWrap = styled.div`
width: 100%;
height: fit-content;
margin: 0px 0px 10px 0px;
`
const UserInfoEdit = styled.div`
width: 100%;
height: fit-content;
`
const SettingUpperDiv = styled.div`
width: 100%;
height: 60px;
padding: 15px 10px;
box-sizing: border-box;
border-bottom: 1px solid lightgrey;
`
const SettingLowerDiv = styled.div`
width: 100%;
height: 60px;
padding: 15px 10px;
box-sizing: border-box;
`
export default Setting; 