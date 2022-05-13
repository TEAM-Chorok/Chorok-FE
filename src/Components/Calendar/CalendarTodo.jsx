import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Image, Text } from "../../Elements";

import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import CalendarTodoBlock from "./CalendarTodoBlock";




// 캘린더 테스트 
// 현재는 선택한 날짜 출력만 되게 해놓은 상태

const CalendarTodo = () => {

  const workType = {
    w1: <TodoIcons workType="물주기" img="img/calendaricon/droplet.png" />,
    w2: <TodoIcons workType="통풍하기" img="img/calendaricon/wind.png" />,
    w3: <TodoIcons workType="분무하기" img="img/calendaricon/spray.png" />,
    w4: <TodoIcons workType="분갈이" img="img/calendaricon/potted_plant.png" />,
    w5: <TodoIcons workType="영양제" img="img/calendaricon/pill.png" />,
    w6: <TodoIcons workType="꽃 핀 날" img="img/calendaricon/tulip.png" />,
  }

  return (
    <React.Fragment>
      <Grid>
        <Text bold size="large">동동이</Text>
      </Grid>
        <CalendarTodoBlock workType={workType.w1} />
        <CalendarTodoBlock workType={workType.w2} />
        <CalendarTodoBlock workType={workType.w3} />
        <CalendarTodoBlock workType={workType.w4} />
        <CalendarTodoBlock workType={workType.w5} />
        <CalendarTodoBlock workType={workType.w6} />
    </React.Fragment>
  )
};

const TodoIcons = (props) => {
  return (
    // <Grid is_flex width="100%" align="center">
    <TodoBox>
      <Image type="square" size="13px" imgUrl={props.img} />
      <Text margin="0 8px" size="small">{props.workType}</Text>
    </TodoBox>
    // </Grid>
    );
}


const TodoBox = styled.div`
width: 100%;
height: 52px;

display: flex;
align-items: center;

border-bottom: 1px solid #F4F4F4;
`

export default CalendarTodo;

