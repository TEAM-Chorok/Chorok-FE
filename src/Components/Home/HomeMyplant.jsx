import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Text } from "../../Elements";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import PlantProfile from "../share/etc/PlantProfile";


// 내 식물 목록

const HomeMyplant = () => {

  const dispatch = useDispatch();
  const myPlant = useSelector((state) => state.main?.myplantlist);

  React.useEffect(() => {
    dispatch(mainActions.getMyPlantPageDB());
  }, [dispatch])

  return (
    <React.Fragment>
      <Grid padding="20px 8px" width="100%" bg="#fff">

        {myPlant?.pp04?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text weight="700" size="large">거실</Text>
              <Text weight="700" size="large" margin="0 8px" color="#0AAF42">{myPlant?.pp04?.length}</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp04?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L"
                    name={plant.myPlantName}
                    plant={plant.plantName}
                    imgUrl={plant.myPlantImgUrl ? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfileLarge.svg'} />
                )
              })}
            </GridBox>
          </Grid> : null }
        
        {myPlant?.pp05?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text weight="700" size="large">창가</Text>
              <Text weight="700" size="large" margin="0 8px" color="#0AAF42">{myPlant?.pp05?.length}</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp05?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L"
                    name={plant.myPlantName}
                    plant={plant.plantName}
                    imgUrl={plant.myPlantImgUrl ? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfileLarge.svg'} />
                )
              })}
            </GridBox>
          </Grid> : null }

        {myPlant?.pp02?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text weight="700" size="large">방 안</Text>
              <Text weight="700" size="large" margin="0 8px" color="#0AAF42">{myPlant?.pp02?.length}</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp02.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L"
                    name={plant.myPlantName}
                    plant={plant.plantName}
                    imgUrl={plant.myPlantImgUrl ? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfileLarge.svg'} />
                )
              })}
            </GridBox>
          </Grid> : null }

        {myPlant?.pp03?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text weight="700" size="large">화장실</Text>
              <Text weight="700" size="large" margin="0 8px" color="#0AAF42">{myPlant?.pp03?.length}</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp03?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L"
                    name={plant.myPlantName}
                    plant={plant.plantName}
                    imgUrl={plant.myPlantImgUrl ? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfileLarge.svg'} />
                )
              })}
            </GridBox>
          </Grid> : null }

        {myPlant?.pp01?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text weight="700" size="large">통로</Text>
              <Text weight="700" size="large" margin="0 8px" color="#0AAF42">{myPlant?.pp01?.length}</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp01?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L"
                    name={plant.myPlantName}
                    plant={plant.plantName}
                    imgUrl={plant.myPlantImgUrl ? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfileLarge.svg'} />
                )
              })}
            </GridBox>
          </Grid> : null }

        {myPlant?.pp06?.length ?
          <Grid margin="0 0 40px 0" width="100%">
            <Grid margin="0 12px">
              <Text weight="700" size="large">베란다/발코니</Text>
              <Text weight="700" size="large" margin="0 8px" color="#0AAF42">{myPlant?.pp06?.length}</Text>
            </Grid>
            <GridBox>
              {myPlant?.pp06?.map((plant, idx) => {
                return (
                  <PlantProfile key={idx} size="L"
                    name={plant.myPlantName}
                    plant={plant.plantName}
                    imgUrl={plant.myPlantImgUrl ? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfileLarge.svg'} />
                )
              })}
            </GridBox>
          </Grid> : null }
        <Grid height="100px" />
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