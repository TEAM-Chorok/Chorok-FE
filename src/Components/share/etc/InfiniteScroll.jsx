import React, { Children } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Grid, Text } from "../../../Elements";
import { ReactComponent as Spinner } from "../../../Assets/img/spinner.svg"

// 무한스크롤 컴포넌트
// props로 page, callback함수, isLoading을 넘겨주셔야합니다~!  
//
// 아래와 같이 리스트를 감싸도록 호출해주세요! 
// <InfiniteScroll page={page} totalPage={totalPage} callback={callback} isLoading={isLoading}>
//  ~ 리스트 ~
// </InfiniteScroll>

// 로딩중 표시는 이후에 스피너같은걸로 수정할게요 ~!!! >.<


const InfiniteScroll = (props) => {
  const { children, page, totalPage, callback, isLoading } = props;

  const [target, setTarget] = React.useState(null);


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
      observer.observe(target);
    }
    return () => observer && observer.disconnect();

  }, [target]);



  if (communityTotalPage) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid>}
        {communityTotalPage > (page + 1) ? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
    );
  }
  if (myPicturesTotalPage) {
    return (
      <React.Fragment>
        {children}

        {myPicturesTotalPage > (page + 1) ? <Box ref={setTarget}> </Box> : null}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid>}
      </React.Fragment>
    );
  }
  if (scrapPicturesTotalPage > props.page) {
    return (
      <React.Fragment>
        {children}

        {scrapPicturesTotalPage > (props.page + 1) ? <Box ref={setTarget}> </Box> : null}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid>}
      </React.Fragment>
    );
  }
  if (myPostTotalPage) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid>}
        {myPostTotalPage > (page + 1) ? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
    );
  }
  if (scrapPostTotalPage) {
    return (
      <React.Fragment>
        {children}
        {isLoading &&
          <Grid margin="auto">
            <Text bold size="base">로딩중</Text>
          </Grid>}
        {scrapPostTotalPage > (page + 1) ? <Box ref={setTarget}> </Box> : null}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {children}
      {totalPage - 1 > page ? <Box ref={setTarget}> </Box> : null}
      {isLoading ?
        <Grid margin="auto">
          <Spinner/>
        </Grid>
        : null}
    </React.Fragment>
  );

};

const Box = styled.div`
  width: 100%;
  height: 20px;
  `

export default InfiniteScroll;