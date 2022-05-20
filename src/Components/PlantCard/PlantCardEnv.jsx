import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Image, Text } from '../../Elements';
import { ReactComponent as TempIcon } from '../../Assets/img/plantCardIcons/temp.svg'
import { ReactComponent as HumidIcon } from '../../Assets/img/plantCardIcons/humid.svg'
import { ReactComponent as WindIcon } from '../../Assets/img/plantCardIcons/wind.svg'
import { ReactComponent as SprayIcon } from '../../Assets/img/plantCardIcons/spray.svg'
import { useSelector } from 'react-redux';


const PlantCardEnv = () => {

  const data = useSelector((state) => state.plant?.plantData);


  return (
    <React.Fragment>
      <EnvBox>
        <GridBox>
          <TempIcon />
          <Text>{data?.plantTemp}</Text>
        </GridBox>

        <GridBox>
          <HumidIcon />
          <Text>{data?.plantHumid}</Text>
        </GridBox>
          
        <GridBox>
          <WindIcon />
          <Text>1일마다 환기</Text>
        </GridBox>
          
        <GridBox>
          <SprayIcon />
          <Text>3일마다 분무</Text>
        </GridBox>

      </EnvBox>
    </React.Fragment>
  );
}

const EnvBox = styled.div`
  padding: 16px;

  border-radius: 16px;

  background: #fff;
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;

  padding: 8px 0;
  align-items: center;
`



export default PlantCardEnv;