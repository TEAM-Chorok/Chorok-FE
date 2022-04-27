import React from 'react';
import { PlantCardFeed, PlantCardProfile } from '../../Components';
import { Container } from '../../Elements';

const PlantCard = () => {
  return (
    <React.Fragment>
      <Container>

        <PlantCardProfile/>
        <PlantCardFeed />
        
      </Container>
    </React.Fragment>
  );
}


export default PlantCard;