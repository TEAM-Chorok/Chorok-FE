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
                    <SettingUpperDiv>스크랩한 식물</SettingUpperDiv>
                    <SettingLowerDiv>스크랩한 글</SettingLowerDiv>
                </ScrapSettingWrap>
                <TeamInfoWrap>
                    <SettingUpperDiv>팀 소개 페이지 바로가기</SettingUpperDiv>
                    <SettingLowerDiv>인스타그램으로 바로가기</SettingLowerDiv>
                </TeamInfoWrap>
                <UserInfoEdit>
                    <SettingUpperDiv>프로필 수정</SettingUpperDiv>
                    <SettingUpperDiv>로그아웃</SettingUpperDiv>
                    <SettingLowerDiv>회원탈퇴</SettingLowerDiv>
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
border-bottom: 1px solid darkgrey;
`
export default Setting; 