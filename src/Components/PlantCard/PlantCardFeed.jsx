import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Image, Text } from '../../Elements';


// 식물카드의 피드 관련 페이지였으나 현재는 기능 취소되어 이후 삭제하게 될 것 같아요! 

const PlantCardFeed = () => {
  return (
    <React.Fragment>
      <Grid margin="auto">
        <Image type="square" size="327px" />
      </Grid>
      <ImageXscroll>
        <Image type="square" size="72px" margin="0 10px 0 0" />
        <Image type="square" size="72px" margin="0 10px 0 0" />
        <Image type="square" size="72px" margin="0 10px 0 0" />
        <Image type="square" size="72px" margin="0 10px 0 0" />
        <Image type="square" size="72px" margin="0 10px 0 0" />
        <Image type="square" size="72px" margin="0 10px 0 0" />
      </ImageXscroll>

    </React.Fragment>
  );
}

const ImageXscroll = styled.div`
  display: flex;
  margin: 10px auto;
  
  width: 327px;

  overflow-x: scroll;
`


export default PlantCardFeed;