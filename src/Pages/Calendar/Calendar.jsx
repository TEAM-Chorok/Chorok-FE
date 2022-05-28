import React from "react";
import { CalendarMyPlant, CalendarTable, CalendarTodo, SideButton } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../Redux/Modules/Calendar";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CalendarPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [plantNo, setPlantNo] = React.useState(null);
  const [plantName, setPlantName] = React.useState(null);
  const [plantType, setPlantType] = React.useState(null);
  const [plantImg, setPlantImg] = React.useState(null);
  const [plantPlace, setPlantPlace] = React.useState(null);
  const [value, setValue] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const myPlant = useSelector((state) => state.main?.myplant);


  const year = moment(value).format('YYYY');
  const month = moment(value).format('MM');


  React.useEffect(() => {
    setPlantNo(null);
    dispatch(calendarActions.getCheckedDB(year, month, plantNo));
  }, [])

  React.useEffect(() => {
    if (!plantNo) {
      return;
    }
    dispatch(calendarActions.getCheckedDB(year, month, plantNo));
  }, [dispatch, plantNo, month, year])


  return (
    <React.Fragment>
      <Wrapper open={open}>
        <Grid width="100%" padding="16px 0 16px 16px">
          <Text size="h5">캘린더</Text>
          {myPlant ?
            <>
              <Grid margin="8px 0 -2px 0">
                <Text size="small">식물을 선택해주세요.</Text>
              </Grid>
              <CalendarMyPlant
                setPlantNo={setPlantNo}
                setPlantName={setPlantName}
                setPlantType={setPlantType}
                setPlantImg={setPlantImg}
                setPlantPlace={setPlantPlace}
                plantNo={plantNo} />
            </>
            : 
            <Grid width="100%" padding="0 16px 0 0">
              <Grid margin="40px auto 24px auto">
                <Text>등록된 식물이 없어요</Text>
              </Grid>
              <Grid width="100%" margin="0 0 40px 0" padding="0 8px">
                <Button type="square" _onClick={() => { history.push('/plant'); }}>
                  <Text color="#fff" weight="600">식물 추가하고 기록 남기기</Text>
                </Button>
              </Grid>
            </Grid>
            }
        </Grid>
        <CalendarTable setValue={setValue} value={value} />
        <Grid width="100%" padding="16px">
          {plantNo ?
            <CalendarTodo
              plantNo={plantNo}
              plantName={plantName}
              plantImg={plantImg}
              plantPlace={plantPlace}
              plantType={plantType} /> :
            <Grid margin="24px auto" height="150px">
              {/* <Text bold size="small">식물을 선택해주세요</Text> */}
            </Grid>
          }
          <Grid height="132px" width="100%" />
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