import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const Dimmer = (props) => {


  const { onClick } = props;

  return (
    <div className="Dimmer" onClick={onClick}></div>
  )
}

export default Dimmer;