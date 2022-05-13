import React from "react";
import { CalendarMyPlant, CalendarTable, CalendarTodo } from "../../Components";
import { Container, Grid, Text } from "../../Elements";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actionCreators as calendarActions } from "../../Redux/Modules/Calendar";


const CalendarPage = () => {
  const dispatch = useDispatch();
  const [plantNo, setPlantNo] = React.useState(null);
  const [value, setValue] = React.useState(new Date());

  const year = moment(value).format('YYYY');
  const month = moment(value).format('MM');


  React.useEffect(() => {
    if(!plantNo){
      return;
    }
    dispatch(calendarActions.getCheckedDB(year, month, plantNo));
  }, [plantNo, value])


  return (
    <React.Fragment>
      <Container type="np">
        <Text size="h5">캘린더</Text>
        <CalendarMyPlant setPlantNo={setPlantNo} />
        <CalendarTable setValue={setValue} value={value} />
        <CalendarTodo />
      </Container>
    </React.Fragment>
  )
}

export default CalendarPage;