import React from "react";
import styled from "styled-components";

import { Grid, Input, Text } from "../Elements";
import { IoSearch } from "react-icons/io5";


// 헤더 컴포넌트
// 호출시 다음과 같이 작성해주시면 됩니다!
// <PlantSearchHeader title="상단에 표시될 문구" size="상단 문구 사이즈(ex_h5, base...)"/>

const PlantSearchHeader = (props) => {

  return (
    <React.Fragment>
    <Grid width="100%">
      <Grid>
        <Text bold size={props.size}>{props.title}</Text>
      </Grid>
      <InputWrapper>
        <Input type="search" width="100%" placeholder="거실? 몬스테라?"/>
        <IconWrapper>
          <IoSearch size="24px" color="#262626"/>
        </IconWrapper>
      </InputWrapper>
    </Grid>
    </React.Fragment>
  )
}

PlantSearchHeader.defaultProps = {
  title: "title",
  size: "base",
}


const InputWrapper = styled.div`
  position: relative;
  margin: 12px 0;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
`

export default PlantSearchHeader;