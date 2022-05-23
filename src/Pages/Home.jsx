import React from "react";
import styled from "styled-components";
import { HomeMyplant, TodoContent, HomeHeader, Tabbar, SideButton } from "../Components";
import { Button, Grid } from "../Elements";
import { Container, Text } from "../Elements";

// 메인 페이지 
const Home = () => {

  // 메인페이지 상단 탭 선택에 따라 보여줄 컴포넌트 목록
  const comp = {
    0: <TodoContent />,
    1: <HomeMyplant />,
  };

  // 보여줄 컴포넌트 선택하는 state
  const [compNum, setCompNum] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Wrapper open={open}>
        <Container type="np" >
          <Box>
            <HomeHeader />
          </Box>
          <Grid padding="109px 16px 0 16px" width="100%" bg="#fff">
            <Tabbar tab1="할 일" tab2="내 식물" setCompNum={setCompNum} compNum={compNum} />
          </Grid>
          <Grid width="100%" bg="#fff">
            {comp[compNum]}
          </Grid>
          <SideButton open={open} setOpen={setOpen} />
        </Container>
      </Wrapper>
    </React.Fragment>
  );
}


const Wrapper = styled.div`
width: 100%;
height: 100%;
overflow: ${(props) => props.open ? "hidden" : "auto"};
`

const Box = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: #fff;
`


export default Home;