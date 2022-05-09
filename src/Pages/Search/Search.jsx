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
          <PlantSearchHeader title="탐색" size="h5" />
        </Grid>
        <Tabbar tab1="사진" tab2="식물도감" setCompNum={setCompNum} compNum={compNum} />
      </Container>
      <Container type="np">
        <Grid width="100%" padding={compNum===1? "0 16px" : ""}>
          {comp[compNum]}
        </Grid>
      </Container>
    </React.Fragment>
  )
}



export default Search;