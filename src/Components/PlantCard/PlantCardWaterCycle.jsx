import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Text } from '../../Elements';



const PlantCardWaterCycle = () => {
  
  const data = useSelector((state) => state.plant?.plantData);
  const message = "데이터가 없습니다 :("

  return (
    <React.Fragment>
      <CycleBox>
        <SeasonBox>
          <Text size="small">봄</Text>
        </SeasonBox>
        <Text size="xsmall">{data?.springWaterCycle ? data.springWaterCycle : message }</Text>
        <SeasonBox>
          <Text size="small">여름</Text>
        </SeasonBox>
        <Text size="xsmall">{data?.summerWaterCycle ? data.summerWaterCycle : message }</Text>
        <SeasonBox>
          <Text size="small">가을</Text>
        </SeasonBox>
        <Text size="xsmall">{data?.fallWaterCycle ? data.fallWaterCycle : message }</Text>
        <SeasonBox>
          <Text size="small">겨울</Text>
        </SeasonBox>
        <Text size="xsmall">{data?.winterWaterCycle ? data.winterWaterCycle : message }</Text>
      </CycleBox>
    </React.Fragment>
  );
}

const CycleBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;

  align-items: center;

  background: #fff;
  padding: 16px; 
  border-radius: 16px;
`

const SeasonBox = styled.div`
  margin: 4px 0;
  padding: 6px 0;
  width: 54px;
  text-align: center;
  border: 1px solid #E0E0E0;
  border-radius: 20px;
`

export default PlantCardWaterCycle;