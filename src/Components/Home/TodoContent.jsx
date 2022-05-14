import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import TodoContentBlock from "./TodoContentBlock";
import TodoProfile from "./TodoProfile";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// 투두페이지 할 일 목록 
const TodoContent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const myPlant = useSelector((state) => state);
  const sentence = useSelector((state) => state.main.sentence);
  const todoList = useSelector((state) => state?.main?.todo);


  React.useEffect(() => {
    dispatch(mainActions.getSentenceDB());
    dispatch(mainActions.getMyPlantDB());
    dispatch(mainActions.getTodoListDB());
  }, [])

  return (
    <React.Fragment>

      <TitleBox>
        <Grid width="100%">
          <SentenceBox>
            <Text bold size="h6">
              {sentence}
            </Text>
          </SentenceBox>
        </Grid>
        <Grid width="100%" margin="16px 0">
          <TodoProfile />
        </Grid>
      </TitleBox>

      <Wrapper>

        {todoList?.map((plant, idx) => {
          return (
            <TodoBox key={plant.myPlantNo}>
              <Grid is_flex margin="0 5px" align="center">
                <Image type="circle" size="18px" imgUrl={plant.myPlantImgUrl} />
                <Text bold size="large" margin="0 8px">{plant.myPlantName}</Text>
                <Text size="small" color="#525252" margin="0">{plant.plantName} · 거실</Text>
              </Grid>
              <Grid margin="5px 0" width="100%">
                {plant?.todos?.map((todo, idx) => {
                  return (
                    <TodoContentBlock key={todo.todoNo} num={todo.todoNo} status={todo?.status} img="img/todoicon/water.png" todoNo="1">
                      <Text bold size="large">{todo.workType}</Text><br />
                      <Text size="xsmall">마지막으로 물 준지 {todo.days}일 지났어요.</Text>
                    </TodoContentBlock>
                  )
                })}
              </Grid>
            </TodoBox>
          )
        })}

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
  padding: 26px 16px 500px 16px;

  width: 100%;
  ${'' /* height: 500px; */}

  background: #F7F8FA;
`

const TodoBox = styled.div`
  box-sizing: border-box;
  margin: 0 0 30px 0;
`;

const SentenceBox = styled.div`
  width: 210px;
  word-break: keep-all;
`

export default TodoContent;