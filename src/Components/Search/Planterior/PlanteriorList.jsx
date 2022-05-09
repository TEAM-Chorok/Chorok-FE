import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import PlaceFilter from "../PlaceFilter";
import Masonry from '@mui/lab/Masonry';



// 탐색 - planterior
// 사진 목록 컴포넌트

const PlanteriorList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // 사진 디테일 페이지로
  const openDetail = () => {
    history.push("/photo/1")
  }

  const [place, setPlace] = React.useState("all");
  


  
  React.useEffect(() => {
    console.log("place", place);
    // dispatch(searchActions.planteriorFilteringDB(place));
  }, [place])

  React.useEffect(() => {
    // 추천식물 조회 API가 없다......
    // dispatch(searchActions.getPlanteriorListDB());
  }, [])

  return (
    <React.Fragment>
      <Grid margin="16px 0">
        <Text bold size="h6">플랜테리어</Text>
      </Grid>
      <PlaceFilter setPlace={setPlace} />
      <Grid width="100%">
        <Masonry columns={2} spacing={2} sx={{ "margin": "auto", }}>
          <ContentWrapper _onClick={openDetail}>
            <Image type="planterior" width="150px" imgUrl="https://i.pinimg.com/originals/3c/80/22/3c8022ab0bcdc891fa55aff4185b1e34.jpg" />
            <Grid is_flex margin="4px 0">
              <Image type="circle" size="20px" />
              <Text bold size="xsmall" margin="1px 4px">닉네임</Text>
            </Grid>
            <TextBox>
              <Text size="xsmall" color="#525252">
                다락방 침실공간이에요. 봄이 되니 식물들 새순들도...
                {/* {post.content.length < 27 
                  ? post.content
                  : post.content.slice(0, 26) + '...'} */}
              </Text>
            </TextBox>
          </ContentWrapper>
          <ContentWrapper _onClick={openDetail}>
            <Image type="planterior" width="150px" imgUrl="https://i.pinimg.com/originals/11/b2/c2/11b2c270f13907f7017f90440801720c.jpg" />
            <Grid is_flex margin="4px 0">
              <Image type="circle" size="20px" />
              <Text bold size="xsmall" margin="1px 4px">닉네임</Text>
            </Grid>
            <TextBox>
              <Text size="xsmall" color="#525252">
                다락방 침실공간이에요. 봄이 되니 식물들 새순들도...
                {/* {post.content.length < 27 
                  ? post.content
                  : post.content.slice(0, 26) + '...'} */}
              </Text>
            </TextBox>
          </ContentWrapper>
          <ContentWrapper _onClick={openDetail}>
            <Image type="planterior" width="150px" imgUrl="https://cdn.onebauer.media/one/lifestyle-legacy/4b/88ecc/c88f7/bdf8f/77e19/bd43f/79478/plant_620x349.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill" />
            <Grid is_flex margin="4px 0">
              <Image type="circle" size="20px" />
              <Text bold size="xsmall" margin="1px 4px">닉네임</Text>
            </Grid>
            <TextBox>
              <Text size="xsmall" color="#525252">
                다락방 침실공간이에요. 봄이 되니 식물들 새순들도...
                {/* {post.content.length < 27 
                  ? post.content
                  : post.content.slice(0, 26) + '...'} */}
              </Text>
            </TextBox>
          </ContentWrapper>
          <ContentWrapper _onClick={openDetail}>
            <Image type="planterior" width="150px" imgUrl="https://i.pinimg.com/564x/eb/f6/fa/ebf6faeea4e7615722f44c076951648c.jpg" />
            <Grid is_flex margin="4px 0">
              <Image type="circle" size="20px" />
              <Text bold size="xsmall" margin="1px 4px">닉네임</Text>
            </Grid>
            <TextBox>
              <Text size="xsmall" color="#525252">
                다락방 침실공간이에요. 봄이 되니 식물들 새순들도...
                {/* {post.content.length < 27 
                  ? post.content
                  : post.content.slice(0, 26) + '...'} */}
              </Text>
            </TextBox>
          </ContentWrapper>
          <ContentWrapper _onClick={openDetail}>
            <Image type="planterior" width="150px" imgUrl="https://i.pinimg.com/564x/eb/f6/fa/ebf6faeea4e7615722f44c076951648c.jpg" />
            <Grid is_flex margin="4px 0">
              <Image type="circle" size="20px" />
              <Text bold size="xsmall" margin="1px 4px">닉네임</Text>
            </Grid>
            <TextBox>
              <Text size="xsmall" color="#525252">
                다락방 침실공간이에요. 봄이 되니 식물들 새순들도...
                {/* {post.content.length < 27 
                  ? post.content
                  : post.content.slice(0, 26) + '...'} */}
              </Text>
            </TextBox>
          </ContentWrapper>
        </Masonry>
      </Grid>

    </React.Fragment>
  )
}


const ContentWrapper = styled.div`
  width: 100%;
  height: fit-content;
`
const TextBox = styled.div`  
  height: 40px;
  
  font-size: 13px;
  line-height: 20px;
  color: #525252;
`



export default PlanteriorList;