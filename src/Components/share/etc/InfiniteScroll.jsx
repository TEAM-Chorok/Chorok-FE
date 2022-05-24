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

  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 0.1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

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

};

  const Box = styled.div`
  width: 100%;
  height: 100px;
  `

  export default InfiniteScroll;