import React from "react";
import { CalendarMyPlant, CalendarTable, CalendarTodo } from "../../Components";
import { Container, Grid, Text } from "../../Elements";

const CalendarPage = () => {
    return (
        <React.Fragment>

            <Text size="h5">캘린더</Text>
            <CalendarMyPlant/>
            <CalendarTable/>
            <CalendarTodo/>
        </React.Fragment>
    )
}


export default CalendarPage;