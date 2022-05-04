import React from "react";
import styled from "styled-components"
import { Grid, Image, Text } from "../../Elements";





// 필터기능 추가로 이 컴포넌트는 이후에 삭제하게 될 것 같아요! 

const AddLocationList = () => {

  return (
    <React.Fragment>

      <Wrapper>

        <PlantBox>
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Image type="square" size="100px" />
          </Grid>
          <Grid margin="5px" width="fit-content" height="fit-content">
            <Grid width="fit-content" height="fit-content">
              <Text bold >거실</Text>
            </Grid>
          </Grid>
        </PlantBox>

        <PlantBox>
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Image type="square" size="100px" />
          </Grid>
          <Grid margin="5px" width="fit-content" height="fit-content">
            <Grid width="fit-content" height="fit-content">
              <Text bold >창가</Text>
            </Grid>
          </Grid>
        </PlantBox>

        <PlantBox>
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Image type="square" size="100px" />
          </Grid>
          <Grid margin="5px" width="fit-content" height="fit-content">
            <Grid width="fit-content" height="fit-content">
              <Text bold >베란다</Text>
            </Grid>
          </Grid>
        </PlantBox>

        <PlantBox>
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Image type="square" size="100px" />
          </Grid>
          <Grid margin="5px" width="fit-content" height="fit-content">
            <Grid width="fit-content" height="fit-content">
              <Text bold >방 안</Text>
            </Grid>
          </Grid>
        </PlantBox>

        <PlantBox>
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Image type="square" size="100px" />
          </Grid>
          <Grid margin="5px" width="fit-content" height="fit-content">
            <Grid width="fit-content" height="fit-content">
              <Text bold >화장실</Text>
            </Grid>
          </Grid>
        </PlantBox>

        <PlantBox>
          <Grid margin="auto" width="fit-content" height="fit-content">
            <Image type="square" size="100px" />
          </Grid>
          <Grid margin="5px" width="fit-content" height="fit-content">
            <Grid width="fit-content" height="fit-content">
              <Text bold >통로</Text>
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

export default AddLocationList;

