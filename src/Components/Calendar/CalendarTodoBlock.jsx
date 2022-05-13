import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Text } from "../../Elements";

import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";


const CalendarTodoBlock = (props) => {
    const {workType} = props;

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
			<TodoBox>
				<Grid is_flex margin="0 4px" width="100%" align="center">
					<Grid width="100%">
						{workType}
					</Grid>
					<Grid _onClick={check}>
						{checked ? <MdOutlineCheckBox color="#0AAF42" size="20px"/> : <MdOutlineCheckBoxOutlineBlank size="20px"/>}
					</Grid>
				</Grid>
			</TodoBox>
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

export default CalendarTodoBlock;

