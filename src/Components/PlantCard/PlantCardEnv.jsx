import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Image, Text } from '../../Elements';
import { ReactComponent as TempIcon } from '../../Assets/img/plantCardIcons/temp.svg'
import { ReactComponent as WaterIcon } from '../../Assets/img/plantCardIcons/water.svg'
import { ReactComponent as WindIcon } from '../../Assets/img/plantCardIcons/wind.svg'
import { ReactComponent as SprayIcon } from '../../Assets/img/plantCardIcons/spray.svg'


const PlantCardEnv = () => {
  return (
    <React.Fragment>
    <EnvBox>
      
      <TempIcon/>
      <WaterIcon/>
      <WindIcon/>
      <SprayIcon/>
    </EnvBox>
    </React.Fragment>
  );
}

const EnvBox = styled.div`
  padding: 16px;

  border-radius: 16px;

  background: #fff;
`




export default PlantCardEnv;