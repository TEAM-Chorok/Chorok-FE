import React from "react";
import { Button, Grid } from "../Elements";
import { ReactComponent as EventPage } from "../Assets/img/event.svg"
import styled from "styled-components";
// open api test components
const Event = () => {

    return (
        <React.Fragment>
            <EventPage/>
            <Div>
            </Div>
        </React.Fragment>
    );
}


const Div = styled.div`
    position: absolute;
    bottom: 72px;

    width: 100%;
    height: 48px;
    border: 1px solid red;
` 




export default Event;