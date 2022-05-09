import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Text } from "../../Elements";

import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import CalendarTodoBlock from "./CalendarTodoBlock";
// 캘린더 테스트 
// 현재는 선택한 날짜 출력만 되게 해놓은 상태
// css 오버라이딩으로 스타일 처리 했습니다 ㅠ.ㅠ~! 

const CalendarTodo = () => {

	const workType = {
		w1: "💧 물주기",
		w2: "🌀 통풍하기",
		w3: "🔫 분무하기",
		w4: "🌳 분갈이",
		w5: "💊 영양제",
		w6: "🌸 꽃 핀 날",
	}

	return (
		<React.Fragment>

			<Grid>
				<Text bold size="large">동동이</Text>
			</Grid>

			<CalendarTodoBlock workType={workType.w1}/>
			<CalendarTodoBlock workType={workType.w2}/>
			<CalendarTodoBlock workType={workType.w3}/>
			<CalendarTodoBlock workType={workType.w4}/>
			<CalendarTodoBlock workType={workType.w5}/>
			<CalendarTodoBlock workType={workType.w6}/>

		</React.Fragment>
	)
};


const TodoBox = styled.div`
width: 100%;
height: 52px;

display: flex;
align-items: center;

border-bottom: 1px solid #F4F4F4;
`

export default CalendarTodo;

