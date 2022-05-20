import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text } from '../Elements';
import { ReactComponent as GoBackIcon } from "../Assets/img/Icons/goBackIcon.svg"

const GeneralHeader = (props) => {
  const history = useHistory();

  return (
      <Header>
          <GoBackIcon 
            style={{ position: 'absolute', left: 0 }}
            onClick={() => history.goBack()}/>
          <Text line="2.5em" bold size={props.size}>{props.title}</Text>
      </Header>
  )
}
const Header = styled.div`
  position: relative;
  display: flex;

  text-align: center;
  align-items: center;
  justify-content:center;

  width: 100%;
  height: 40px;

  background: #fff;
`

export default GeneralHeader;