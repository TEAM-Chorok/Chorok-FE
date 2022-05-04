import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Container, Grid, Image, Text } from "../Elements";
import { actionCreators as mainActions } from "../Redux/Modules/Main";



// open api test components
const Test = () => {

const dispatch = useDispatch();

// open api test
// React.useEffect(() => {
//     console.log("왜 cors지???????????????")
//     dispatch(mainActions.getdataDB());
// }, []);

    return (
        <React.Fragment>
            <Container>
            <Grid margin="auto">
                <Text bold size="h5">test page</Text>
                <Text bold size="base"> - 사용 폰트 suit</Text>
                <Grid margin="20px auto">
                    <Image type="square" size="300px" />
                </Grid>
                <Text size="h5">H5 헤더5 700</Text><br/>
                <Text bold size="h5">헤더5는 기본적으로 Bold 상태입니당</Text><br/>
                <br/>
                <Text size="h6">H6 헤더6 400</Text><br/>
                <Text bold size="h6">H6 BOLD 굵은 헤더6 700</Text><br/>
                <br/>
                <Text size="large">LARGE 라지 400</Text><br/>
                <Text bold size="large">LARGE BOLD 굵은 라지 700</Text><br/>
                <br/>
                <Text size="base">BASE 베이스 400 자간 0.15px</Text><br/>
                <Text bold size="base">BASE BOLD 굵은 베이스 700</Text><br/>
                <br/>
                <Text size="small">SMALL 스몰 400 자간 0.25px</Text><br/>
                <Text bold size="small">SMALL BOLD 굵은 스몰 700</Text><br/>
                <br/>
                <Text size="xsmall">XSMALL 엑스스몰 400 자간 0.25px</Text><br/>
                <Text bold size="xsmall">XSMALL BOLD 굵은 엑스스몰 600</Text><br/>
                <br/>
                <Text size="xxsmall">XXSMALL 엑스엑스스몰 400 자간 0.4px</Text><br/>
                <Text bold size="xxsmall">XXSMALL BOLD 굵은 엑스스몰 600</Text><br/>
            </Grid>
            </Container>
        </React.Fragment>
    );
}




export default Test;