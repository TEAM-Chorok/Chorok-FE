import React from "react";
import styled from "styled-components";
import { AllResult, PlanteriorResult, PlantResult, PlantSearchHeader, Tabbar } from "../../Components";

import { Container, Grid, Image, Text } from "../../Elements";

// planterior 디테일 페이지 
const Result = (props) => {
  const [compNum, setCompNum] = React.useState(0);
  const [value, setValue] = React.useState(props.value)
  
  const comp = {
    0: <AllResult setCompNum={setCompNum}/>,
    1: <PlanteriorResult value={value} />,
    2: <PlantResult value={value} />
  };
  

  

  return (
    <React.Fragment>
      <Container type="np">
        <Grid padding="0 16px" width="100%">
          <Tabbar type="3" tab1="전체" tab2="사진" tab3="식물도감" setCompNum={setCompNum} compNum={compNum} />
        </Grid>
        <Grid padding="0 16px" width="100%">
          {comp[compNum]}
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Result;