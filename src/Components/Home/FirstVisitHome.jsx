import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Image, Text } from "../../Elements";



const FirstVisitHome = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      
      <Wrapper>
        <Grid margin="150px auto">
          <Text size="M">nickname님, 반가워요</Text>
        </Grid>
        <Grid margin="35px auto">
          <Button onClick={()=>history.push('/add')}>식물 추가하기</Button>
          <Button onClick={()=>history.push('/labeling/1')}>나와 맞는 식물 찾으러 가기</Button>
        </Grid>
    </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  padding: 15px 0;
`


const PlantBox = styled.div`
  margin: 5px;
  width: 130px;
  height: 170px;
`
const Button = styled.button`
  width: 250px;
  height: 67px;
  color: white;
  background-color: #667080;
  text-align: center;
  margin: 16px auto;
`

export default FirstVisitHome;