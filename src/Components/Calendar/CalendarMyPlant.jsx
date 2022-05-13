import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { Container, Grid, Text } from "../../Elements";
import PlantProfile from "../PlantProfile";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";

const CalendarMyPlant = (props) => {
  const dispatch = useDispatch();
  const myPlant = useSelector((state) => state.main?.myplant);


  React.useEffect(() => {
    dispatch(mainActions.getMyPlantDB());
  }, [])

  return (
    <React.Fragment>
      <PlantBox>
        {myPlant?.map((plant) => {
          return(
          <PlantProfile key={plant.myPlantNo} name={plant?.myPlantName} plant={plant?.plantName} _onClick={() => {props.setPlantNo(plant?.myPlantNo)}}/>
          )
        })}
      </PlantBox>
    </React.Fragment>
  )
};

const PlantBox = styled.div`
  display: flex;
  
  padding: 8px 0;

  width: 100%;
  height: 110px;

  border-bottom: 1px solid #E0E0E0;

  overflow-x: scroll;
`

export default CalendarMyPlant;

