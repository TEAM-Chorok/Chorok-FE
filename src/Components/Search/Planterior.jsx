import React from "react";
import { useSelector } from "react-redux";
import { RecommendPlant } from "..";

import { Grid, Text } from "../../Elements";
import PlaceFilter from "./PlaceFilter";
import Carousel from "./Planterior/Carousel";
import PlanteriorList from "./Planterior/PlanteriorList";


// planterior 페이지 관련 하위 컴포넌트들을 여기서 미리 합쳐서 가져갑니다.

const Planterior = () => {
  const username = useSelector((state) => state.user?.user?.nickname);
  const recommendList = useSelector((state) => state?.search?.recommendlist);
  // 공간 필터 선택 state
  const [place, setPlace] = React.useState("all");
  // 무한스크롤 관련 state
  const [page, setPage] = React.useState(0);
  
  return (
    <React.Fragment>
      <Grid width="100%" padding="0 16px">
        <Grid width="100%">
          <Carousel />
        </Grid>
        {recommendList?.length ?
          <Grid margin="10px 2px">
            <Text size="h6" weight="700">{username ? username : "집사"}님을 위한 추천식물</Text>
          </Grid>
          :
          null
        }
        <Grid width="100%">
          <RecommendPlant />
        </Grid>
      </Grid>
      {recommendList?.length ?
        <Grid width="100%" height="12px" bg="#F7F8FA" />
        : null}

      <Grid width="100%">
        <Grid margin="16px 0 0 0" padding="0 0 0 16px">
          <Text size="h6">식물 공간</Text>
          <PlaceFilter setPlace={setPlace} setPage={setPage} />
        </Grid>
        <Grid width="100%">
          <PlanteriorList setPlace={setPlace} place={place} page={page} setPage={setPage}/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Planterior;