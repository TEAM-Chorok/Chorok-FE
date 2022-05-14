import React from "react";
import { CalendarMyPlant, CalendarTable, CalendarTodo } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actionCreators as calendarActions } from "../../Redux/Modules/Calendar";

const CalendarPage = () => {
  const dispatch = useDispatch();
  const [plantNo, setPlantNo] = React.useState(31);
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
      <Container>
        <Text size="h5">캘린더</Text>
        <CalendarMyPlant setPlantNo={setPlantNo} />
      </Container>
        <CalendarTable setValue={setValue} value={value} />
      <Container>
        <CalendarTodo />
      </Container>
        <Button type="plus"/>
      </Container>
    </React.Fragment>
  )
}

export default CalendarPage;