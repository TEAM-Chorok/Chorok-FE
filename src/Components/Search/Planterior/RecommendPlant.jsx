import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import PlantProfile from "../../PlantProfile";


// 탐색 - planterior의 추천식물 목록 

const RecommandPlant = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const recommendlist = useSelector((state) => state.search.recommendlist);

  console.log(recommendlist);

  // 식물카드 페이지로 
  const openPlantCard = () => {
    history.push("/plant/rosemary");
  }
  
  React.useEffect(() => {
    dispatch(searchActions.getRecommendDB());
  }, [])

  return (
    <React.Fragment>
      <Wrapper>
          <PlantProfile size="L" name="몬스테라" _onClick={openPlantCard} />
          <PlantProfile size="L" name="스킨답서스" _onClick={openPlantCard} />
          <PlantProfile size="L" name="라벤더" _onClick={openPlantCard} />
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 8px 0;

  width: 100%;
`


export default RecommandPlant;