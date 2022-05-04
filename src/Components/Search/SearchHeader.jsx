import React from "react";
import styled from "styled-components";

import { Grid, Input, Text } from "../../Elements";
import { IoSearch } from "react-icons/io5";


// 탐색탭 헤더부분(검색창) 컴포넌트

const SearchPageHeader = () => {

  return (
    <React.Fragment>
    <Grid margin="0 0 30px 0">
      <Grid margin="10px 0">
        <Text bold>탐색</Text>
      </Grid>
      <InputWrapper>
        <Input type="search" placeholder="거실? 몬스테라?"/>
        <Grid margin="0 0 0 5px">
          <IoSearch size="24px" color="#323232"/>
        </Grid>
      </InputWrapper>
    </Grid>
    </React.Fragment>
  )
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


export default SearchPageHeader;