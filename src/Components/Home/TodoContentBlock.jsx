import React from "react";
import styled from "styled-components";
import { Button, Grid, Image, Text } from "../../Elements";
import { BiCircle, BiCheckCircle } from "react-icons/bi";

// 투두페이지 할 일 목록 

const TodoContentBlock = (props) => {

  const { children, img } = props;
  const [ checked, setChecked ] = React.useState(false);

  const check = () => {
    if(checked === false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }

  return (
    <React.Fragment>
      <ContentBox checked={checked}>
        <Grid>
          <Image type="circle" size="56px" imgUrl={checked?"img/checked.png":`${img}`} />
        </Grid>
        <Grid margin="0 20px" width="100%">
          {children}
        </Grid>
        <Grid>
          <Button type="tran" size="20px" _onClick={() => { check(); }}>
            {checked? 
              <BiCheckCircle size="18px" color="#0AAF42"/> :
              <BiCircle size="18px" color="#C6C6C6"/>}
          </Button>
        </Grid>
      </ContentBox>


    </React.Fragment>
  );
}

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  margin: 5px 0;
  padding: 12px 16px;

  width: 100%;
  height: 84px;
  
  border-radius: 15px;

  background: ${(props) => props.checked ? "#fff" : "#F4F4F4"};
`;

export default TodoContentBlock;