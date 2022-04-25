import React from "react";
import styled from "styled-components";


const Button = (props) => {
    const {
        width,
        height,
        display,
        margin,
        padding,
        size,
        bold,
        color,
        backgroundColor,
        border,
        children,
        _onClick,
        _value,
      } = props;
    
      const styles = {
        width,
        height,
        display,
        margin,
        padding,
        size,
        color,
        backgroundColor,
        border,
        bold,

      };

      
    return (
        <React.Fragment>
            <BasicButton {...styles} onClick={_onClick} value={_value}>
            {children}
            </BasicButton>
        </React.Fragment>
        );
      
};
Button.defaultProps = {
    width: "80px",
    height: "40px",
    margin: "0px",
    padding: "10px",
    size: "14px",
    color: "black",
    backgroundColor: "transparent",
    bold: false,
    border: null,
    children: null,
}
const BasicButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  padding: ${(props) => props.padding};
  border: ${(props) => (props.border ? `${props.border};` : "1px solid #bbb")};
  border-radius: ${(props) => props.borderRadius};;
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;

  //폰트
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => props.color};

  &:active {
    border: 1px solid #333333;
  }
`;
    export default Button;