import React from "react";
import styled from "styled-components";
import { Grid, Input, Text } from "../../../Elements";
import PlantProfile from "../../PlantProfile";



const PlantResult = () => {


  return (
    <React.Fragment>
      <Grid margin="16px">
        <Text bold size="small">전체</Text>
        <Text bold margin="0 8px" size="small" color="#0AAF42">6</Text>
      </Grid>
      <Grid width="100%">
        <Grid width="100%" padding="0 16px">
          <PlantProfile list plant="스킨답서스"/>
        </Grid>
        <Grid width="100%" padding="0 16px">
          <PlantProfile list plant="형광스킨답서스"/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}


export default PlantResult;