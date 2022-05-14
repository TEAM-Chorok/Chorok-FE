import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import PlantProfile from "../PlantProfile";


// 내 식물 목록

const HomeMyplant = () => {

  const dispatch = useDispatch();
  const myPlant = useSelector((state) => state.main?.myplantlist);

  React.useEffect(() => {
    dispatch(mainActions.getMyPlantPageDB());
  }, [])

  return (
    <React.Fragment>
      <Grid margin="20px 0" padding="0 8px" width="100%">

        {myPlant?.pp04?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text bold size="large">거실</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp04?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L" name={plant.myPlantName} plant={plant.plantName} imgUrl={plant.myPlantImgUrl} />
                )
              })}
            </GridBox>
          </Grid>
          :
          <div></div>
        }

        {myPlant?.pp05?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text bold size="large">창가</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp05?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L" name={plant.myPlantName} plant={plant.plantName} imgUrl={plant.myPlantImgUrl} />
                )
              })}
            </GridBox>
          </Grid>
          :
          <div></div>
        }

        {myPlant?.pp02?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text bold size="large">방 안</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp02.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L" name={plant.myPlantName} plant={plant.plantName} imgUrl={plant.myPlantImgUrl} />
                )
              })}
            </GridBox>
          </Grid>
          :
          <div></div>
        }

        {myPlant?.pp03?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text bold size="large">화장실</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp03?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L" name={plant.myPlantName} plant={plant.plantName} imgUrl={plant.myPlantImgUrl} />
                )
              })}
            </GridBox>
          </Grid>
          :
          <div></div>
        }

        {myPlant?.pp01?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text bold size="large">통로</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp01?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L" name={plant.myPlantName} plant={plant.plantName} imgUrl={plant.myPlantImgUrl} />
                )
              })}
            </GridBox>
          </Grid>
          :
          <div></div>
        }

        {myPlant?.pp06?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text bold size="large">베란다/발코니</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp06?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L" name={plant.myPlantName} plant={plant.plantName} imgUrl={plant.myPlantImgUrl} />
                )
              })}
            </GridBox>
          </Grid>
          :
          <div></div>
        }

      </Grid>
    </React.Fragment>
  );
}


const GridBox = styled.div`
  display: grid;
  margin-top: 8px;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
`

export default HomeMyplant;