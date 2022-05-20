import React from 'react';

import PlantCardEnv from './PlantCardEnv';
import PlantCardTodo from './PlantCardTodo';
import PlantCardWaterCycle from './PlantCardWaterCycle';
import PlantCardInfo from './PlantCardInfo';

import { Grid, Text } from '../../Elements';
import { ReactComponent as LeafIcon } from '../../Assets/img/leafIcon.svg'


const PlantCardFeed = () => {
  return (
    <React.Fragment>
      <Grid width="100%">

        <Grid height="30px" />

        <Grid width="100%" padding="0 16px 24px 16px">
          <Grid margin="12px 2px">
            <LeafIcon />
            <Text bold size="large" margin="0 8px">어떤 식물인가요?</Text>
          </Grid>
          <PlantCardInfo />
        </Grid>

        <Grid width="100%" padding="0 16px 24px 16px">
          <Grid margin="12px 2px">
            <LeafIcon />
            <Text bold size="large" margin="0 8px">이렇게 관리해주세요</Text>
          </Grid>
          <PlantCardTodo />
        </Grid>

        <Grid width="100%" padding="0 16px 24px 16px">
          <Grid margin="12px 2px">
            <LeafIcon />
            <Text bold size="large" margin="0 8px">이런 환경을 좋아해요</Text>
          </Grid>
          <PlantCardEnv />
        </Grid>

        <Grid width="100%" padding="0 16px 24px 16px">
          <Grid margin="12px 2px">
            <LeafIcon />
            <Text bold size="large" margin="0 8px">계절에 따라 적절히 물을 주세요</Text>
          </Grid>
          <PlantCardWaterCycle />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}





export default PlantCardFeed;