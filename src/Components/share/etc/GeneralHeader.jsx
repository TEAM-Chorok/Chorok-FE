import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Grid, Text } from '../../../Elements';
import { ReactComponent as GoBackIcon } from "../../../Assets/img/Icons/goBackIcon.svg"

const GeneralHeader = (props) => {
  const { _onClick } = props;
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
      <Header>
          <div onClick={_onClick? _onClick : goBack} className="grid">
            <GoBackIcon 
              style={{ width:"15px", height:"15px" }}/>
          </div>
          <Text line="2.5em" bold size={props.size}>{props.title}</Text>
      </Header>
  )
}
const Header = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;

  text-align: center;
  align-items: center;
  justify-content:center;

  width: 100%;
  height: 44px;

  background: #fff;

  .grid {
    position: absolute;
    display: flex;
    width: 24px;
    height: 24px;
    left: 8px;
    align-items: center;
  }
`

export default GeneralHeader;