import React from "react";
import styled from "styled-components";
import { Container, Grid, Input, Text } from "../../../Elements";
import PlanteriorList from "../Planterior/PlanteriorList";



const PlanteriorResult = () => {


  return (
    <React.Fragment>
      <Grid padding="0 16px">
        <PlanteriorList/>
      </Grid>
    </React.Fragment>
  )
}


export default PlanteriorResult;