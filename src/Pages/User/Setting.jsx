import React from "react";
import styled from "styled-components";
import { SettingHeader } from "../../Components";
import { Container } from "../../Elements";

const Setting = () => {
    return (
        <React.Fragment>
            <Container>
                <SettingHeader />
                <ScrapSettingWrap>
                    <SettingUpperDiv>내가 쓴 글</SettingUpperDiv>
                    <SettingUpperDiv>프로필 편집</SettingUpperDiv>
                    <SettingLowerDiv>비밀번호 변경</SettingLowerDiv>
                </ScrapSettingWrap>
                <TeamInfoWrap>
                    <SettingUpperDiv>Our Team</SettingUpperDiv>
                    <SettingLowerDiv>FAQ / 문의사항</SettingLowerDiv>
                </TeamInfoWrap>
                <UserInfoEdit>
                    <SettingUpperDiv>로그아웃</SettingUpperDiv>
                    <SettingLowerDiv>계정 비활성화</SettingLowerDiv>
                </UserInfoEdit>
            </Container>
        </React.Fragment>
    )
}
const ScrapSettingWrap = styled.div`
width: 100%;
height: fit-content;
margin: 0px 0px 10px 0px;
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
height: fit-content;
padding: 15px 10px;
box-sizing: border-box;
border-bottom: 1px solid lightgrey;
`
const SettingLowerDiv = styled.div`
width: 100%;
height: fit-content;
padding: 15px 10px;
box-sizing: border-box;
`
export default Setting; 