import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Image, Text } from '../../Elements';
import PlantCardEnv from './PlantCardEnv';
import PlantCardTodo from './PlantCardTodo';
import PlantCardWaterCycle from './PlantCardWaterCycle';
import { ReactComponent as LeafIcon } from '../../Assets/img/leafIcon.svg'
import PlantCardInfo from './PlantCardInfo';



const PlantCardFeed = () => {
  return (
    <React.Fragment>
      <Grid width="100%" height="1200px">

        <Grid height="40px" />

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

        <PlantCardWaterCycle />
      </Grid>
    </React.Fragment>
  );
}





export default PlantCardFeed;