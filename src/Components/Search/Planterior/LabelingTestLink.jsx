import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../../../Elements";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


// 탐색 - planterior 상단의 레이블링 테스트 링크 컴포넌트  

const LabelingTestLink = () => {
  const history = useHistory();
  
  return (
    <React.Fragment>
      <Grid margin="10px 0">
        <Text bold>맞춤 식물 찾기</Text>
      </Grid>
      <LinkBox onClick={()=>{
        history.push("/recommend/1");
      }}>
        <Grid margin="0 5px" width="100%">
          <Grid>
            <Text size="XS">CRTI</Text>
          </Grid>
          <Grid>
            <Text size="XS">나와 맞는 식물을 찾아보세요!</Text>
          </Grid>
        </Grid>
          <IoIosArrowForward size="20px"/>
      </LinkBox>
    </React.Fragment>
  )
}

const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  padding: 10px;

  width: 100%;
  height: 60px;

  border-radius: 10px;
  background: #DDE1E6;
`

export default LabelingTestLink;