import React from "react";
import { Grid } from "../../Elements";
import { useHistory } from "react-router-dom";
import { BottomSheet } from "..";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";
import PlantProfile from "../share/etc/PlantProfile";

// 식물 추가 flow의 식물 리스트 컴포넌트
// 코드 상단의 <BottomSheet/> 부분이 필터 바텀시트 부분 컴포넌트입니다.

const AddPlantList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const plantList = useSelector((state) => state.search?.plantDictList);
  
  // 식물카드로 이동
  const openPlantCard = (plantNo) => {
    history.push(`/plant/${plantNo}`);
  }

  React.useEffect(() => {
    dispatch(searchActions.getPlantDictDB());
  }, [])
  
  return (
    <React.Fragment>

      <Grid margin="0 0 16px 0">
        <BottomSheet />
      </Grid>
      <Grid width="100%" margin="24px 0">
      {plantList?.map((plant, idx) => {
        return (
          <PlantProfile list key={plant.plantNo} plant={plant.plantName} 
            imgUrl={plant.plantImgUrl}
            _onClick={()=>{openPlantCard(plant.plantNo)}}/>
        )
      })}
      </Grid>
      <Grid height="50px"/>

    </React.Fragment>
  );
}



export default AddPlantList;

