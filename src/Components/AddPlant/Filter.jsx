import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";



// BottomSheet에서 보여질 필터 관련 컴포넌트를 이 파일에 전부 묶어두었습니다~!

// 난이도
const FilterLevel = (props) => {

  return (
    <React.Fragment>
      <LevelWrapper>
        <Grid is_flex align="center" margin="auto" width="312px">
          <Grid width="100%">

            <Grid margin="12px 0" width="100%">
              <Button checked={props.code === "pl01" ? true : false} type="filterlong" _onClick={() => { props.setLevel("pl01"); props.setLevelText("초보레벨") }}>
                <Grid is_flex width="100%">
                  <ButtonTextWrapped>
                    <Text margin="0 8px 0 24px" size="base" color={props.code === "pl01" ? "#0AAF42" : ""}>초보레벨</Text>
                    <Text size="xxsmall" color="#8D8D8D">이제 막 식물집사가 되었다면</Text>
                  </ButtonTextWrapped>
                </Grid>
              </Button>
            </Grid>

            <Grid margin="12px 0" width="100%">
              <Button checked={props.code === "pl02" ? true : false} type="filterlong" _onClick={() => { props.setLevel("pl02"); props.setLevelText("경력레벨") }}>
                <Grid is_flex width="100%">
                  <ButtonTextWrapped>
                    <Text margin="0 8px 0 24px" size="base" color={props.code === "pl02" ? "#0AAF42" : ""}>경력레벨</Text>
                    <Text size="xxsmall" color="#8D8D8D">식물집사의 즐거움을 알아가는 중이라면</Text>
                  </ButtonTextWrapped>
                </Grid>
              </Button>
            </Grid>

            <Grid margin="12px 0" width="100%">
              <Button checked={props.code === "pl03" ? true : false} type="filterlong" _onClick={() => { props.setLevel("pl03"); props.setLevelText("숙련레벨") }}>
                <Grid is_flex width="100%">
                  <ButtonTextWrapped>
                    <Text margin="0 8px 0 24px" size="base" color={props.code === "pl03" ? "#0AAF42" : ""}>숙련레벨</Text>
                    <Text size="xxsmall" color="#8D8D8D">풍부한 식물집사경험을 가지고 있다면</Text>
                  </ButtonTextWrapped>
                </Grid>
              </Button>
            </Grid>

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
      <Grid margin="auto" width="312px">
        <SpaceWrapper>
          <Grid width="100%" padding="4px">
            <Button checked={props.code === "pp04" ? true : false} type="filterlong" _onClick={() => { props.setSpace("pp04"); props.setSpaceText("거실"); }}>
              <Text size="base" color={props.code === "pp04" ? "#0AAF42" : ""}>거실</Text>
            </Button>
          </Grid>
          <Grid width="100%" padding="4px">
            <Button checked={props.code === "pp05" ? true : false} type="filterlong" _onClick={() => { props.setSpace("pp05"); props.setSpaceText("창가"); }}>
              <Text size="base" color={props.code === "pp05" ? "#0AAF42" : ""}>창가</Text>
            </Button>
          </Grid>
          <Grid width="100%" padding="4px">
            <Button checked={props.code === "pp02" ? true : false} type="filterlong" _onClick={() => { props.setSpace("pp02"); props.setSpaceText("방안"); }}>
              <Text size="base" color={props.code === "pp02" ? "#0AAF42" : ""}>방안</Text>
            </Button>
          </Grid>
          <Grid width="100%" padding="4px">
            <Button checked={props.code === "pp01" ? true : false} type="filterlong" _onClick={() => { props.setSpace("pp01"); props.setSpaceText("통로"); }}>
              <Text size="base" color={props.code === "pp01" ? "#0AAF42" : ""}>통로</Text>
            </Button>
          </Grid>
          <Grid width="100%" padding="4px">
            <Button checked={props.code === "pp03" ? true : false} type="filterlong" _onClick={() => { props.setSpace("pp03"); props.setSpaceText("화장실"); }}>
              <Text size="base" color={props.code === "pp03" ? "#0AAF42" : ""}>화장실</Text>
            </Button>
          </Grid>
          <Grid width="100%" padding="4px">
            <Button checked={props.code === "pp06" ? true : false} type="filterlong" _onClick={() => { props.setSpace("pp06"); props.setSpaceText("베란다/발코니"); }}>
              <Text size="base" color={props.code === "pp06" ? "#0AAF42" : ""}>베란다/발코니</Text>
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
      <TypeWrapper>
        <Grid margin="auto" width="312px">
          <Grid margin="4px 0" width="100%">
            <Button checked={props.code === "pt01" ? true : false} type="filterlong" _onClick={() => { props.setType("pt01"); props.setTypeText("관엽식물") }}>
              <Grid is_flex width="100%">
                <ButtonTextWrapped>
                  <Text margin="0 8px 0 24px" size="base" color={props.code === "pt01" ? "#0AAF42" : ""}>관엽식물</Text>
                  <Text size="xxsmall" color="#8D8D8D">잎이 매력적인 관상용 식물</Text>
                </ButtonTextWrapped>
              </Grid>
            </Button>
          </Grid>

          <Grid margin="4px 0" width="100%">
            <Button checked={props.code === "pt02" ? true : false} type="filterlong" _onClick={() => { props.setType("pt02"); props.setTypeText("개화식물") }}>
              <Grid is_flex width="100%">
                <ButtonTextWrapped>
                  <Text margin="0 8px 0 24px" size="base" color={props.code === "pt02" ? "#0AAF42" : ""}>개화식물</Text>
                  <Text size="xxsmall" color="#8D8D8D">꽃 피는 날이 기다려지는 식물</Text>
                </ButtonTextWrapped>
              </Grid>
            </Button>
          </Grid>

          <Grid margin="4px 0" width="100%">
          <Button checked={props.code === "pt04" ? true : false} type="filterlong" _onClick={() => { props.setType("pt04"); props.setTypeText("열매식물") }}>
            <Grid is_flex width="100%">
              <ButtonTextWrapped>
                <Text margin="0 8px 0 24px" size="base" color={props.code === "pt04" ? "#0AAF42" : ""}>열매식물</Text>
                <Text size="xxsmall" color="#8D8D8D">열매가 기다려지는 식물</Text>
              </ButtonTextWrapped>
            </Grid>
          </Button>
          </Grid>

          <Grid margin="4px 0" width="100%">
            <Button checked={props.code === "pt03" ? true : false} type="filterlong" _onClick={() => { props.setType("pt03"); props.setTypeText("선인장/다육식물") }}>
              <Grid is_flex width="100%">
                <ButtonTextWrapped>
                  <Text margin="0 8px 0 24px" size="base" color={props.code === "pt03" ? "#0AAF42" : ""}>선인장/다육식물</Text>
                  <Text size="xxsmall" color="#8D8D8D">어디서나 잘 자라는 선인장/다육</Text>
                </ButtonTextWrapped>
              </Grid>
            </Button>
          </Grid>

        </Grid>

      </TypeWrapper>
    </React.Fragment>
  )
}

// 식물 생장형태
const FilterStyle = (props) => {
  return (
    <React.Fragment>
      <Grid width="312px" margin="auto">
        <StyleWrapper>
          
          <Grid width="100%" padding="4px">
            <Button type="filterlong" height="60px" checked={props.code === "pgs03" ? true : false} _onClick={() => { props.setStyle("pgs03"); props.setStyleText("관목형") }}> 
              <Grid is_flex width="100%" align="center">
                <Grid width="100%" align="center">
                  <Text size="xxsmall" color="#A8A8A8">아담한 키의</Text><br/>
                  <Text size="base" color={props.code === "pgs03"? "#0AAF42" : ""}>관목형</Text>
                </Grid>
              </Grid>
            </Button>
          </Grid>

          <Grid width="100%" padding="4px">
            <Button type="filterlong" height="60px" checked={props.code === "pgs04" ? true : false} _onClick={() => { props.setStyle("pgs04"); props.setStyleText("직립형") }}> 
              <Grid is_flex width="100%" align="center">
                <Grid width="100%" align="center">
                  <Text size="xxsmall" color="#A8A8A8">쭉쭉 뻗은</Text><br/>
                  <Text size="base" color={props.code === "pgs04"? "#0AAF42" : ""}>직립형</Text>
                </Grid>
              </Grid>
            </Button>
          </Grid>

          <Grid width="100%" padding="4px">
            <Button type="filterlong" height="60px" checked={props.code === "pgs01" ? true : false} _onClick={() => { props.setStyle("pgs01"); props.setStyleText("풀잎형") }}> 
              <Grid is_flex width="100%" align="center">
                <Grid width="100%" align="center">
                  <Text size="xxsmall" color="#A8A8A8">부드러운 잎의</Text><br/>
                  <Text size="base" color={props.code === "pgs01"? "#0AAF42" : ""}>풀잎형</Text>
                </Grid>
              </Grid>
            </Button>
          </Grid>

          <Grid width="100%" padding="4px">
            <Button type="filterlong" height="60px" checked={props.code === "pgs02" ? true : false} _onClick={() => { props.setStyle("pgs02"); props.setStyleText("덩굴형") }}> 
              <Grid is_flex width="100%" align="center">
                <Grid width="100%" align="center">
                  <Text size="xxsmall" color="#A8A8A8">바닥에 뻗거나 감겨오르는</Text><br/>
                  <Text size="base" color={props.code === "pgs02"? "#0AAF42" : ""}>덩굴형</Text>
                </Grid>
              </Grid>
            </Button>
          </Grid>

        </StyleWrapper>

          <Grid width="100%" padding="4px">
            <Button type="filterlong" height="60px" checked={props.code === "pgs06" ? true : false} _onClick={() => { props.setStyle("pgs06"); props.setStyleText("로제트형") }}> 
              <Grid is_flex width="100%" align="center">
                <Grid width="100%" align="center">
                  <Text size="xxsmall" color="#A8A8A8">장미 꽃잎처럼 둥글게 펼쳐진 잎의</Text><br/>
                  <Text size="base" color={props.code === "pgs06"? "#0AAF42" : ""}>로제트형</Text>
                </Grid>
              </Grid>
            </Button>
          </Grid>

      </Grid>
    </React.Fragment>
  );
}



const LevelWrapper = styled.div`
    width: 100%;
`

const SpaceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    margin: auto;
    
    width: 312px;
    
    align-items: center;
`

const TypeWrapper = styled.div`
  width: 100%;
`

const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  width: 100%;
  align-items: center;
`

const StyleinnerWrapper1 = styled.div`
`

const StyleinnerWrapper2 = styled.div`
`

const ButtonTextWrapped = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  align-items: center;
`


export { FilterLevel, FilterSpace, FilterType, FilterStyle };