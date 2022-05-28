import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import InfiniteScroll from "../../share/etc/InfiniteScroll";
import PlantProfile from "../../share/etc/PlantProfile";
import { ReactComponent as NotFound } from "../../../Assets/img/Icons/notfound.svg"

const PlantResult = (props) => {
  const is_login = localStorage.getItem('token') ? true : false;
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.search?.resultPlant);
  const plantList = data?.content;
  const totalPage = data?.totalPage;
  const count = useSelector((state) => state.search?.result?.plantDictionaryCount);
  const value = useSelector((state) => state.search?.value);
  // 무한스크롤 관련 state
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

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

  React.useEffect(() => {
    if(is_login) {
      dispatch(searchActions.keywordSearchingPlantDB(value, page));
    }
  }, [page, value])


  return (
    <React.Fragment>
      <Grid width="100%" padding="16px 0">
        {plantList?.length ?
          <Grid width="100%">
            <Grid width="100%" margin="0 2px">
              <Text bold size="small">전체</Text>
              <Text bold margin="0 8px" size="small" color="#0AAF42">{count}</Text>
            </Grid>
            <Grid width="100%">
              <InfiniteScroll
                page={page}
                totalPage={totalPage}
                callback={callback}
                isLoading={isLoading}>
                {plantList?.map((plant) => {
                  return (
                    <PlantProfile list
                      key={plant.plantNo}
                      plant={plant.plantName}
                      imgUrl={plant.plantImgUrl}
                      _onClick={() => { history.push(`plant/${plant.plantNo}`) }}
                    />
                  )
                })}
              </InfiniteScroll>
            </Grid>
          </Grid>
          :
          <Grid margin="14vh auto">
            <Grid margin="20px auto" align="center">
              <Text bold size="h5" weight="700">검색<br />결과가 없어요</Text>
            </Grid>
            <Grid margin="auto">
              <NotFound />
            </Grid>
          </Grid>
        }
      </Grid>
    </React.Fragment>
  )
}


export default PlantResult;