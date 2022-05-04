import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../../../Elements";
import PlantProfile from "../../PlantProfile";



// 탐색 - planterior의 추천식물 목록 

const RecommandPlant = () => {

  const history = useHistory();

  // 식물카드 페이지로 
  const openPlantCard = () => {
    history.push("/plant/rosemary");
  }

  return (
    <React.Fragment>
      <Wrapper>
        <Grid _onClick={openPlantCard}>
          <PlantProfile />
        </Grid>
        <Grid _onClick={openPlantCard}>
          <PlantProfile />
        </Grid>
        <Grid _onClick={openPlantCard}>
          <PlantProfile />
        </Grid>
        <Grid _onClick={openPlantCard}>
          <PlantProfile />
        </Grid>
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 10px 0;

  width: 350px;
    
  overflow-x: scroll;
`


export default RecommandPlant;