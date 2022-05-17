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

  const workType = {
    w1: <TodoIcons workType="물주기" img="img/calendaricon/water.svg" />,
    w2: <TodoIcons workType="잎닦기" img="img/calendaricon/leaf.svg" />,
    w3: <TodoIcons workType="환기하기" img="img/calendaricon/wind.svg" />,
    w4: <TodoIcons workType="분갈이" img="img/calendaricon/pottedplant.svg" />,
    w5: <TodoIcons workType="영양제" img="img/calendaricon/pill.svg" />,
    w6: <TodoIcons workType="꽃 핀 날" img="img/calendaricon/flower.svg" />,
  }

  const date = moment(new Date()).format('YYYY-MM-DD');
  const data = {
    bloomingday: date
  }
  const [checked, setChecked] = React.useState(false)


	const check = () => {
		if (checked === false) {
			setChecked(true);
    } else {
      setChecked(false);
		};
	};
  const bloomingcheck = () => {
    dispatch(calendarActions.postBloomingDB(props.plantNo, data));
  }
  
  return (
    <React.Fragment>
      <Grid margin="8px 0">
        <Text bold size="large">{props.plantName}</Text>
      </Grid>
        <CalendarTodoBlock workType={workType.w1} _onClick={() => { check() }}/>
        <CalendarTodoBlock workType={workType.w2} _onClick={() => { check() }}/>
        <CalendarTodoBlock workType={workType.w3} _onClick={() => { check() }}/>
        <CalendarTodoBlock workType={workType.w4} _onClick={() => { check() }}/>
        <CalendarTodoBlock workType={workType.w5} _onClick={() => { check() }}/>
        <CalendarTodoBlock workType={workType.w6} _onClick={() => { check() }}/>
    </React.Fragment>
  )
};


const TodoIcons = (props) => {
  return (
    <TodoBox>
      <Image type="square" size="15px" imgUrl={props.img} />
      <Text margin="0 8px" size="small">{props.workType}</Text>
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

