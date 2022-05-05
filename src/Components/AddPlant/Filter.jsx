import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";

// BottomSheet에서 보여질 필터 관련 컴포넌트를 이 파일에 전부 묶어두었습니다~!

// 난이도
const FilterLevel = (props) => {

  return (
    <React.Fragment>
      <LevelWrapper>
        <Grid margin="auto">
          <Grid margin="12px auto" width="100%">
            <Button type="filterlong" _onClick={()=> {props.setLevel("pl01"); props.setLevelText("초보자")}}>
              <Text>초보자</Text>
            </Button>
          </Grid>
          <Grid margin="12px auto" width="100%">
            <Button type="filterlong" _onClick={()=> {props.setLevel("pl02"); props.setLevelText("숙련자")}}>
              <Text>숙련자</Text>
            </Button>
          </Grid>
          <Grid margin="12px auto" width="100%">
            <Button type="filterlong" _onClick={()=> {props.setLevel("pl03"); props.setLevelText("전문가")}}>
              <Text>전문가</Text>
            </Button>
          </Grid>
        </Grid>
      </LevelWrapper>
    </React.Fragment>
  )
}

// 공간
const FilterSpace = (props) => {
  return (
    <React.Fragment>
      <Grid margin="auto" width="100%">
        <SpaceWrapper>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="40px" _onClick={()=> {props.setSpace("pp01"); props.setSpaceText("거실")}}>
              <Text bold>거실</Text>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="40px" _onClick={()=> {props.setSpace("pp02"); props.setSpaceText("창가");}}>
              <Text bold>창가</Text>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="40px" _onClick={()=> {props.setSpace("pp03"); props.setSpaceText("방 안")}}>
              <Text bold>방 안</Text>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="40px" _onClick={()=> {props.setSpace("pp06"); props.setSpaceText("베란다/발코니")}}>
              <Text bold>베란다/발코니</Text>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="40px" _onClick={()=> {props.setSpace("pp04"); props.setSpaceText("화장실")}}>
              <Text bold>화장실</Text>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="40px" _onClick={()=> {props.setSpace("pp05"); props.setSpaceText("통로")}}>
              <Text bold>통로</Text>
            </Button>
          </Grid>
        </SpaceWrapper>
      </Grid>
    </React.Fragment>
  )
}

// 식물 관상형태
const FilterType = (props) => {
  return (
    <React.Fragment>
      <Grid margin="auto" padding="30px 0" width="100%">
        <TypeWrapper>
          <Grid margin="5px auto">
            <Button type="filtersizing" width="170px" height="100px" _onClick={()=> {props.setType("pt01"); props.setTypeText("관엽식물")}}>
              <Text bold fontSize="16px">관엽식물</Text><br />
              <Text size="XS" color="#666">잎이 매력적인 관상용 식물</Text>
            </Button>
          </Grid>
          <Grid margin="5px auto">
            <Button type="filtersizing" width="170px" height="100px" _onClick={()=> {props.setType("pt02"); props.setTypeText("개화식물")}}>
              <Text bold fontSize="16px">개화식물</Text><br />
              <Text size="XS" color="#666">꽃 피는 날이 기다려지는 식물</Text>
            </Button>
          </Grid>
          <Grid margin="5px auto">
            <Button type="filtersizing" width="170px" height="100px" _onClick={()=> {props.setType("pt04"); props.setTypeText("열매식물")}}>
              <Text bold fontSize="16px">열매식물</Text><br />
              <Text size="XS" color="#666">열매가 기다려지는 식물</Text>
            </Button>
          </Grid>
          <Grid margin="5px auto">
            <Button type="filtersizing" width="170px" height="100px" _onClick={()=> {props.setType("pt03"); props.setTypeText("선인장/다육식물")}}>
              <Text bold fontSize="16px">선인장/다육식물</Text><br />
              <Text size="XS" color="#666">어디서나 잘 자라는 식물</Text>
            </Button>
          </Grid>
        </TypeWrapper>
      </Grid>
    </React.Fragment>
  )
}

// 식물 생장형태
const FilterStyle = (props) => {
  return (
    <React.Fragment>
      <StyleWrapper>
        <StyleinnerWrapper1>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="100px" _onClick={()=> {props.setStyle("pgs03"); props.setStyleText("관목형")}}>
              <Grid margin="auto">
                <Image type="square" size="50px" imgUrl="http://imagescdn.gettyimagesbank.com/500/201612/a10575587.jpg" />
                <Text>관목형</Text>
              </Grid>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="100px" _onClick={()=> {props.setStyle("pgs04"); props.setStyleText("직립형")}}>
              <Grid margin="auto">
                <Image type="square" size="50px" imgUrl="http://imagescdn.gettyimagesbank.com/500/201612/a10575587.jpg" />
                <Text>직립형</Text>
              </Grid>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="110px" height="100px" _onClick={()=> {props.setStyle("pgs01"); props.setStyleText("풀잎형")}}>
              <Grid margin="auto">
                <Image type="square" size="50px" imgUrl="http://imagescdn.gettyimagesbank.com/500/201612/a10575587.jpg" />
                <Text>풀잎형</Text>
              </Grid>
            </Button>
          </Grid>
        </StyleinnerWrapper1>
        <StyleinnerWrapper2>
          <Grid margin="auto">
            <Button type="filtersizing" width="170px" height="100px" _onClick={()=> {props.setStyle("pgs02"); props.setStyleText("덩굴형")}}>
              <Grid margin="auto">
                <Image type="square" size="50px" imgUrl="http://imagescdn.gettyimagesbank.com/500/201612/a10575587.jpg" />
                <Text>덩굴형</Text>
              </Grid>
            </Button>
          </Grid>
          <Grid margin="auto">
            <Button type="filtersizing" width="170px" height="100px" _onClick={()=> {props.setStyle("pgs06"); props.setStyleText("로제트형")}}>
              <Grid margin="auto">
                <Image type="square" size="50px" imgUrl="http://imagescdn.gettyimagesbank.com/500/201612/a10575587.jpg" />
                <Text>로제트형</Text>
              </Grid>
            </Button>
          </Grid>
        </StyleinnerWrapper2>
      </StyleWrapper>
    </React.Fragment>
  );
}



const LevelWrapper = styled.div`
    width: 100%;
`

const SpaceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
`

const TypeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const StyleWrapper = styled.div`
  margin: 25px 0;
`

const StyleinnerWrapper1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyleinnerWrapper2 = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`



export { FilterLevel, FilterSpace, FilterType, FilterStyle };