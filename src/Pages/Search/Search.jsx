import React from "react";
import styled from "styled-components";
import { AddPlantList, Planterior, PlantSearchHeader, Tabbar } from "../../Components";

import { Container, Grid, Text } from "../../Elements";

// 탐색페이지
const Search = () => {

  // 탭 선택에 따라 보여줄 컴포넌트 목록
  const comp = {
    0: <Planterior />,
    1: <AddPlantList />,
  };

  // 보여줄 컴포넌트 넘버
  const [compNum, setCompNum] = React.useState(0);

  
  return (
    <React.Fragment>
      <Container>
        <Grid width="100%">
          <PlantSearchHeader title="탐색" size="h5"/>
        </Grid>
        <Tabbar tab1="사진" tab2="식물도감" setCompNum={setCompNum} compNum={compNum}/>
        <Grid margin="20px 0" width="100%">
          {comp[compNum]}
        </Grid>
      </Container>
    </React.Fragment>
  )
}



const Tab = styled.div`
  ul {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    padding: 0;
    list-style: none;
    }
`;

const TabMenu = styled.div`
  box-sizing: border-box;
  padding: 4px 0;
  margin: auto;

  width: 100%;

  text-align: center;
  
  border-bottom: ${(props) => props.line? "2px solid #24A148" : "none"};

  list-style: none;
  cursor: pointer;
`

const Line = styled.div`
  position: absolute;
  bottom: -4px;
  ${(props) => props.num === 0? "left: 0" : "left: 50%"};
  
  transition: 0.4s;
  width: 50%;
  
  border-bottom: 2px solid #24A148;
`

export default Search;