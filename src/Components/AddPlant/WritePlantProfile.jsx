import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Input, Text } from "../../Elements";


const WritePlantProfile = () => {

    return (
        <React.Fragment>
            <Text bold size="base">
                식물의 이름과 정보를<br/>알려주세요
            </Text>
            <Grid margin="auto">
                <Image type="circle" size="100px" />
            </Grid>
            <Grid width="100%">
                <Input type="basic" label="닉네임" width="100%" />
            </Grid>

        </React.Fragment>
    )
}


export default WritePlantProfile;