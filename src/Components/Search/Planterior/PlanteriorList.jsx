import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../../Elements";


// 탐색 - planterior
// 사진 목록 컴포넌트
// 아직 필터 선택은 구현되지 않았습니다!

const PlanteriorList = () => {
  const history = useHistory();

  // 사진 디테일 페이지로
  const openDetail = () => {
    history.push("/photo/1")
  }

  return (
    <React.Fragment>
      <Grid margin="30px 0 10px 0">
        <Text bold>플랜테리어</Text>
      </Grid>
      <Grid margin="15px 0">
        <Button type="filter">거실</Button>
        <Button type="filter">베란다</Button>
        <Button type="filter">방안</Button>
        <Button type="filter">통로</Button>
        <Button type="filter">화장실</Button>
        <Button type="filter">창가</Button>
      </Grid>
      <ImageWrapper>
          <Grid width="100%" _onClick={openDetail}>
            <Image type="planterior" margin="10px auto" size="150px" imgUrl="http://m.101studio.co.kr/web/product/medium/20200628/a4f6240db393f1947e6b7156d0eab906.jpg"/>
            <Text margin="0 12px">이거는 글 제목~ </Text>
          </Grid>
          <Grid width="100%" _onClick={openDetail}>
            <Image type="planterior" margin="10px auto" size="150px" imgUrl="http://m.101studio.co.kr/web/product/medium/20200628/a4f6240db393f1947e6b7156d0eab906.jpg"/>
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