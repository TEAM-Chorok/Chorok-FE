import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import TodoContentBlock from "./TodoContentBlock";
import TodoProfile from "./TodoProfile";
// 투두페이지 할 일 목록 

const TodoContent = () => {

  return (
    <React.Fragment>

      <Grid margin="15px 0">
        <Grid margin="6px 0">
          <Text size="M" margin="10px 0">잎이 넓은 아레카야자는</Text>
        </Grid>
        <Grid margin="6px 0">
          <Text size="M" margin="10px 0">그늘진 곳을 좋아해요.</Text>
        </Grid>
      </Grid>

      <TodoProfile />

      <TodoBox>
        <Grid margin="0 5px">
          <Text bold size="M">동동이</Text>
        </Grid>

        <Grid margin="5px 0" width="100%">

          <TodoContentBlock img="img/water.png">
            <Text bold size="base">물 주기</Text><br />
            <Text size="xsmall">마지막으로 물 준지 5일 지났어요.</Text>
          </TodoContentBlock>

          <TodoContentBlock img="img/leaf.png">
            <Text bold>잎 닦기</Text><br />
            <Text size="XS">마지막으로 물 준지 24일 지났어요.</Text>
          </TodoContentBlock>


        </Grid>
      </TodoBox>

      <TodoBox>

        <Grid margin="0 5px" >
          <Text bold size="M">초록이</Text>
        </Grid>

        <TodoContentBlock img="img/water.png">
          <Text bold size="base">물 주기</Text><br />
          <Text size="xsmall">마지막으로 물 준지 5일 지났어요.</Text>
        </TodoContentBlock>

      </TodoBox>

    </React.Fragment>
  );
}

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  margin: 5px 0;
  padding: 12px 16px;

  width: 100%;
  height: 84px;
  
  border-radius: 15px;

  background: #F4F4F4;
`;

const TodoBox = styled.div`
  margin: 30px 0;
`;

export default TodoContent;