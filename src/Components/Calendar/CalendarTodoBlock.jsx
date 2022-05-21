import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Grid } from "../../Elements";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { actionCreators as calendarActions } from "../../Redux/Modules/Calendar";
import moment from 'moment';
import { useDispatch } from "react-redux";

const CalendarTodoBlock = (props) => {
  const { workType, content, plantNo, _onClick } = props;
  
  const dispatch = useDispatch(); 

  const [checked, setChecked] = React.useState(false)

  const date = moment(new Date()).format('YYYYMMDD');
  const year = moment(new Date()).format('YYYY');
  const month = moment(new Date()).format('MM');
  const bloomingDay = moment(new Date()).format('YYYY-MM-DD');
  const data = {
    bloomingDay: bloomingDay
  }


  const check = () => {
    if (checked === false) {
      setChecked(true);
      if(workType === "꽃핀날") {
        dispatch(calendarActions.postBloomingDB(plantNo, data, year, month));
      } else {
        dispatch(calendarActions.checkCalendarDB(date, plantNo, workType, year, month));
      }
    } else {
      setChecked(false);
      if(workType === "꽃핀날") {
        dispatch(calendarActions.postBloomingDB(plantNo, date, year, month));
      } else {
        dispatch(calendarActions.checkCalendarDB(date, plantNo, workType, year, month));
      }
    };
  };



  return (
    <React.Fragment>
      <TodoBox>
        <Grid is_flex margin="0 4px" width="100%" align="center">
          <Grid width="100%">
            {content}
          </Grid>
          <Grid>
						{checked ? 
              <MdOutlineCheckBox color="#0AAF42" size="20px"
                onClick={() => { check(); }}
              /> : 
              <MdOutlineCheckBoxOutlineBlank size="20px" color="#C6C6C6" 
                onClick={() => { check(); }}
              />}
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

${'' /* border-bottom: 1px solid #F4F4F4; */}
`

export default CalendarTodoBlock;

