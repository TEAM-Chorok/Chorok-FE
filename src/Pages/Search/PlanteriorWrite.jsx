import React from "react";
import { PlanteriorWriteComp } from "../../Components";

import { Container, Grid, Image, Permit, Text } from "../../Elements";

// planterior 디테일 페이지 
const PlanteriorWrite = () => {


  return (
    <React.Fragment>
      <Permit>
        <PlanteriorWriteComp />
        <Grid height="50px" />
      </Permit>
    </React.Fragment>
  )
}

export default PlanteriorWrite;