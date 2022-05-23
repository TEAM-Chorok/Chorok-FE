import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Image, Text } from "../../Elements";

import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import CalendarTodoBlock from "./CalendarTodoBlock";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as calendarActions } from "../../Redux/Modules/Calendar";
import moment from "moment";


// 캘린더 페이지 투두항목 관리

const CalendarTodo = (props) => {

  const checkData = useSelector((state) => state.calendar?.checkedData);
  const blooming = checkData?.blooming;
  const changing = checkData?.changing;
  const leafcleaning = checkData?.leafcleaning;
  const supplements = checkData?.supplements;
  const watering = checkData?.watering;
  const refreshing = checkData?.refreshing;


  const content = {
    w1: <TodoIcons content="물주기" img="img/calendaricon/water.svg" />,
    w2: <TodoIcons content="잎닦기" img="img/calendaricon/leaf.svg" />,
    w3: <TodoIcons content="환기하기" img="img/calendaricon/wind.svg" />,
    w4: <TodoIcons content="분갈이" img="img/calendaricon/pottedplant.svg" />,
    w5: <TodoIcons content="영양제" img="img/calendaricon/pill.svg" />,
    w6: <TodoIcons content="꽃 핀 날" img="img/calendaricon/flower.svg" />,
  }

  return (
    <React.Fragment>
      <Grid margin="8px 0">
        <Text bold size="large">{props.plantName}</Text>
      </Grid>
        
        <CalendarTodoBlock content={content.w1} workType="물주기" arr={watering} plantNo={props.plantNo}/>
        <CalendarTodoBlock content={content.w2} workType="잎닦기" arr={leafcleaning} plantNo={props.plantNo}/>
        <CalendarTodoBlock content={content.w3} workType="환기" arr={refreshing} plantNo={props.plantNo}/>
        <CalendarTodoBlock content={content.w4} workType="분갈이" arr={changing} plantNo={props.plantNo}/>
        <CalendarTodoBlock content={content.w5} workType="영양제" arr={supplements} plantNo={props.plantNo}/>
        <CalendarTodoBlock content={content.w6} workType="꽃핀날" arr={blooming} plantNo={props.plantNo}/>
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

