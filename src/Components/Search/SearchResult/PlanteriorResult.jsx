import { Masonry } from "@mui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Image, Text } from "../../../Elements";
import { actionCreators as searchActions } from "../../../Redux/Modules/Search";
import InfiniteScroll from "../../share/etc/InfiniteScroll";
import { ReactComponent as NotFound } from "../../../Assets/img/Icons/notfound.svg"



const PlanteriorResult = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search?.resultPhoto);
  const result = data?.content;
  const totalPage = data?.totalPage;
  const value = useSelector((state) => state.search?.value);

  // 무한스크롤 관련 state
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

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

  const openDetail = (postId) => {
    history.push(`/planterior/post/${postId}`);
  }

  React.useEffect(() => {
    dispatch(searchActions.keywordSearchingPhotoDB(value, page));
  }, [page, value])

  return (
    <React.Fragment>
      <Grid width="100%" margin="16px 0">
        {result.length ?
          <InfiniteScroll
            page={page}
            totalPage={totalPage}
            callback={callback}
            isLoading={isLoading}>
            <Masonry columns={2} spacing={2} sx={{ "margin": "auto", }}>
              {result?.map((post, idx) => {
                return (
                  <ContentWrapper key={post.postId} onClick={() => { openDetail(post.postId); }}>
                    <Image type="planterior" width="150px" imgUrl={post.postImgUrl} />
                    <Grid is_flex margin="4px 0">
                      <Image type="circle" size="20px" />
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
          </InfiniteScroll>
          :
          <Grid margin="164px auto">
            <NotFound />
            <Grid margin="auto">
              <Text bold size="small">검색결과가 없습니다</Text>
            </Grid>
          </Grid>
        }
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
  height: 40px;
  
  font-size: 13px;
  line-height: 20px;
  color: #525252;
`




export default PlanteriorResult;