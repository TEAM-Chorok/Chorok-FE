import React from 'react';
import styled from 'styled-components';
import { PlantCardFeed, PlantCardProfile } from '../../Components';
import { Button, Container, Grid } from '../../Elements';



// 식물카드 페이지

const PlantCard = () => {
  return (
    <React.Fragment>
      <Container>

        <PlantCardProfile />
        <PlantCardFeed />
        <BtnBox>
          <Button type="longfloat">내 식물에 추가하기</Button>
        </BtnBox>
      </Container>
    </React.Fragment>
  );
}


const BtnBox = styled.div`
`

export default PlantCard;