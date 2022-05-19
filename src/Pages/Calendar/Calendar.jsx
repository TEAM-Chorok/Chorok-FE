import React from "react";
import { CalendarMyPlant, CalendarTable, CalendarTodo } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actionCreators as calendarActions } from "../../Redux/Modules/Calendar";


const CalendarPage = () => {
  const dispatch = useDispatch();
  const [plantNo, setPlantNo] = React.useState(null);
  const [plantName, setPlantName] = React.useState(null);
  const [value, setValue] = React.useState(new Date());

  const year = moment(value).format('YYYY');
  const month = moment(value).format('MM');
  
  
  React.useEffect(() => {
    setPlantNo(null);
    dispatch(calendarActions.getCheckedDB(year, month, plantNo));
  }, [])

  React.useEffect(() => {
    if(!plantNo){
      return;
    }
    dispatch(calendarActions.getCheckedDB(year, month, plantNo));
  }, [dispatch, plantNo, month, year])
  

  return (
    <React.Fragment>
      <Container type="np">
      <Container>
        <Text size="h5">캘린더</Text>
        <CalendarMyPlant setPlantNo={setPlantNo} setPlantName={setPlantName} plantName={plantName}/>
      </Container>
        <CalendarTable setValue={setValue} value={value} />
      <Container>
        {plantNo?
        <CalendarTodo plantNo={plantNo} plantName={plantName}/>:
        <Grid margin="24px auto">
          <Text bold size="small">식물을 선택해주세요</Text>
        </Grid>
        }
      </Container>
        <Button type="plus"/>
      </Container>
    </React.Fragment>
  )
}

export default CalendarPage;