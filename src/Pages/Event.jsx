import React from "react";
import { Button, Grid, Text } from "../Elements";
import styled from "styled-components";
import { GeneralHeader } from '../Components';
import { useHistory } from "react-router-dom";


const Event = () => {

    const history = useHistory();

    return (
        <React.Fragment>
            <HeaderBox>
                <GeneralHeader title="이벤트" />
            </HeaderBox>
            <Grid width="100%">
                <EventBox />
                <Grid width="100%">
                    <Div>
                        <Grid width="100%" padding="0 16px">
                            <Button type="square" color="#0E6027" _onClick={() => { history.push('/labeling'); }}>
                                <Text color="#fff" weight="500">지금 바로 식물추천 받으러 가기</Text>
                            </Button>
                            <Grid margin="8px auto">
                                <Button type="tran" _onClick={() => { history.push('/home'); }}>
                                    <Text color="#525252" weight="500">홈으로 돌아가기</Text>
                                </Button>
                            </Grid>
                        </Grid>
                    </Div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}


const EventBox = styled.div`
    margin-top: 44px;
    width: 100%;
    height: 1514px;
    background-image: url('/img/event.svg');
    background-size: cover;
    background-position: center;
`

const HeaderBox = styled.div`
    position: fixed;
    top: 0;
    background: #fff;
    width: 100%;
    height: 44px;
    z-index: 900;
`

const Div = styled.div`
    position: absolute;
    bottom: 72px;

    width: 100%;
    height: 76px;
`




export default Event;