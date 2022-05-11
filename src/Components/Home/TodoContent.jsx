import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import TodoContentBlock from "./TodoContentBlock";
import TodoProfile from "./TodoProfile";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import { useDispatch, useSelector } from "react-redux";

// 투두페이지 할 일 목록 
const TodoContent = () => {
  const dispatch = useDispatch();

  const myPlant = useSelector((state) => state);
  const sentence = useSelector((state) => state);
  const todoList = useSelector((state) => state);


  React.useEffect(() => {
    // dispatch(mainActions.getSentenceDB());
    // dispatch(mainActions.getMyPlantDB());
    // dispatch(mainActions.getTodoListDB());
  }, [])

  return (
    <React.Fragment>

        <TitleBox>
          <Grid width="100%">
            <Text bold size="h6">
              잎이 넓은 아레카야자는<br />
              그늘진 곳을 좋아해요.
            </Text>
          </Grid>
          <Grid width="100%" margin="16px 0">
            <TodoProfile />
          </Grid>
        </TitleBox>

        <Wrapper>
          <TodoBox>
            <Grid is_flex margin="0 5px" align="center">
              <Image type="circle" size="18px" />
              <Text bold size="large" margin="0 8px">동동이</Text>
              <Text size="small" color="#525252" margin="0">몬스테라 · 거실</Text>
            </Grid>
            <Grid margin="5px 0" width="100%">
              <TodoContentBlock img="img/todoicon/water.png" todoNo="1">
                <Text bold size="large">물 주기</Text><br />
                <Text size="xsmall">마지막으로 물 준지 5일 지났어요.</Text>
              </TodoContentBlock>
              <TodoContentBlock img="img/todoicon/leaf.png" todoNo="2">
                <Text bold size="large">잎 닦기</Text><br />
                <Text size="xsmall">잎을 닦은지 24일 지났어요.</Text>
              </TodoContentBlock>
            </Grid>
          </TodoBox>

          <TodoBox>
            <Grid is_flex margin="0 5px" align="center">
              <Image type="circle" size="18px" />
              <Text bold size="large" margin="0 8px">초록이</Text>
              <Text size="small" color="#525252" margin="0">로즈마리 · 창가</Text>
            </Grid>
            <TodoContentBlock img="img/todoicon/water.png" todoNo="3">
              <Text bold size="large">분갈이</Text><br />
              <Text size="xsmall">분갈이한 이후 5일 지났어요.</Text>
            </TodoContentBlock>
          </TodoBox>

        </Wrapper>

    </React.Fragment>
  );
}
const TitleBox = styled.div`
  margin-top: 20px;
  padding: 0 16px;
  border-bottom: 1px solid #E0E0E0;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 26px 16px;

  width: 100%;

  background: #F7F8FA;
`

const TodoBox = styled.div`
  box-sizing: border-box;
  margin: 0 0 30px 0;
`;

export default TodoContent;