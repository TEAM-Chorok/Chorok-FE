import React from "react";
import styled from "styled-components";

import { Grid, Input, Text } from "../Elements";
import { IoSearch } from "react-icons/io5";
import { debounce } from "lodash";

// 검색창이 포함된 헤더 컴포넌트
// 호출시 다음과 같이 작성해주시면 됩니다!
// <PlantSearchHeader title="상단에 표시될 문구" size="상단 문구 사이즈(ex_h5, base...)" placeholder="미리 보여줄 문구"/>

const PlantSearchHeader = (props) => {

  const { _onFocus, _onBlur, _onClick, _onChange } = props;



  return (
    <React.Fragment>
    <Grid width="100%">
      <Grid>
        <Text bold size={props.size}>{props.title}</Text>
      </Grid>
      <InputWrapper>
        <Input type="search" width="100%" 
          placeholder={props.placeholder} 
          _onChange={_onChange}
          _onFocus={_onFocus} 
          _onBlur={_onBlur}
          />
        <IconWrapper>
          <IoSearch size="24px" color="#262626" onClick={_onClick}/>
        </IconWrapper>
      </InputWrapper>
    </Grid>
    </React.Fragment>
  )
}

PlantSearchHeader.defaultProps = {
  title: "title",
  size: "base",
  placeholder: "거실? 몬스테라?"
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