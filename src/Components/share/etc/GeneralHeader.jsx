import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Text } from '../../../Elements';
import { ReactComponent as GoBackIcon } from "../../../Assets/img/Icons/goBackIcon.svg"

const GeneralHeader = (props) => {
  const { _onClick } = props;
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
      <Header>
          <GoBackIcon 
            style={{ position: 'absolute', left: '20px' }}
            onClick={_onClick? _onClick : goBack}/>
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
`

export default GeneralHeader;