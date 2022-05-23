import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";
import { Text } from "../../Elements";
import { GrClose } from 'react-icons/gr';


const AddPostHeader = (props) => {
  const { edit } = props;

  const history = useHistory();
  return (
    <React.Fragment>
      <Header>
        <GrClose style={{ marginRight: "28px" }} color="#656565" size="16px"
          onClick={() => history.goBack()} />
        <Text size="base" bold margin="0px">{props.title}</Text>
        {props.disable ?
          <Button
            disabled={true}
            style={{
              width: "fit-content",
              height: "fit-content",
              padding: "0px",
            }}>
            <Text size="base" color="#A8A8A8">{ edit ? "완료" : "올리기" }</Text></Button> :
          <Button
            onClick={() => props.submit()}
            style={{
              width: "fit-content",
              height: "fit-content",
              padding: "0px",
            }}>
            <Text size="base" color="#24A148">{ edit ? "완료" : "올리기" }</Text>
          </Button>}
      </Header>
    </React.Fragment>
  )
}
const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    place-items: center;
    margin: 8px 0px;
    padding-bottom: 4px;
`
export default AddPostHeader;