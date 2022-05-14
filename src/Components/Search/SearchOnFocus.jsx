import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { Button, Container, Grid, Text } from "../../Elements";


const SearchOnFocus = () => {

  return (
    <React.Fragment>
      {/* <Text size="base">검색창 포커스</Text> */}
      <Wrapper>
      <Grid>
        <Button type="filter">몬스테라</Button>
      </Grid>
      <Grid>
        <Button type="filter">공작야자</Button>
      </Grid>
      <Grid>
        <Button type="filter">로즈마리</Button>
      </Grid>
      <Grid>
        <Button type="filter">베란다</Button>
      </Grid>
      <Grid>
        <Button type="filter">거실</Button>
      </Grid>
      </Wrapper>
    </React.Fragment>
  )
}


const Wrapper = styled.div`
  width: 250px;
  height: 100px; 
  margin: 0 16px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;


`

export default SearchOnFocus;