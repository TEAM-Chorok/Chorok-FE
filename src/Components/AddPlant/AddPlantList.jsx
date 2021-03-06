import React from "react";
import { Grid, Text } from "../../Elements";
import { useHistory, useLocation } from "react-router-dom";
import { BottomSheet } from "..";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";
import PlantProfile from "../share/etc/PlantProfile";
import InfiniteScroll from "../share/etc/InfiniteScroll";
import { ReactComponent as NotFound } from "../../Assets/img/errorIcons/nondata.svg"

// 식물 추가 flow의 식물 리스트 컴포넌트
// 코드 상단의 <BottomSheet/> 부분이 필터 바텀시트 부분 컴포넌트입니다.

const AddPlantList = () => {
  const is_login = localStorage.getItem('token') ? true : false;

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation().pathname.split('/')[1];

  // console.log("여긴어딘가용", location);
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
    if(location === "search") {
      history.push(`/plantcard/${plantNo}`);
      return;
    }
    history.push(`/plant/${plantNo}`);
  }


  React.useEffect(() => {
    if(is_login) {
      dispatch(searchActions.plantFilteringDB(filterData, page));
    }
  }, [page, dispatch])
  
  React.useEffect(() => {
    // 리스트 진입시 필터링 데이터 초기화
    if(is_login) {
      const data = {
        plantGrowthShapeCode: "",
        plantLevelCode: "",
        plantPlaceCode: "",
        plantTypeCode: ""
      }
      dispatch(searchActions.plantFilteringDB(data, page));
  }
}, [])

  return (
    <React.Fragment>
      <Grid width="100%">
        <Grid margin="0 0 16px 0">
          <BottomSheet />
        </Grid>
        {plantList?.length > 0 ?
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
          :
          <Grid margin="15vh auto">
          <Grid margin="20px auto" align="center">
            <Text bold size="h5" weight="700">검색<br/>결과가 없어요</Text>
          </Grid>
          <Grid margin="auto">
            <NotFound />
          </Grid>
        </Grid>
        }
      </Grid>

      <Grid height="50px" />

    </React.Fragment>
  );
}


export default AddPlantList;

