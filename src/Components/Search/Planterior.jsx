import React from "react";
import { LabelingTestLink, PlanteriorList, RecommendPlant } from "..";

import { Grid, Text } from "../../Elements";


// planterior 페이지 관련 하위 컴포넌트들을 여기서 미리 합쳐서 가져갑니다.

const Planterior = () => {

  return (
    <React.Fragment>
      <Grid width="100%" padding="0 16px">
        <Grid width="100%">
          <LabelingTestLink />
        </Grid>
        <Grid width="100%">
          <RecommendPlant />
        </Grid>
      </Grid>
      <Grid width="100%" height="12px" bg="#F7F8FA" />
      <Grid width="100%" padding="0 16px">
        <Grid margin="16px 0">
          <Text bold size="h6">식물 공간</Text>
        </Grid>
        <Grid width="100%">
          <PlanteriorList />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Planterior;