import React from "react";
import styled from "styled-components";
import { Grid, Image, Input, Text } from "../../../Elements";


const AllResult = () => {


  return (
    <React.Fragment>



      <Grid width="100%" padding="24px 0">
        <Grid margin="0 8px 16px 8px">
          <Text bold size="large">사진</Text>
          <Text bold size="large" color="#0AAF42" margin="0 4px">256</Text>
        </Grid>

        <ImageBox>

          <Grid margin="6px auto">
            <Image type="square" size="104px" borderRadius="4px" />
          </Grid>

          <Grid margin="6px auto">
            <Image type="square" size="104px" borderRadius="4px" />
          </Grid>

          <Grid margin="6px auto">
            <Image type="square" size="104px" borderRadius="4px" />
          </Grid>

          <Grid margin="6px auto">
            <Image type="square" size="104px" borderRadius="4px" />
          </Grid>

          <Grid margin="6px auto">
            <Image type="square" size="104px" borderRadius="4px" />
          </Grid>

          <Grid margin="6px auto">
            <Image type="square" size="104px" borderRadius="4px" />
          </Grid>

        </ImageBox>
      </Grid>

      <Grid width="100%" padding="24px 0">
        <Grid margin="0 8px 16px 8px">
          <Text bold size="large">식물도감</Text>
          <Text bold size="large" color="#0AAF42" margin="0 4px">256</Text>
        </Grid>


      </Grid>

    </React.Fragment>
  )
}

const ImageBox = styled.div`
  display: grid;
  width: 100%;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
`


export default AllResult;