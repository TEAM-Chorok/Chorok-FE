import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text, Button } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import PlantProfile from "../../share/etc/PlantProfile";

// 탐색 - planterior의 추천식물 목록 

const RecommandPlant = () => {
  const is_login = localStorage.getItem('token') ? true : false;

  const dispatch = useDispatch();
  const history = useHistory();
  const recommendList = useSelector((state) => state?.search?.recommendlist);
  console.log(recommendList);
  // 식물카드 페이지로 
  const openPlantCard = (plantid) => {
    history.push(`/plant/${plantid}`);
  }

  React.useEffect(() => {
    if(is_login){
      dispatch(searchActions.getRecommendDB());
    } else {
      return;
    }
  }, [dispatch])

  return (
    <React.Fragment>
      {recommendList ?
        <Wrapper>
          {recommendList?.map((plant, idx) => {
            return (
              <PlantProfile key={plant?.plantId} size="L" name={plant?.plantName}
                imgUrl={plant?.plantImgUrl} _onClick={() => { openPlantCard(plant?.plantId) }} />
            );
          })}
        </Wrapper>
        :
        <Grid width="100%" margin="16px 0 24px 0">
          <Grid margin="auto" width="100%" align="center">
            <Text size="small">💬 데이터가 없습니다.</Text><br />
            <Text size="small">레이블링 테스트를 진행해주세요!</Text>
          </Grid>
          <Grid margin="12px auto">
            <Button type="tran" _onClick={() => { history.push('/labeling'); }}>
              <Text bold>테스트하러 가기</Text>
              {/* <Text bold margin="12px"></Text> */}
            </Button>
          </Grid>
        </Grid>
      }
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  margin: 8px 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  
  width: 100%;
`


export default RecommandPlant;