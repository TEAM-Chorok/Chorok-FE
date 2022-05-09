import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Text } from "../../Elements";
import PlantProfile from "../PlantProfile";



// 캘린더 테스트 
// 현재는 선택한 날짜 출력만 되게 해놓은 상태
// css 오버라이딩으로 스타일 처리 했습니다 ㅠ.ㅠ~! 

const CalendarMyPlant = () => {

  return (
    <React.Fragment>
      <PlantBox>
        <PlantProfile name="동동이" plant="몬스테라"/>
        <PlantProfile name="초록이" plant="로즈마리"/>
        <PlantProfile name="무럭이" plant="테이블야자"/>
      </PlantBox>
    </React.Fragment>
  )
};

const PlantBox = styled.div`
  display: flex;
  
  padding: 8px 0;

  width: 100%;
  height: 110px;

  border-bottom: 1px solid #E0E0E0;

  overflow-x: scroll;
`

export default CalendarMyPlant;

