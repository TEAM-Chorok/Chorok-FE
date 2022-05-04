import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../Elements";





// 혹시 몰라 내 식물 프로필(지금은 사각타입만)을 따로 분리해두었습니다! 

const PlantProfile = (props) => {

  return (
    <PlantBox >
      <Grid margin="auto" width="fit-content" height="fit-content">
        <Image type="square" size="126px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg" />
      </Grid>
      <Grid margin="5px" width="fit-content" height="fit-content">
        <Grid width="fit-content" height="fit-content">
          <Text bold>동동이</Text>
          <Text bold size="XS" color="#bbb" margin="3px">로즈마리</Text>
        </Grid>
        <Grid width="fit-content" height="fit-content">
          <Text size="XS" color="#999">동동동동이</Text>
        </Grid>
      </Grid>
    </PlantBox>
  );
}

const PlantBox = styled.div`
  margin: 5px;
  width: 130px;
  height: 170px;
`

export default PlantProfile;