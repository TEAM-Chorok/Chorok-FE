import React from "react";
import styled from "styled-components";
import { AddPlantList, Planterior, SearchHeader } from "../../Components";

import { Container, Grid, Image, Text } from "../../Elements";


// 탐색페이지
const Search = () => {

  // 탐색페이지 상단 탭 선택에 따라 보여줄 컴포넌트 목록
  const comp = {
    0: <Planterior />,
    1: <AddPlantList />,
  };

  // 보여줄 컴포넌트 선택하는 state
  const [active, setActive] = React.useState(0);

  return (
    <React.Fragment>
      <Container>
        <Grid width="100%">
          <SearchHeader />
        </Grid>

        <TabMenu>
          <ul>
            <li onClick={() => { setActive(0) }}><Text bold>사진</Text></li>
            <li onClick={() => { setActive(1) }}><Text bold>식물도감</Text></li>
          </ul>
        </TabMenu>
        <Grid margin="20px 0" width="100%">
          {comp[active]}
        </Grid>
      </Container>
    </React.Fragment>
  )
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
export default Search;