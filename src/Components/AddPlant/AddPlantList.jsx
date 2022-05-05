import React from "react";
import { Grid, Image, Input, Text } from "../../Elements";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { BottomSheet } from "..";


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

      <Grid is_flex _onClick={openPlantCard} width="100%">
        <Grid margin="10px 0">
          <Image type="square" size="100px" imgUrl={"https://images.unsplash.com/photo-1618679639167-41f5df274ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJvc2VtYXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"}/>
        </Grid>
        <Grid margin="10px" width="100%">
          <Grid width="100%">
            <Text bold>로즈마리</Text>
          </Grid>
          <Grid>
            <Text size="XS" color="#999">Rosemary</Text>
          </Grid>
        </Grid>
        <Grid margin="10px">
          <IoIosArrowForward />
        </Grid>
      </Grid>

      <Grid is_flex _onClick={openPlantCard} width="100%">
        <Grid margin="10px 0">
          <Image type="square" size="100px" imgUrl={"https://imagescdn.simons.ca/images/13980/1191100/30/A1_2.jpg?__=2"}/>
        </Grid>
        <Grid margin="10px" width="100%">
          <Grid width="100%">
            <Text bold>라벤더</Text>
          </Grid>
          <Grid>
            <Text size="XS" color="#999">Lavender</Text>
          </Grid>
        </Grid>
        <Grid margin="10px">
          <IoIosArrowForward />
        </Grid>
      </Grid>

      <Grid is_flex _onClick={openPlantCard} width="100%">
        <Grid margin="10px 0">
          <Image type="square" size="100px" imgUrl={"https://upload.wikimedia.org/wikipedia/commons/a/a2/Aloysia_citrodora.jpg"}/>
        </Grid>
        <Grid margin="10px" width="100%">
          <Grid width="100%">
            <Text bold>레몬 버베나</Text>
          </Grid>
          <Grid>
            <Text size="XS" color="#999">Lemon Verbena</Text>
          </Grid>
        </Grid>
        <Grid margin="10px">
          <IoIosArrowForward />
        </Grid>
      </Grid>

    </React.Fragment>
  );
}




export default AddPlantList;

