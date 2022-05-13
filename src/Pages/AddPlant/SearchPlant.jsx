import React from "react";
import { AddPlantList, BottomSheet, PlantSearchHeader } from "../../Components";
import { Container, Grid, Input, Text } from "../../Elements";


const SearchPlant = () => {
  
  return (
    <React.Fragment>
      <Container>
        <PlantSearchHeader title="원하는 식물을 찾아보세요" size="large"/>
        <AddPlantList />
      </Container>
    </React.Fragment>
  );
}


export default SearchPlant;

