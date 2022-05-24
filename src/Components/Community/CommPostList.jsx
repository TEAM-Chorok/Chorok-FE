import React, { useState } from "react";
import styled from "styled-components";
import CommPost from "./CommPost";
import { Grid, Text } from "../../Elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import InfiniteScroll from "../share/etc/InfiniteScroll";
import { useHistory } from "react-router-dom";

const CommPostList = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    // 무한스크롤 관련 state
    const [isLoading, setIsLoading] = React.useState(false);

    const postList = useSelector(state => state.post?.postList?.content);
    const category = props.category;


    React.useEffect(() => {
        {props.isLogin? 
            dispatch(postActions.getPostListDB_login(props.category, props.page)) :
            dispatch(postActions.getPostListDB_non_login(props.category, props.page))
        }
    }, [props.category, props.page, dispatch]);

    //infinite scroll 실행 함수
    const callback = async ([entry], observer) => {
        
        if(entry.isIntersecting && !isLoading) {
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


    return (
        <React.Fragment>
            {postList? 
                <InfiniteScroll 
                    page={props.page} 
                    callback={callback} 
                    isLoading={isLoading}>
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

const FloatBox = styled.div`
  position: absolute;
  top: 0;

  display:flex;
  align-items: center;
  
  margin: auto;

  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`

export default CommPostList;