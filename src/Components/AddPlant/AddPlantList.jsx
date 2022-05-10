import React from "react";
import { Grid, Image, Input, Text } from "../../Elements";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { BottomSheet } from "..";
import PlantProfile from "../PlantProfile";

// 식물 추가 flow의 식물 리스트 컴포넌트
// 코드 상단의 <BottomSheet/> 부분이 필터 바텀시트 부분 컴포넌트입니다.

const AddPlantList = () => {

  const history = useHistory();

  // 식물카드로 이동
  const openPlantCard = () => {
    history.push("/plant/rosemary")
  }
  
  return (
    <React.Fragment>

      <Grid margin="0 0 16px 0">
        <BottomSheet />
      </Grid>
      <Grid width="100%" margin="24px 0">
        <PlantProfile list plant="로즈마리" _onClick={openPlantCard}/>
        <PlantProfile list plant="라벤더" _onClick={openPlantCard}/>
        <PlantProfile list plant="레몬 버베나" _onClick={openPlantCard}/>
      </Grid>
    </React.Fragment>
  );
}



export default AddPlantList;

