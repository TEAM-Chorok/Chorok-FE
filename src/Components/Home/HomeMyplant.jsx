import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";



const HomeMyplant = () => {

  return (
    <React.Fragment>
      
      <Wrapper>
        <Grid margin="5px">
          <Text size="M">거실</Text>
        </Grid>

        <Grid is_flex>
          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="126px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"/>
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
          <PlantBox>
            <Grid margin="auto" width="fit-content" height="fit-content">
              <Image type="square" size="126px" imgUrl="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202201/19/e6fdcf26-7397-4053-9f84-904cabf7f279.jpg"/>
            </Grid>
            <Grid margin="5px" width="fit-content" height="fit-content">
              <Grid width="fit-content" height="fit-content">
                <Text bold>초록이</Text>
                <Text bold size="XS" color="#bbb" margin="3px">몬스테라</Text>
              </Grid>
              <Grid width="fit-content" height="fit-content">
                <Text size="XS" color="#999">파룻파루룻</Text>
              </Grid>
            </Grid>
          </PlantBox>

        </Grid>
    </Wrapper>

      <Wrapper>
        <Grid margin="5px">
          <Text size="M">창가</Text>
        </Grid>

        <Grid is_flex>
          <PlantBox>
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
        </Grid>
    </Wrapper>




    </React.Fragment>
  );
}

const Wrapper = styled.div`
  padding: 15px 0;
`


const PlantBox = styled.div`
  margin: 5px;
  width: 130px;
  height: 170px;
`

export default HomeMyplant;