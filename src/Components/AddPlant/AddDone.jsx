import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Text } from "../../Elements";
import { ReactComponent as LeafLogo } from "../../Assets/img/logo/leafLogo.svg"
import { ReactComponent as LeafLogoShadow } from "../../Assets/img/logo/leafLogoShadow.svg"
import styled from "styled-components";
import GeneralHeader from "../share/etc/GeneralHeader";

const AddDone = (props) => {

    const history = useHistory();

    return (
        <React.Fragment>
            {/* <GeneralHeader _onClick={() => { props.setCompNum(props.compNum - 1); }} /> */}
            <Grid height="44px"/>
            <RelativeBox>
                <LeafBox>
                    <LeafLogo />
                </LeafBox>
                <ShadowBox>
                    <LeafLogoShadow />
                </ShadowBox>
            </RelativeBox>

            <Grid margin="24px auto" width="100%" align="center">
                <Grid margin="auto">
                    <Text size="base" bold>
                        식물이 추가되었습니다.
                    </Text>
                </Grid>
                <Grid margin="4px auto">
                    <Text size="base" bold>
                        홈에서 내 식물을 확인해보세요!
                    </Text>
                </Grid>
                <Grid margin="110px auto" width="100%" padding="0 20px">
                    <Grid margin="8px 0" width="100%">
                        {/* <Button type="square" _onClick={() => { history.replace("/myplants"); }}>
                            <Text color="#fff">지금 확인할게요</Text>
                        </Button> */}
                    </Grid>
                    <Grid width="100%">
                        {/* <Button type="square" width="100%" color="#F7F8FA" _onClick={() => { history.replace("/home") }}>
                            <Text color="#A8A8A8">홈으로 돌아가기</Text>
                        </Button> */}

                        <Grid height="65px" />
                        <Button type="square" width="100%" _onClick={() => { history.replace("/home") }}>
                            <Text color="#fff">지금 바로 할 일 확인하기</Text>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const RelativeBox = styled.div`
    margin-top: 155px;
    width: 100%;
`

const LeafBox = styled.div`
    margin: auto;
    width: fit-content;
`
const ShadowBox = styled.div`
    margin: auto;
    width: fit-content;
`

export default AddDone;