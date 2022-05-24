import React, { Children } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Text } from "../../../Elements";


// 무한스크롤 컴포넌트
// props로 page, callback함수, isLoading을 넘겨주셔야합니다~!  
//
// 아래와 같이 리스트를 감싸도록 호출해주세요! 
// <InfiniteScroll page={page} callback={callback} isLoading={isLoading}>
//  ~ 리스트 ~
// </InfiniteScroll>

// 로딩중 표시는 이후에 스피너같은걸로 수정할게요 ~!!! >.<


const InfiniteScroll = (props) => {
  const {children, page, callback, isLoading} = props;

  const [target, setTarget] = React.useState(null);
  const totalPage = useSelector((state) => state.search?.planteriorList?.totalPage);

  //커뮤니티 totalPage
  const communityTotalPage = useSelector((state) => state.post?.postList?.totalPage); 

  //내 식물공간 totalPage
  const myPicturesTotalPage = useSelector((state) => state.mypage?.photoList?.totalPage); 
  //스크랩한 식물공간 totalPage
  const scrapPicturesTotalPage = useSelector((state) => state.mypage?.scrapPhotoList?.totalPage); 
  //내가 쓴 초록톡 totalPage
  const myPostTotalPage = useSelector((state) => state.mypage?.postList?.totalPage); 
  //스크랩한 초록톡 totalPage
  const scrapPostTotalPage = useSelector((state) => state.mypage?.scrapPostList?.totalPage); 
  
  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 0.7 });
      observer.observe(target);//관찰 시작
    }
    return () => observer && observer.disconnect();//관찰 있으면 관찰 멈추기
  }, [target]);

  if(totalPage){
    return (
      <React.Fragment>
        {children}
        {isLoading ?
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid>
          : null}
        {totalPage > page ? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
      );
  }
  if(communityTotalPage > page) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid> }
        {communityTotalPage > (page+1) ? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
      );
  }
  if(myPicturesTotalPage > page) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid> }
        {myPicturesTotalPage > (page+1)? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
      );
  }
  if(scrapPicturesTotalPage > page) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid> }
        {scrapPicturesTotalPage > (page+1)? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
      );
  }
  if(myPostTotalPage > page) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid> }
        {myPostTotalPage > (page+1)? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
      );
  }
  if(scrapPostTotalPage > page) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid> }
        {scrapPostTotalPage > (page+1)? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
      );
  }

};

  const Box = styled.div`
  width: 100%;
  height: 100px;
  `

  export default InfiniteScroll;