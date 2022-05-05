import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";




// 탐색 - planterior
// 사진 목록 컴포넌트

const PlanteriorList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // 사진 디테일 페이지로
  const openDetail = () => {
    history.push("/photo/1")
  }

  const [place, setPlace] = React.useState(null);

  React.useEffect(() => {
    console.log("place", place);
    // dispatch(searchActions.planteriorFilteringDB(place));
  }, [place])

  React.useEffect(() => {
    // 추천식물 조회 API가 없다......
    dispatch(searchActions.getPlanteriorListDB());
  }, [])

  return (
    <React.Fragment>
      <Grid margin="30px 0 10px 0">
        <Text bold>플랜테리어</Text>
      </Grid>
      <Grid margin="15px 0">
        <Button type="filter" _onClick={() => {setPlace("pp01")}}>거실</Button>
        <Button type="filter" _onClick={() => {setPlace("pp02")}}>창가</Button>
        <Button type="filter" _onClick={() => {setPlace("pp03")}}>방안</Button>
        <Button type="filter" _onClick={() => {setPlace("pp04")}}>화장실</Button>
        <Button type="filter" _onClick={() => {setPlace("pp05")}}>통로</Button>
        <Button type="filter" _onClick={() => {setPlace("pp06")}}>베란다</Button>
      </Grid>
      <ImageWrapper>
          <Grid width="100%" _onClick={openDetail}>
            <Image type="planterior" margin="10px auto" size="150px" imgUrl="https://i.pinimg.com/originals/3c/80/22/3c8022ab0bcdc891fa55aff4185b1e34.jpg"/>
            <Text margin="0 12px">이거는 글 제목~ </Text>
          </Grid>
          <Grid width="100%" _onClick={openDetail}>
            <Image type="planterior" margin="10px auto" size="150px" imgUrl="https://i.pinimg.com/originals/3c/80/22/3c8022ab0bcdc891fa55aff4185b1e34.jpg"/>
            <Text margin="0 12px">이거는 글 제목~ </Text>
          </Grid>

      </ImageWrapper>
    </React.Fragment>
  )
}


const ImageWrapper = styled.div`
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
`



export default PlanteriorList;