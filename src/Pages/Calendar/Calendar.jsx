import React from "react";
import { CalendarMyPlant, CalendarTable, CalendarTodo, SideButton } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actionCreators as calendarActions } from "../../Redux/Modules/Calendar";
import styled from "styled-components";

const CalendarPage = () => {
  const dispatch = useDispatch();
  const [plantNo, setPlantNo] = React.useState(null);
  const [plantName, setPlantName] = React.useState(null);
  const [value, setValue] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);


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
      <Wrapper open={open}>
        <Grid width="100%" padding="16px">
          <Text size="h5">캘린더</Text>
          <CalendarMyPlant setPlantNo={setPlantNo} setPlantName={setPlantName} plantNo={plantNo} />
        </Grid>
        <CalendarTable setValue={setValue} value={value} />
        <Grid width="100%" padding="16px">
          {plantNo ?
            <CalendarTodo plantNo={plantNo} plantName={plantName} /> :
            <Grid margin="24px auto" height="150px">
              <Text bold size="small">식물을 선택해주세요</Text>
            </Grid>
          }
        <Grid height="132px" width="100%"/>
        </Grid>
        <SideButton open={open} setOpen={setOpen} />
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: ${(props) => props.open ? "hidden" : "auto"};
`


export default CalendarPage;