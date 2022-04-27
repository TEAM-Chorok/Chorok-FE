import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";
import TodoProfile from "./TodoProfile";


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

      <TodoProfile/>

      <TodoBox>
        <Grid margin="0 5px" width="fit-content">
          <Text bold size="M">동동이</Text>
        </Grid>
        <Grid margin="5px 0">

          <ContentBox>
            <Grid width="fit-content" height="fit-content">
              <Image type="circle" size="50px"/>
            </Grid>
            <Grid margin="0 20px" height="fit-content">
              <Text bold>물을 주는 날입니다.</Text><br/>
              <Text size="XS">💦물조리개를 준비하세요!</Text>
            </Grid>
          </ContentBox>

          <ContentBox>
            <Grid width="fit-content" height="fit-content">
              <Image type="circle" size="50px"/>
            </Grid>
            <Grid margin="0 20px" height="fit-content">
              <Text bold>분갈이한지 약 70일이 지났어요.</Text><br/>
              <Text size="XS">📏동동이의 키를 재볼까요?</Text>
            </Grid>
          </ContentBox>

          </Grid>
        </TodoBox>

        <TodoBox>
        <Grid margin="0 5px" width="fit-content">
          <Text bold size="M">초록이</Text>
        </Grid>
        <Grid margin="5px 0">
          <ContentBox>
            <Grid width="fit-content" height="fit-content">
              <Image type="circle" size="50px"/>
            </Grid>
            <Grid margin="0 20px" height="fit-content">
              <Text bold>할 일이 없어요.</Text><br/>
              <Text size="XS">🌿오늘은 지켜만 봐도 좋아요 :)</Text>
            </Grid>
          </ContentBox>
          </Grid>
        </TodoBox>

    </React.Fragment>
  );
}

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  margin: 5px 0;
  padding: 10px 20px;

  width: 100%;
  height: 80px;
  
  border-radius: 15px;

  background: #eee;
`;

const TodoBox = styled.div`
  margin: 30px 0;
`;

export default TodoContent;