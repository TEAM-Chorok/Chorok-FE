import React from "react";
import moment from "moment";
import Calendar from "react-calendar";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Image, Text } from "../../Elements";
import { useSelector } from "react-redux";



// 캘린더 테스트 
// 현재는 선택한 날짜 출력만 되게 해놓은 상태
// css 오버라이딩으로 스타일 처리 했습니다 ㅠ.ㅠ~! 

const CalendarTable = (props) => {
  const checkdate = ["2022-05-03", "2022-05-06", "2022-05-15"];
  const checkdate2 = ["2022-05-01", "2022-05-04", "2022-05-20", "2022-05-27"];

  const checkData = useSelector((state) => state.calendar.checkedData);

  const blooming = checkData.blooming;
  const changing = checkData.changing;
  const leafcleaning = checkData.leafcleaning;
  const supplements = checkData.supplements;
  const watering = checkData.watering;

  return (
    <React.Fragment>
        <CalendarBox>
          <Calendar 
            className={"c1"} 
            onChange={props.setValue} value={props.value} 
            calendarType={'US'}
            locale={'ko'}
            next2Label={''}
            prev2Label={''}
            formatMonthYear={(locale, date) => moment(date).format('YYYY년 M월')}
            formatDay={(locale, date) => moment(date).format("D")}
            minDetail={"month"}
            showNeighboringMonth={false}
            tileContent={({ date }) => {
              return (
                <GridBox>
                  {watering.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                  <IconBox>
                    <Image type="square" size="13px" imgUrl="img/calendaricon/droplet.png"/>
                  </IconBox>
                  : ""}
                  {checkdate2.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                  <IconBox>
                    <Image type="square" size="12px" imgUrl="img/calendaricon/wind.png"/>
                  </IconBox>
                  : ""}
                  {checkdate.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                  <IconBox>
                    <Image type="square" size="12px" imgUrl="img/calendaricon/spray.png"/>
                  </IconBox>
                  : ""}
                  {changing.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                  <IconBox>
                    <Image type="square" size="12px" imgUrl="img/calendaricon/potted_plant.png"/>
                  </IconBox>
                  : ""}
                  {supplements.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                  <IconBox>
                    <Image type="square" size="12px" imgUrl="img/calendaricon/pill.png"/>
                  </IconBox>
                  : ""}
                  {blooming.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                  <IconBox>
                    <Image type="square" size="12px" imgUrl="img/calendaricon/tulip.png"/>
                  </IconBox>
                  : ""}
                </GridBox>
              )
            }}
          />
          <Container>
            <Grid margin="20px auto">
            <Text size="M" color="#FE9A2E">{moment(props.value).format("YYYY년 MM월 DD일")}</Text>
            </Grid>
          </Container>
        </CalendarBox>
    </React.Fragment>
  )
};

const CalendarBox = styled.div`
  .c1{
    .react-calendar{
      font-family: 'SUIT-Regular';
    }
  }
`
const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  
  margin: 4px auto;

  width: 40px;
  height: 30px;

`
const IconBox = styled.div`
  flex: none;
`

export default CalendarTable;

