import React from "react";
import styled from "styled-components";
import { AllResult, PlanteriorResult, PlantResult, PlantSearchHeader, Tabbar } from "../../Components";

import { Container, Grid, Image, Text } from "../../Elements";

// planterior 디테일 페이지 
const Result = () => {

  const comp = {
    0: <AllResult />,
    1: <PlanteriorResult />,
    2: <PlantResult />
  };

  const [compNum, setCompNum] = React.useState(0);

  return (
    <React.Fragment>
      <Grid width="100%" padding="16px 16px 0 16px">
        <PlantSearchHeader title="탐색" size="h5" />
        <Tabbar type="3" tab1="전체" tab2="사진" tab3="식물도감" setCompNum={setCompNum} compNum={compNum} />
      </Grid>
        {comp[compNum]}
    </React.Fragment>
  )
}

export default Result;