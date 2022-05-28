import React from "react";
import './Calendar.css';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainActions } from "../../Redux/Modules/Main";
import PlantProfile from "../share/etc/PlantProfile";
import XdragScroll from "../share/etc/XdragScroll";

const CalendarMyPlant = (props) => {
  const dispatch = useDispatch();
  const myPlant = useSelector((state) => state.main?.myplant);

  React.useEffect(() => {
    dispatch(mainActions.getMyPlantDB());
  }, [dispatch])

  return (
    <React.Fragment>
      <XdragScroll>
        {myPlant?.map((plant) => {
          return(
          <PlantProfile key={plant.myPlantNo}
            checked={props.plantNo === plant.myPlantNo ? true : false}  
            name={plant?.myPlantName.length<6? plant.myPlantName : plant.myPlantName.slice(0,4)+'...'} 
            plant={plant?.plantName.length<6? plant.plantName : plant.plantName.slice(0,5)+'...'} 
            imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : '/img/nonImageIcons/nonImagePlantProfile.svg'}          
            _onClick={() => {
              props.setPlantNo(plant?.myPlantNo);
              props.setPlantName(plant?.myPlantName);}} />
          )
        })}
      </XdragScroll>
    </React.Fragment>
  )
};

const PlantBox = styled.div`
  display: flex;
  
  padding: 8px 0;

  width: 100%;
  height: 100px;


  overflow-x: scroll;
`

export default CalendarMyPlant;

