import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Image, Text } from '../../Elements';
import TodoContentBlock from '../Home/TodoContentBlock';
import { ReactComponent as WaterIcon } from '../../Assets/img/plantCardIcons/largeWater.svg'
import { ReactComponent as PillIcon } from '../../Assets/img/plantCardIcons/largePill.svg'
import { ReactComponent as PotIcon } from '../../Assets/img/plantCardIcons/largePot.svg'



const PlantCardTodo = () => {

  return (
    <React.Fragment>
      <Grid width="100%">
        <TodoBlock>
          <WaterIcon/>
          <Grid padding="0 0 0 12px">
            <Text bold size="large">물 주기</Text><br/>
            <Text size="xsmall">계절별 물주기 정보를 참고해주세요</Text>
          </Grid>
        </TodoBlock>
        <TodoBlock>
          <PillIcon/>
          <Grid padding="0 0 0 12px">
            <Text bold size="large">영양제 주기</Text><br/>
            <Text size="xsmall">봄 또는 가을에 영양제 배급을 추천드려요</Text>
          </Grid>
        </TodoBlock>
        <TodoBlock>
          <PotIcon/>
          <Grid padding="0 0 0 12px">
            <Text bold size="large">분갈이 하기</Text><br/>
            <Text size="xsmall">1년에 1~2회 깨끗한 흙으로 이사시켜주세요</Text>
          </Grid>
        </TodoBlock>

      </Grid>
    </React.Fragment>
  );
}

const TodoBlock = styled.div`
  display: flex;

  align-items: center;

  margin: 12px 0; 
  padding: 13px 16px;
  
  background: #fff;
  border-radius: 16px;

`


export default PlantCardTodo;