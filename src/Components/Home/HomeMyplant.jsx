import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import PlantProfile from "../PlantProfile";



// 내 식물 목록

const HomeMyplant = () => {

  return (
    <React.Fragment>
      <Grid>
        <Grid margin="12px">
          <Text size="M">거실</Text>
        </Grid>
        <GridBox>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
        </GridBox>
      </Grid>
      <Grid>
        <Grid margin="12px">
          <Text size="M">창가</Text>
        </Grid>
        <GridBox>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
          <PlantProfile size="L" name="동동이" plant="몬스테라"/>
        </GridBox>
      </Grid>
    </React.Fragment>
  );
}


const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
`

export default HomeMyplant;