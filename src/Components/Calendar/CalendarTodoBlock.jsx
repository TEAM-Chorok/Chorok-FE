import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Grid } from "../../Elements";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { calendarActions } from "../../Redux/Modules/Calendar";
import moment from 'moment';
import { useDispatch } from "react-redux";

// 캘린더 페이지 투두 항목 세부

const CalendarTodoBlock = (props) => {
  const { workType, content, plantNo, arr } = props;
  const dispatch = useDispatch();

  // 체크여부 관리
  const [checked, setChecked] = React.useState(false)

  // 날짜 관련
  const date = moment(new Date()).format('YYYYMMDD');
  const year = moment(new Date()).format('YYYY');
  const month = moment(new Date()).format('MM');
  const date2 = moment(new Date()).format('YYYY-MM-DD');
  const data = {
    bloomingDay: date2,
  }

  const check = () => {
    if (checked === false) {
      setChecked(true);
      if (workType === "꽃핀날") {
        dispatch(calendarActions.postBloomingDB(plantNo, data, year, month));
      } else {
        dispatch(calendarActions.checkCalendarDB(date, plantNo, workType, year, month));
      }
    } else {
      setChecked(false);
      if (workType === "꽃핀날") {
        dispatch(calendarActions.deleteBloomingDB(plantNo, date, year, month));
      } else {
        dispatch(calendarActions.unCheckCalendarDB(date, plantNo, workType, year, month));
      }
    };
  };


  React.useEffect(() => {
    if(arr) {
      if (date2 === arr[arr.length-1]) {
        setChecked(true);
        return;
      } else {
        setChecked(false);
        return;
      }
    }
  }, [date2, arr])


  return (
    <React.Fragment>
      <TodoBox>
        <Grid is_flex width="100%" align="center">
          <Grid width="100%">
            {content}
          </Grid>
          <div className="icon">
            {checked ?
              <MdOutlineCheckBox color="#0AAF42" size="20px"
                onClick={() => { check(); }}
              /> :
              <MdOutlineCheckBoxOutlineBlank size="20px" color="#C6C6C6"
                onClick={() => { check(); }}
              />}
          </div>
        </Grid>
      </TodoBox>
    </React.Fragment>
  )
};


const TodoBox = styled.div`
position: relative;

width: 100%;

display: flex;
align-items: center;

${'' /* border-bottom: 1px solid #F4F4F4; */}

  .icon{
    position:absolute;
    top:6px;
    right: 0px;
  }
`

export default CalendarTodoBlock;

