import React from "react";
import { AddPlantList, BottomSheet } from "../../Components";
import { Container, Grid, Text } from "../../Elements";
import styled from "styled-components";



const AddPlant = () => {
  
  return (
    <React.Fragment>
      <Container>
        <Grid height="50px" />
        <Grid>
          <Text size="M">허브</Text>
        </Grid>
        <Grid margin="15px 0">

            <BottomSheet/>
          
        </Grid>
        <AddPlantList />

      </Container>
    </React.Fragment>
  );
}


export default AddPlant;

