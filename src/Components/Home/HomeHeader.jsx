import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../Elements";

const TodoHeader = () => {

    return (
        <React.Fragment>
            <Grid height="80px">
                <Text size="XS" color="#999">2022년 04월 25일</Text>
                <br/>
                <Text bold margin="5px 0"> 맑음 29℃</Text>
                <br/>
                <Text size="XS" color="#999"> 최고 22℃ 최저 11℃</Text>
            </Grid>
        </React.Fragment>
    );
}

export default TodoHeader;