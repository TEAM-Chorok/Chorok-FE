import moment from "moment";
import React from "react";
import Calendar from "react-calendar";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Text } from "../../Elements";



// 캘린더 테스트 
// 현재는 선택한 날짜 출력만 되게 해놓은 상태
// css 오버라이딩으로 스타일 처리 했습니다 ㅠ.ㅠ~! 

const CalendarTable = () => {
  const [value, setValue] = React.useState(new Date());
  const checkdate = ["2022-05-03", "2022-05-06", "2022-05-15"];
  const checkdate2 = ["2022-05-01", "2022-05-04", "2022-05-20", "2022-05-27"];

  return (
    <React.Fragment>
        <CalendarBox>
          <Calendar 
            className={"c1"} 
            onChange={setValue} value={value} 
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
                <Grid width="100%" height="45px">
                  {checkdate.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                    <Text fontSize="2px">💧</Text>
                  : ""}
                  {checkdate.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                    <Text fontSize="2px">🌀</Text>
                  : ""}
                  {checkdate2.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                    <Text fontSize="2px">🔫</Text>
                  : ""}
                  {checkdate2.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                    <Text fontSize="2px">🌳</Text>
                  : ""}
                  {checkdate2.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                    <Text fontSize="2px">💊</Text>
                  : ""}
                  {checkdate2.find((x) => x === moment(date).format("YYYY-MM-DD"))?
                    <Text fontSize="2px">🌸</Text>
                  : ""}
                </Grid>
              )
            }}
          />
          <Container>
            <Grid margin="20px auto">
            <Text size="M" color="#FE9A2E">{moment(value).format("YYYY년 MM월 DD일")}</Text>
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

export default CalendarTable;

