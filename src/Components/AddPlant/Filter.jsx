import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";



// BottomSheet에서 보여질 필터 관련 컴포넌트를 이 파일에 전부 묶어두었습니다~!


// 난이도
const FilterLevel = () => {
  return (
    <React.Fragment>
      <LevelWrapper>

        <Grid margin="10px auto" width="100%">
          <Button type="filterlong">
            <Text bold>초보자</Text>
          </Button>
        </Grid>
        <Grid margin="10px auto" width="100%">
          <Button type="filterlong">
            <Text bold>숙련자</Text>
          </Button>
        </Grid>
        <Grid margin="10px auto" width="100%">
          <Button type="filterlong">
            <Text bold>전문가</Text>
          </Button>
        </Grid>

      </LevelWrapper>
    </React.Fragment>
  )
}

// 공간
const FilterSpace = () => {
  return (
    <React.Fragment>
      <SpaceWrapper>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="110px" height="40px">
            <Text bold>거실</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="110px" height="40px">
            <Text bold>창가</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="110px" height="40px">
            <Text bold>방 안</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="110px" height="40px">
            <Text bold>베란다/발코니</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="110px" height="40px">
            <Text bold>화장실</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="110px" height="40px">
            <Text bold>통로</Text>
          </Button>
        </Grid>

      </SpaceWrapper>
    </React.Fragment>
  )
}

// 식물 관상형태
const FilterType = () => {
  return (
    <React.Fragment>
      <TypeWrapper>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="170px" height="100px">
            <Text bold fontSize="16px">관엽식물</Text><br/>
            <Text size="XS" color="#666">잎이 매력적인 관상용 식물</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="170px" height="100px">
            <Text bold fontSize="16px">개화식물</Text><br/>
            <Text size="XS" color="#666">꽃 피는 날이 기다려지는 식물</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="170px" height="100px">
            <Text bold fontSize="16px">열매식물</Text><br/>
            <Text size="XS" color="#666">열매가 기다려지는 식물</Text>
          </Button>
        </Grid>
        <Grid margin="5px auto">
          <Button type="filtersizing" width="170px" height="100px">
            <Text bold fontSize="16px">선인장/다육식물</Text><br/>
            <Text size="XS" color="#666">어디서나 잘 자라는 식물</Text>
          </Button>
        </Grid>
      </TypeWrapper>
    </React.Fragment>
  )
}

// 식물 생장형태
const FilterStyle = () => {
  return (
    <React.Fragment>
    
      <Button type="filtersizing" width="110px" height="100px">
      <Grid margin="auto">
        <Image type="square" size="50px" imgUrl="http://imagescdn.gettyimagesbank.com/500/201612/a10575587.jpg" />
      </Grid>
      </Button>
    </React.Fragment>
  );
}



const LevelWrapper = styled.div`
    width: 100%;
    height: 290px;
`

const SpaceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const TypeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`


export { FilterLevel, FilterSpace, FilterType, FilterStyle };