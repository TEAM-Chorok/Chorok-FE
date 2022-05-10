import React from "react";
import styled from "styled-components";
import { Grid, Input, Text } from "../../../Elements";
import PlaceFilter from "../PlaceFilter";



const PlanteriorWriteComp = () => {
  
  const [place, setPlace] = React.useState("all");

  return (
    <React.Fragment>
          <PlaceFilter setPlace={setPlace} />
    </React.Fragment>
  )
}


export default PlanteriorWriteComp;