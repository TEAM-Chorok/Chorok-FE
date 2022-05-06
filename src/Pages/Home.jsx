import React from "react";
import styled from "styled-components";
import { HomeMyplant, TodoContent, HomeHeader, Tabbar } from "../Components";
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

  return (
    <React.Fragment>
      <Container>

        <HomeHeader />

        <Tabbar tab1="할 일" tab2="내 식물" setCompNum={setCompNum} compNum={compNum}/>

          {comp[compNum]}
      
      </Container>
    </React.Fragment>
  );
}


const TabMenu = styled.div`
  display: flex;
  ul {
    display: flex;
    margin: auto;
    padding: 0;
    li {
      transition: 0.2s;
      box-sizing: border-box;
      margin: 5px 30px;
      padding: 5px 0;
      width: 55px;
      text-align: center;
      list-style: none;
      cursor: pointer;

      }
    }
`;

export default Home;