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
  const {children, page, callback, isLoading, totalPage} = props;

  const [target, setTarget] = React.useState(null);
  
  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 0.7 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();

  }, [target]);

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