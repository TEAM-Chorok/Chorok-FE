import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Input, Text } from "../../../Elements";
import PlantProfile from "../../PlantProfile";



const PlantResult = () => {

  const plantList = useSelector((state) => state.search?.resultPlant);

  return (
    <React.Fragment>
      <Grid width="100%" padding="16px 0">
        <Grid width="100%" margin="0 2px">
          <Text bold size="small">전체</Text>
          <Text bold margin="0 8px" size="small" color="#0AAF42">6</Text>
        </Grid>
        <Grid width="100%">
          {plantList?.map((plant) => {
            return (
              <PlantProfile list 
                key={plant.plantNo}
                plant={plant.plantName} 
                imgUrl={plant.plantImgUrl}/>
            )
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}


export default PlantResult;