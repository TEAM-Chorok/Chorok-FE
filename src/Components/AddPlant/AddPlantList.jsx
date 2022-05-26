import React from "react";
import { Grid } from "../../Elements";
import { useHistory } from "react-router-dom";
import { BottomSheet } from "..";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";
import PlantProfile from "../share/etc/PlantProfile";
import InfiniteScroll from "../share/etc/InfiniteScroll";

// 식물 추가 flow의 식물 리스트 컴포넌트
// 코드 상단의 <BottomSheet/> 부분이 필터 바텀시트 부분 컴포넌트입니다.

const AddPlantList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search?.plantDictList);
  const plantList = data?.content;
  const filterData = useSelector((state) => state.search?.filterData);
  
  // 무한스크롤 관련 state
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const totalPage = data?.totalPage;

  // 무한스크롤 실행 함수
  const callback = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setPage((pre) => pre + 1);
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  // 식물카드로 이동
  const openPlantCard = (plantNo) => {
    history.push(`/plant/${plantNo}`);
  }
  
  
  React.useEffect(() => {
    dispatch(searchActions.plantFilteringDB(filterData, page));
  }, [page, dispatch])

  return (
    <React.Fragment>

      <Grid margin="0 0 16px 0">
        <BottomSheet />
      </Grid>
      <Grid width="100%" margin="24px 0">
        <InfiniteScroll 
          page={page} 
          callback={callback} 
          totalPage={totalPage}
          isLoading={isLoading}>
          {plantList?.map((plant, idx) => {
            return (
              <PlantProfile list key={plant.plantNo} plant={plant.plantName}
                imgUrl={plant.plantImgUrl}
                _onClick={() => { openPlantCard(plant.plantNo) }} />
            )
          })}
        </InfiniteScroll>
      </Grid>
      <Grid height="50px" />

    </React.Fragment>
  );
}



export default AddPlantList;

