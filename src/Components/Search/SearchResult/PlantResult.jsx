import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import InfiniteScroll from "../../share/etc/InfiniteScroll";
import PlantProfile from "../../share/etc/PlantProfile";


const PlantResult = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const plantList = useSelector((state) => state.search?.resultPlant.content);
  const count = useSelector((state) => state.search?.result?.plantDictionaryCount);
  // 무한스크롤 관련 state
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [value, setValue] = React.useState(props.value);

  console.log("뭐라고쳤냐면", props.value)
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
    dispatch(searchActions.keywordSearchingPlantDB(value, page));
  }, [page])


  return (
    <React.Fragment>
      <Grid width="100%" padding="16px 0">
        <Grid width="100%" margin="0 2px">
          <Text bold size="small">전체</Text>
          <Text bold margin="0 8px" size="small" color="#0AAF42">{count}</Text>
        </Grid>
        <Grid width="100%">
        <InfiniteScroll page={page} callback={callback} isLoading={isLoading}>
          {plantList?.map((plant) => {
            return (
              <PlantProfile list 
                key={plant.plantNo}
                plant={plant.plantName} 
                imgUrl={plant.plantImgUrl}
                _onClick={()=>{history.push(`plant/${plant.plantNo}`)}}
              />
            )
          })}
        </InfiniteScroll>
        </Grid>
      </Grid>

    </React.Fragment>
  )
}


export default PlantResult;