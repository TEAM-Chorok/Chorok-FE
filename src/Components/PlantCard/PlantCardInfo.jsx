import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Grid, Image, Text } from '../../Elements';


const PlantCardInfo = () => {

  const plantInfo = useSelector((state) => state.plant?.plantData?.plantInfo);


  return (
    <React.Fragment>
      <InfoBox>
        {plantInfo ?
          <Text size="xxsmall" color="#525252">
            {plantInfo}
          </Text>
          :
          <Text size="xsmall" color="#525252">
            데이터가 없습니다😢 <br /> 빠른 시일 내로 보여드릴게요!
          </Text>}
      </InfoBox>
    </React.Fragment>
  );
}


const InfoBox = styled.div`
  margin: auto;
  padding: 20px 24px;

  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 16px;
  background: #fff;
`


export default PlantCardInfo;