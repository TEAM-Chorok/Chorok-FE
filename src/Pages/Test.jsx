import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Tabbar from "../Components/Tabbar";
import { Container, Grid, Image, Text } from "../Elements";
import { actionCreators as mainActions } from "../Redux/Modules/Main";

// open api test components
const Test = () => {

const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Container>                
            <Grid margin="auto">
                <Text bold size="h5">test page</Text>
                <Text bold size="base"> - 사용 폰트 suit</Text>
                <Grid height="100px"/>
                <Text size="h5" color={({theme}) => theme.colors.primary}>23px H5 헤더5 700 </Text><br/>
                <Text bold size="h5" color={({theme}) => theme.colors.like}>23px 헤더5는 기본적으로 Bold</Text><br/>
                <br/>
                <Text size="h6">20px H6 헤더6 400 </Text><br/>
                <Text bold size="h6">20px H6 BOLD 굵은 헤더6 700</Text><br/>
                <br/>
                <Text size="large">18px LARGE 라지 400 </Text><br/>
                <Text bold size="large">18px LARGE BOLD 굵은 라지 700</Text><br/>
                <br/>
                <Text size="base">16px BASE 베이스 400 자간 0.15px</Text><br/>
                <Text bold size="base">16px BASE BOLD 굵은 베이스 700</Text><br/>
                <br/>
                <Text size="small">14px SMALL 스몰 400 자간 0.25px</Text><br/>
                <Text bold size="small">14px SMALL BOLD 굵은 스몰 700</Text><br/>
                <br/>
                <Text size="xsmall">13px XSMALL 엑스스몰 400 자간 0.25px</Text><br/>
                <Text bold size="xsmall">13px XSMALL BOLD 굵은 엑스스몰 600</Text><br/>
                <br/>
                <Text size="xxsmall">11px XXSMALL 엑스엑스스몰 400 자간 0.4px</Text><br/>
                <Text bold size="xxsmall">11px XXSMALL BOLD 굵은 엑스스몰 600</Text><br/>
            </Grid>
            </Container>
        </React.Fragment>
    );
}





export default Test;