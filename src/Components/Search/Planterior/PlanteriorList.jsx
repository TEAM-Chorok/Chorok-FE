import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import PlaceFilter from "../PlaceFilter";
import Masonry from '@mui/lab/Masonry';
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";

// 탐색 - planterior
// 사진 목록 컴포넌트

const PlanteriorList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const height = ["100px", "100px", "100px", "100px", "100px"]

  // 사진 디테일 페이지로
  const openDetail = (postId) => {
    history.push(`/planterior/post/${postId}`)
  }

  const [place, setPlace] = React.useState("all");
  const planteriorList = useSelector((state) => state?.search?.planteriorList?.content);
  
  React.useEffect(() => {
    // 추천식물 조회 API가 없다......
    if(place==="all") {
      dispatch(searchActions.getPlanteriorListDB());
    } else {
      console.log("위치필터링", place)
      dispatch(searchActions.planteriorFilteringDB(place));
    }
  }, [place, dispatch])

  return (
    <React.Fragment>
      <PlaceFilter setPlace={setPlace} />
      <Grid width="100%">
        {planteriorList ?
          <Masonry columns={2} spacing={2} sx={{ "margin": "auto", }}>
            {planteriorList?.map((post, idx) => {
              return (
                <ContentWrapper key={post.postId} onClick={() => { openDetail(post.postId) }}>
                  <Image type="planterior" width="100%" imgUrl={post.postImgUrl} />
                  <Grid is_flex margin="4px 0">
                    <Image type="circle" size="20px"
                      imgUrl={post.profileImageUrl ? post.profileImageUrl : "/img/noProfileImgSmall.svg"}
                    />
                    <Text bold size="xsmall" margin="1px 4px">{post.nickname}</Text>
                  </Grid>
                  <TextBox>
                    <Text size="xsmall" color="#525252">
                      {post.postContent.length < 27
                        ? post.postContent
                        : post.postContent.slice(0, 26) + '...'}
                    </Text>
                  </TextBox>
                </ContentWrapper>
              )
            })}
          </Masonry>
          :
          <GridBox>
            {height.map((height, idx) => {
              return (
                <ContentWrapper key={idx} _onClick={openDetail}>
                  <Grid width="150px" height={height} bg="#ddd" borderRadius="8px" />
                  <Grid is_flex margin="4px 0" align="center">
                    <Grid width="20px" height="20px" bg="#ddd" borderRadius="20px" />
                    <Grid margin="0 4px" width="80px" height="12px" bg="#ddd" borderRadius="4px" />
                  </Grid>
                  <Grid width="100%">
                    <Grid margin="2px 0" width="140px" height="8px" bg="#ddd" borderRadius="4px" />
                    <Grid margin="8px 0" width="130px" height="8px" bg="#ddd" borderRadius="4px" />
                  </Grid>
                </ContentWrapper>
              )
            })}
          </GridBox>
        }
        <Grid height="50px" />
      </Grid>
    </React.Fragment>
  )
}


const ContentWrapper = styled.div`
  margin: auto;
  width: fit-content;
  height: fit-content;
`
const TextBox = styled.div`  
  max-height: 40px;
  
  font-size: 13px;
  line-height: 20px;
  color: #525252;
`

const GridBox = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns: 1fr 1fr;
`


export default PlanteriorList;