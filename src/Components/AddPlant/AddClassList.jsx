import React from "react";
import styled from "styled-components"
import { Grid, Image, Text } from "../../Elements";



const AddClassList = () => {

  return (
    <React.Fragment>

        <Wrapper>
        
          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="100px" />
            </Grid>
            <Grid margin="5px" width="fit-content" height="fit-content">
              <Grid width="fit-content" height="fit-content">
                <Text bold>관엽 식물</Text>
              </Grid>
            </Grid>
          </PlantBox>

          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="100px" />
            </Grid>
            <Grid margin="5px" width="fit-content" height="fit-content">
              <Grid width="fit-content" height="fit-content">
                <Text bold>개화 식물</Text>
              </Grid>
            </Grid>
          </PlantBox>

          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="100px" />
            </Grid>
            <Grid margin="5px" width="fit-content" height="fit-content">
              <Grid width="fit-content" height="fit-content">
                <Text bold>허브</Text>
              </Grid>
            </Grid>
          </PlantBox>

          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="100px" />
            </Grid>
            <Grid margin="5px" width="fit-content" height="fit-content">
              <Grid width="fit-content" height="fit-content">
                <Text bold>야채</Text>
              </Grid>
            </Grid>
          </PlantBox>

          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="100px" />
            </Grid>
            <Grid margin="5px" width="fit-content" height="fit-content">
              <Grid width="fit-content" height="fit-content">
                <Text bold>난초</Text>
              </Grid>
            </Grid>
          </PlantBox>

          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="100px" />
            </Grid>
            <Grid margin="5px" width="fit-content" height="fit-content">
              <Grid width="fit-content" height="fit-content">
                <Text bold>선인장 / 다육</Text>
              </Grid>
            </Grid>
          </PlantBox>

        </Wrapper>

    </React.Fragment>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 60px 0;
`

const PlantBox = styled.div`
  margin: 5px;
  width: 105px;
  height: 150px;
`

export default AddClassList;

