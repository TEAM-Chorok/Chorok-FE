import React from "react";
import styled from "styled-components";
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
    value,
    border,
    name,
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

  if (type === "search") {
    return (
      <React.Fragment>
        <SearchInput 
          {...styles}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
        />
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
        value={value}
        name={name}>
      </Inputs>
    </React.Fragment>
  );
}
Input.defaultProps = {
  label: false,
  type: "text",
  _onChange: () => { },
  display: "block",
  margin: "10px auto",
  padding: "5px 0px 5px 5px",
  value: "",
  width: "320px",
  height: "40px",
  border: "1px solid darkgrey",
  borderRadius: "10px",
  name: false,
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
        border: 1px solid #333333;
    }
`

const SearchInput = styled.input`
  font-family: 'SUIT-Regular';
  box-sizing: border-box;
  padding: 10px;
  width: ${(props) => props.width};
  height: 40px;
  border: none;
  border-radius: 30px;
  background: #DDE1E6;
  &:focus {
    outline: none;
  }
`

    export default Input;