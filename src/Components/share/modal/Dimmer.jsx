import React from "react";


const Dimmer = (props) => {


  const { onClick } = props;

  return (
    <div className="Dimmer" onClick={onClick}></div>
  )
}

export default Dimmer;