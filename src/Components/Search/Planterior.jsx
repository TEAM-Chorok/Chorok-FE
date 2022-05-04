import React from "react";
import styled from "styled-components";
import { LabelingTestLink, PlanteriorList, RecommendPlant, SearchHeader } from "..";

import { Container, Grid, Text } from "../../Elements";


// planterior 페이지 관련 하위 컴포넌트들을 여기서 미리 합쳐서 가져갑니다.

const Planterior = () => {

  return (
    <React.Fragment>
        <Grid width="100%">
          <LabelingTestLink />
        </Grid>
        <Grid>
          <RecommendPlant/>
        </Grid>
        <Grid width="100%">
          <PlanteriorList />
        </Grid>
    </React.Fragment>
  )
}

export default Planterior;