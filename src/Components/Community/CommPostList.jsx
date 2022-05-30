import React, { useState } from "react";
import styled,{ keyframes } from "styled-components";
import CommPost from "./CommPost";
import { Grid, Text } from "../../Elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import InfiniteScroll from "../share/etc/InfiniteScroll";
import { useHistory } from "react-router-dom";
import { Masonry } from "@mui/lab";

const CommPostList = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();


     const [done, setDone] = React.useState(false);

     // skeleton
    const height = ["100px", "110px", "120px", "170px", "120px", "150px"]


    // 무한스크롤 관련 state
    const [isLoading, setIsLoading] = React.useState(false);

    const totalPage = useSelector(state => state.post?.postList?.totalPage);
    const postList = useSelector(state => state.post?.postList?.content);
    const category = props.category;


    React.useEffect(() => {
        {props.isLogin? 
            dispatch(postActions.getPostListDB_login(props.category, props.page)) :
            dispatch(postActions.getPostListDB_non_login(props.category, props.page))
        }
        setTimeout(() => {
            setDone(true);
        }, 2000);
        return;
    }, [props.category, props.page, dispatch]);

    //infinite scroll 실행 함수
    const callback = async ([entry], observer) => {
        
        if(entry.isIntersecting && !isLoading) {
            if(totalPage > props.page + 1){
            observer.unobserve(entry.target); //관찰 종료
            setIsLoading(true);
                await new Promise ((resolve) => {
                setTimeout(resolve, 2000);
            });
            props.setPage((pre) => pre + 1);
            setIsLoading(false);
            observer.observe(entry.target);
            }
        }
        
        
    }

    if(!postList){
        return (
            <RelativeBox>
              <FloatBox>
                <Grid margin="auto" height="100px" width="100%" align="center" position="absolute" top="300px">
                  {done &&
                    <DoneBox done={done}>
                      <Text bold size="base" margin="auto">데이터를 불러올 수 없습니다💬</Text>
                    </DoneBox>
                  }
                </Grid>
              </FloatBox>
              <Masonry columns={1} spacing={2} sx={{ "margin": "auto", padding: '0 8px' }}>
                {height.map((height, idx) => {
                  return (
                    <ContentWrapper key={idx}>
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
        )
    }
    return (
        <React.Fragment>
            {postList? 
                <InfiniteScroll 
                    page={props.page} 
                    callback={callback} 
                    isLoading={isLoading}
                    totalPage={totalPage}>
                    {postList.map((p,idx) =>{
                        return (
                            <React.Fragment  key={idx}>
                            <CommPost category={category} postList={p} page={props.page}/>
                            <Grid width="100%" height="12px" bg="#F7F8FA" />
                            </React.Fragment>
                        )
                    })}
                </InfiniteScroll>
            :
            <RelativeBox>
            <FloatBox>
              <Grid margin="auto">
                <Text bold size="base" margin="auto">데이터를 불러오고 있습니다💬</Text>
              </Grid>
            </FloatBox>
          </RelativeBox>
            } 
                
        </React.Fragment>
    )

}

const RelativeBox = styled.div`
  position: relative;
  width: 100%;
`

const ContentWrapper = styled.div`
  ${'' /* box-sizing: border-box; */}
  width: 100%;
  height: fit-content;
`

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
`
const FadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;


const DoneBox = styled.div`
  width: 100%;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${FadeIn};
  animation-fill-mode: forwards;
`;

export default CommPostList;