import React from "react";
import styled from "styled-components";
import { HomeMyplant, TodoContent, HomeHeader } from "../Components";
import { Container, Text } from "../Elements";


const Home = () => {

  const comp = {
    0: <TodoContent />,
    1: <HomeMyplant />,
  };

  const [active, setActive] = React.useState(0);

  return (
    <React.Fragment>
      <Container>

        <HomeHeader />

        <TabMenu>
          <ul>
            <li onClick={() => { setActive(0) }}><Text bold>할 일</Text></li>
            <li onClick={() => { setActive(1) }}><Text bold>내 식물</Text></li>
          </ul>
        </TabMenu>

        {comp[active]}

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
      margin: 5px 30px;
      width: 80px;
      text-align: center;
      list-style: none;
      cursor: pointer;
      }
    }
`;

export default Home;