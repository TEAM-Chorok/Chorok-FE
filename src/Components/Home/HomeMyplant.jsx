import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import PlantProfile from "../PlantProfile";



// 내 식물 목록

const HomeMyplant = () => {

  const myPlant = useSelector((state) => state);

  return (
    <React.Fragment>
      <Grid margin="20px 0" padding="0 8px" width="100%">
        <Grid margin="0 0 40px 0" width="100%">
          <Grid margin="0 12px">
            <Text bold size="large">거실</Text>
          </Grid>
          <GridBox>
            <PlantProfile size="L" name="동동이" plant="몬스테라" />
            <PlantProfile size="L" name="동동이" plant="몬스테라" />
          </GridBox>
        </Grid>

        <Grid margin="0 0 40px 0" width="100%">
          <Grid margin="0 12px">
            <Text bold size="large">창가</Text>
          </Grid>
          <GridBox>
            <PlantProfile size="L" name="동동이" plant="몬스테라" />
            <PlantProfile size="L" name="동동이" plant="몬스테라" />
            <PlantProfile size="L" name="동동이" plant="몬스테라" />
            <PlantProfile size="L" name="동동이" plant="몬스테라" />
          </GridBox>
        </Grid>



      </Grid>
    </React.Fragment>
  );
}


const GridBox = styled.div`
  display: grid;
  margin-top: 8px;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
`

export default HomeMyplant;