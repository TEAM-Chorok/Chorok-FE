import React from "react";
import { HiPlus } from "react-icons/hi";
import styled from "styled-components";
import Text from "./Text";

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
        borderRadius,
        checked,
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
        borderRadius,
        checked,
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
            <FilterSizingButton {...styles} onClick={_onClick}>
              {children}
            </FilterSizingButton>
          </React.Fragment>
        )
      }

      if(type === "basic") {
        return (
        <React.Fragment>
          <BasicGreenButton {...styles} onClick={_onClick}>
              {children}
          </BasicGreenButton>
        </React.Fragment>
        )
      }

      if(type === "tran") {
        return (
        <React.Fragment>
          <TransparentButton {...styles} onClick={_onClick}>
              {children}
          </TransparentButton>
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
    borderRadius: "0px",
    size: "14px",
    color: "black",
    backgroundColor: "transparent",
    bold: false,
    border: null,
    children: null,
    checked: false,
}
const BasicButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  padding: ${(props) => props.padding};
  border: ${(props) => (props.border ? `${props.border};` : "1px solid #bbb")};
  border-radius: ${(props) => props.borderRadius};
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
  
  position: fixed;
  bottom: 68px;
  right: 20px;
  
  border: 1px solid #aaa;
  border-radius: 60px;

  background: none;

  &: hover {
    background: #eee;
  }
`;

// 식물 추가 버튼
const FloatLongButton = styled.button`
  position: fixed;
  left: 48px;
  right: 48px;
  bottom: 28px;

  height: 65px;

  border: none;
  border-radius: 65px;

  color: #fff;
  background: #667080;
`;

// 필터 선택 버튼
const FilterButton = styled.button`
  margin-right: 5px;
  padding: 4px 12px;
  ${'' /* width: fit-content; */}
  ${'' /* height: 25px; */}

  border: ${(props) => (props.checked ? "1px solid #0AAF42" : "1px solid #E0E0E0")};
  border-radius: 25px;

  background: ${(props) => (props.checked ? "rgba(222, 251, 230, 0.5)" : "none")};

  &:hover {
    background: #eee;
  }
`;

// 필터 내 항목 버튼 (long)
const FilterLongButton = styled.button`
  width: 172px;
  height: 40px;
  
  border: 1px solid #45D17D;
  border-radius: 10px;
  background: #fff;

  &:hover {
    background: #ddd;
  }
`;


const FilterSizingButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  
  border: 1px solid #878D96;
  border-radius: 20px;
  background: #fff;

  &:hover {
    background: #ddd;
  }
`;

// 기본 녹색 버튼 
const BasicGreenButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  
  border: none;
  border-radius: ${(props) => props.height};
  background: #45D17D;
  
`

// 텍스트만 보이는 버튼
const TransparentButton = styled.button`
  box-sizing: border-box;

  width: fit-content;
  height: fit-content;
  
  border: none;
  background: transparent;
`

export default Button;