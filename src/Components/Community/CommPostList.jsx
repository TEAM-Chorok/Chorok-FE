import React, { useState } from "react";
import styled,{ keyframes } from "styled-components";
import CommPost from "./CommPost";
import { Grid, Text } from "../../Elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../Redux/Modules/post";
import InfiniteScroll from "../share/etc/InfiniteScroll";
import { useHistory } from "react-router-dom";

const CommPostList = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();


     const [done, setDone] = React.useState(false);


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
                <Grid margin="auto">
                  {done &&
                    <Grid done={done}>
                      <Text bold size="base" margin="auto">데이터를 불러올 수 없습니다💬</Text>
                    </Grid>
                  }
                </Grid>
              </FloatBox>
              
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

const FloatBox = styled.div`
  position: absolute;
  top: 300px;

  display:flex;
  align-items: center;
  
  margin: auto;

  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`
export default CommPostList;