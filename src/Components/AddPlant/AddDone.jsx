import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";


const AddDone = () => {

    return (
        <React.Fragment>
        <Grid margin="auto" align="center">
            <Text bold size="base">
                식물이 추가되었습니다.<br/>
                추가된 식물을 확인해보세요!
            </Text>
        </Grid>
        </React.Fragment>
    )
}


export default AddDone;