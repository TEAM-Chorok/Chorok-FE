import React from "react";
import { HiPlus } from "react-icons/hi";
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
        type,
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

      
      if(type === "plus"){
        return (
          <React.Fragment>
            <PlusButton {...styles} onClick={_onClick}>
              <HiPlus size="20px" color="#aaa"/>
            </PlusButton>
          </React.Fragment>
        );
      }

      if(type === "longfloat"){
        return (
            <React.Fragment>
              <FloatLongButton {...styles} onClick={_onClick}>
                {children}
              </FloatLongButton>
            </React.Fragment>
        );
      }

      if(type === "filter") {
        return (
          <React.Fragment>
            <FilterButton {...styles} onClick={_onClick}>{children}</FilterButton>
          </React.Fragment>
        )
      }

      if(type === "filterlong") {
        return (
          <React.Fragment>
            <FilterLongButton {...styles} onClick={_onClick}>{children}</FilterLongButton>
          </React.Fragment>
        )
      }

      if(type === "filtersizing") {
        return (
          <React.Fragment>
            <FilterSizingButton {...styles} onClick={_onClick}>{children}</FilterSizingButton>
          </React.Fragment>
        )
      }

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

const PlusButton = styled.button`
  margin: 10px 0;
  width: 60px;
  height: 60px;
  
  border: 1px solid #aaa;
  border-radius: 60px;

  background: none;

  &: hover {
    background: #eee;
  }
`;

const FloatLongButton = styled.button`
  position: absolute;
  bottom: 30px;

  width: 250px;
  height: 65px;

  border: none;
  border-radius: 65px;

  color: #fff;
  background: #667080;

`;

const FilterButton = styled.button`
  font-family: 'SUIT-Regular';
  margin-left: 5px;

  width: fit-content;
  height: 25px;

  border: 1px solid #323232;
  border-radius: 25px;

  background: none;

  &:hover {
    background: #eee;
  }
`;

const FilterLongButton = styled.button`
  font-family: 'SUIT-Regular';

  width: 100%;
  height: 50px;
  
  border: 1px solid #878D96;
  border-radius: 10px;
  background: #fff;

  &:hover {
    background: #ddd;
  }
`;

const FilterSizingButton = styled.button`
  font-family: 'SUIT-Regular';

  width: ${(props) => props.width};
  height: ${(props) => props.height};;
  
  border: 1px solid #878D96;
  border-radius: 20px;
  background: #fff;

  &:hover {
    background: #ddd;
  }
`;

    export default Button;