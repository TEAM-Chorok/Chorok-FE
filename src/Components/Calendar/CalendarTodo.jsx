import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Image, Text } from "../../Elements";

import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import CalendarTodoBlock from "./CalendarTodoBlock";
import { useDispatch } from "react-redux";
import { actionCreators as calendarActions } from "../../Redux/Modules/Calendar";
import moment from "moment";


// 캘린더 테스트 
// 현재는 선택한 날짜 출력만 되게 해놓은 상태

const CalendarTodo = (props) => {
  const dispatch = useDispatch();

  const content = {
    w1: <TodoIcons content="물주기" img="img/calendaricon/water.svg" />,
    w2: <TodoIcons content="잎닦기" img="img/calendaricon/leaf.svg" />,
    w3: <TodoIcons content="환기하기" img="img/calendaricon/wind.svg" />,
    w4: <TodoIcons content="분갈이" img="img/calendaricon/pottedplant.svg" />,
    w5: <TodoIcons content="영양제" img="img/calendaricon/pill.svg" />,
    w6: <TodoIcons content="꽃 핀 날" img="img/calendaricon/flower.svg" />,
  }


  const [checked, setChecked] = React.useState(false)


	const check = () => {
		if (checked === false) {
			setChecked(true);
    } else {
      setChecked(false);
		};
	};


  return (
    <React.Fragment>
      <Grid margin="8px 0">
        <Text bold size="large">{props.plantName}</Text>
      </Grid>
        
        <CalendarTodoBlock content={content.w1} workType="물주기" plantNo={props.plantNo} _onClick={() => { check() }}/>
        <CalendarTodoBlock content={content.w2} workType="잎닦기" plantNo={props.plantNo} _onClick={() => { check() }}/>
        <CalendarTodoBlock content={content.w3} workType="환기" plantNo={props.plantNo} _onClick={() => { check() }}/>
        <CalendarTodoBlock content={content.w4} workType="분갈이" plantNo={props.plantNo} _onClick={() => { check() }}/>
        <CalendarTodoBlock content={content.w5} workType="영양제" plantNo={props.plantNo} _onClick={() => { check() }}/>
        <CalendarTodoBlock content={content.w6} workType="꽃핀날" plantNo={props.plantNo} _onClick={() => { check() }}/>
    </React.Fragment>
  )
};


const TodoIcons = (props) => {
  return (
    <TodoBox>
      <Image type="square" size="15px" imgUrl={props.img} />
      <Text margin="0 8px" size="small">{props.content}</Text>
    </TodoBox>
    );
}


const TodoBox = styled.div`
width: 100%;
height: 52px;

display: flex;
align-items: center;

`

export default CalendarTodo;

