import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Text from "./Text";


const Input = (props) => {
  const {
      label,
      type,
      placeholder,
      _onChange,
      borderRadius,
      width,
      height,
      display,
      margin,
      padding,
      border,
      name,
      defaultValue,
  } = props;
  const styles = {
      width,
      height,
      display,
      margin,
      border,
      padding,
      borderRadius,
  }

  if (type === "basic") {
    return (
      <React.Fragment>
        <Grid margin="4px">
          <Text size="base">{label}</Text>
        </Grid>
        <BasicInput 
          {...styles}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </React.Fragment>
    );
  }

  if (type === "search") {
    return (
      <React.Fragment>
        <SearchInput 
          {...styles}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </React.Fragment>
    );
  }

  if (type === "textarea") {
    return (
      <React.Fragment >
        <TextArea 
          {...styles}
          placeholder={placeholder}
          onChange={_onChange}/>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
    {label && <Text margin="5px">{label}</Text>}
    <Inputs {...styles} 
    type={type}
    placeholder={placeholder}
    onChange={_onChange}
    name={name}
    defaultValue={defaultValue}>
</Inputs>
</React.Fragment>
  );
}
Input.defaultProps = {
  label: "",
  type: "text",
  _onChange: () => {},
  display: "block",
  margin: "10px auto",
  padding: "5px 0px 5px 5px",
  width: "320px",
  height: "40px",
  border: "1px solid darkgrey",
  borderRadius: "50px",
  name: "",
  defaultValue: null,
}


const Inputs = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    display: ${(props) => props.display};
    margin: ${(props) => props.margin};
    padding:${(props) => props.padding};
    &:focus {
        outline: 1px solid #24A148;
    }
    defaultValue: ${(props) => props.defaultValue};
`

const BasicInput = styled.input`
  font-family: 'SUIT-Regular';
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #262626;

  box-sizing: border-box;
  padding: 0 16px;
  
  width: ${(props) => props.width};
  height: 40px;
  
  border: none;
  border-radius: 30px;
  background: #F7F8FA;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #6F6F6F;
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`

const SearchInput = styled.input`
  font-family: 'SUIT-Regular';
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #262626;

  box-sizing: border-box;
  padding: 0 16px 0 44px;
  
  width: ${(props) => props.width};
  height: 40px;
  
  border: none;
  border-radius: 30px;
  background: #F7F8FA;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #6F6F6F;
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 364px;
  height: 692px;
  resize: none;
`


    export default Input;