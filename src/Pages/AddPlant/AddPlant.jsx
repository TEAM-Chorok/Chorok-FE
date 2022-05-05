import React from "react";
import { AddPlantList, BottomSheet, PlantSearchHeader } from "../../Components";
import { Container, Grid, Input, Text } from "../../Elements";


const AddPlant = () => {
  
  return (
    <React.Fragment>
      <Container>
      
        <PlantSearchHeader title="원하는 식물을 찾아보세요" size="large"/>

        <Grid margin="15px 0">

            <BottomSheet/>
          
        </Grid>
        <AddPlantList />

      </Container>
    </React.Fragment>
  );
}


export default AddPlant;

