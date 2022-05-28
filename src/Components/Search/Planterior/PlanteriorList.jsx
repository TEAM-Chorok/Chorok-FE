import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import PlaceFilter from "../PlaceFilter";
import Masonry from '@mui/lab/Masonry';
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import InfiniteScroll from "../../share/etc/InfiniteScroll";

// 탐색 - planterior
// 사진 목록 컴포넌트

const PlanteriorList = ({place, page, setPage}) => {
  const is_login = localStorage.getItem('token') ? true : false;

  const history = useHistory();
  const dispatch = useDispatch();

  const [done, setDone] = React.useState(false);
  
  // 공간 게시글 데이터
  const data = useSelector((state) => state?.search?.planteriorList);
  const planteriorList = data?.content;

  const [isLoading, setIsLoading] = React.useState(false);
  const totalPage = data?.totalPage;

  // skeleton
  const height = ["100px", "130px", "150px", "200px", "200px", "120px"]

  // 게시글 디테일 페이지로 이동
  const openDetail = (postId) => {
    history.push(`/planterior/post/${postId}`)
  }

  // 무한스크롤 실행 함수
  const callback = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setPage((pre) => pre + 1);
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  // 게시글 조회 (페이지 변경, 필터선택시마다 실행)
  React.useEffect(() => {
    if (!is_login){
      setTimeout(() => {
        setDone(true);
      }, 2000);
      return;
    } else if (place === "all") {
      // 필터를 선택하지 않았을 경우
      dispatch(searchActions.getPlanteriorListDB(page));
      setTimeout(() => {
        setDone(true);
      }, 2000);
      return;
    } else {
      // 필터를 선택한 경우
      dispatch(searchActions.planteriorFilteringDB(place, page));
      setTimeout(() => {
        setDone(true);
      }, 2000);
      return;
    }
  }, [page, place, dispatch])



  return (
    <React.Fragment>
      <Grid width="100%">
        {planteriorList ?
          <InfiniteScroll
            page={page}
            callback={callback}
            totalPage={totalPage}
            isLoading={isLoading}>
            <Masonry columns={2} spacing={2} sx={{ margin:'auto', width:'100%', maxWidth:'500px', padding:'8px'}} >
              {planteriorList?.map((post, idx) => {
                return (
                  <ContentWrapper key={post.postId} onClick={() => { openDetail(post.postId) }}>
                    <Image type="planterior" width="100%" imgUrl={post.postImgUrl} />
                    <Grid is_flex margin="4px 0">
                      <Image type="circle" size="20px"
                        imgUrl={post.profileImageUrl ? post.profileImageUrl : "/img/noProfileImgSmall.svg"}
                      />
                      <Text bold size="xsmall" margin="1px 8px">{post.nickname}</Text>
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
          </InfiniteScroll>
          :
          <RelativeBox>
            <FloatBox>
              <Grid margin="auto">
              {done &&
                <DoneBox done={done}>
                  <Text bold size="base" margin="auto">데이터를 불러올 수 없습니다💬</Text>
                </DoneBox>
              }
              </Grid>
            </FloatBox>
            <Masonry columns={2} spacing={2} sx={{ "margin": "auto", padding: '0 8px'}}>
              {height.map((height, idx) => {
                return (
                  <ContentWrapper key={idx} _onClick={openDetail}>
                    <Grid width="100%" height={height} bg="#ddd" borderRadius="8px" />
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
            </Masonry>
            <Grid margin="-16px auto">
              <Grid margin="8px" width="5px" height="5px" borderRadius="5px" bg="#ddd" />
              <Grid margin="8px" width="5px" height="5px" borderRadius="5px" bg="#ddd" />
              <Grid margin="8px" width="5px" height="5px" borderRadius="5px" bg="#ddd" />
            </Grid>
          </RelativeBox>
        }
        <Grid height="50px" />
      </Grid>
    </React.Fragment>
  )
}

const FadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;


const ContentWrapper = styled.div`
  ${'' /* box-sizing: border-box; */}
  width: 100%;
  height: fit-content;
`;


const TextBox = styled.div`  
  font-family: 'SUIT';

  max-height: 40px;
  
  word-break: break-word;

  font-size: 13px;
  line-height: 20px;
  color: #525252;
`;

const DoneBox = styled.div`
  width: 100%;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${FadeIn};
  animation-fill-mode: forwards;
`;

const RelativeBox = styled.div`
  position: relative;
  width: 100%;
`;

const FloatBox = styled.div`
  position: absolute;
  top: 0px;

  display:flex;
  align-items: center;
  
  margin: auto;

  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;


export default PlanteriorList;