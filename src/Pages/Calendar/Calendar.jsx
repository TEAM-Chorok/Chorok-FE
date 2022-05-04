import moment from "moment";
import React from "react";
import Calendar from "react-calendar";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Text } from "../../Elements";



// 캘린더 테스트 
// 현재는 선택한 날짜 출력만 되게 해놓은 상태
// css 오버라이딩으로 스타일 처리 했습니다 ㅠ.ㅠ~! 
// 이후 디자인이 어느정도 나오면 다시 모듈화해서 작업하게 될 것 같습니다! 

const CalendarPage = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <React.Fragment>
      <Container>
        <CalendarBox>
          <Calendar 
            className={"c1"} 
            onChange={setValue} value={value} 
            calendarType={'US'}
            locale={'en'}
            next2Label={''}
            prev2Label={''}
            formatMonthYear={(locale, date) => moment(date).format('M월')}
            formatDay={(locale, date) => moment(date).format("D")}
            showNeighboringMonth={false}
            />
          <Grid margin="20px auto">
          <Text size="M" color="#FE9A2E">{moment(value).format("YYYY년 MM월 DD일")}</Text>
          </Grid>
        </CalendarBox>
      </Container>
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

export default CalendarPage;

