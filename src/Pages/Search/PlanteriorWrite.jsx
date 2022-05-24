import React from "react";
import { PlanteriorWriteComp } from "../../Components";

import { Container, Grid, Image, Text } from "../../Elements";

// planterior 디테일 페이지 
const PlanteriorWrite = () => {


  return (
    <React.Fragment>
      <Container type="np">
        <PlanteriorWriteComp />
        <Grid height="50px"/>
      </Container>
    </React.Fragment>
  )
}

export default PlanteriorWrite;