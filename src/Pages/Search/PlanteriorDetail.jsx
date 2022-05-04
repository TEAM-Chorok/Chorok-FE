import React from "react";
import styled from "styled-components";
import { LabelingTestLink, PlanteriorDetailComments, PlanteriorDetailContents, PlanteriorList, RecommendPlant, SearchHeader } from "../../Components";

import { Container, Grid, Image, Text } from "../../Elements";


// planterior 디테일 페이지 
const PlanteriorDetail = () => {


  return (
    <React.Fragment>
      <Container>
          <PlanteriorDetailContents/>
        <Grid>
          <PlanteriorDetailComments/>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default PlanteriorDetail;