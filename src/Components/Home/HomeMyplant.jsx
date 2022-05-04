import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import PlantProfile from "../PlantProfile";



// 내 식물 목록

const HomeMyplant = () => {

  return (
    <React.Fragment>

      <Wrapper>
        <Grid margin="5px">
          <Text size="M">거실</Text>
        </Grid>

        <Grid is_flex>
          <PlantProfile />
          <PlantProfile />
        </Grid>

      </Wrapper>

      <Wrapper>
        <Grid margin="5px">
          <Text size="M">창가</Text>
        </Grid>

        <Grid is_flex>
          <PlantProfile />
        </Grid>

      </Wrapper>




    </React.Fragment>
  );
}

const Wrapper = styled.div`
  padding: 15px 0;
`


export default HomeMyplant;