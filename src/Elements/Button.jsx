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
        borderRadius,
        checked,
        textAlign,
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
        textAlign,
      };

      
      if(type === "plus"){
        return (
          <React.Fragment>
            <PlusButton {...styles} onClick={_onClick}>
              <HiPlus size="25px" color="#fff"/>
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

      if(type === "drawerBtn"){
        return (
          <React.Fragment>
            <ToggleInnerButton {...styles} onClick={_onClick}>
                {children}
            </ToggleInnerButton>
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
    color: "#0AAF42",
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

  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => props.color};

  &:active {
    border: 1px solid #333333;
  }
`;

// 사이드 버튼
const PlusButton = styled.button`
  box-sizing: border-box;

  margin: 0;
  width: 60px;
  height: 60px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 82px;
  right: 28px;
  
  border: none;
  border-radius: 60px;

  background: #42BE65;
  box-shadow: 1px 2px 10px rgba(5, 167, 67, 0.36);

  z-index: 300;

  transition: 0.2s;
  &:active {
    bottom: 80px;
    transform: scale(0.97);
  }
`;

// 식물 추가 버튼
const FloatLongButton = styled.button`
  position: fixed;
  bottom: 76px;

  width: 200px;
  height: 56px;

  border: none;
  border-radius: 65px;

  color: #fff;
  background: #0AAF42;
  box-shadow: 1px 2px 10px rgba(5, 167, 67, 0.36);

  z-index: 300;
  transition: 0.5s;
`;

// 필터 선택 버튼
const FilterButton = styled.button`
  flex: none;

  font-family: 'SUIT-Regular';
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #262626;

  margin-right: 5px;
  padding: 4px 12px;

  border: ${(props) => (props.checked ? "1px solid #0AAF42" : "1px solid #E0E0E0")};
  border-radius: 25px;

  background: ${(props) => (props.checked ? "rgba(222, 251, 230, 0.5)" : "none")};

  &:hover {
    border: 1px solid #0AAF42;
    background: rgba(222, 251, 230, 0.5);
    
  }
`;

// 필터 내 항목 버튼 (long)
const FilterLongButton = styled.button`
  box-sizing: border-box;

  width: 100%;
  height: ${(props) => props.height==="60px"? "60px" : "50px"};
  
  border: ${(props) => props.checked? "2px solid #0AAF42" : "1px solid #F4F4F4"};

  border-radius: 8px;
  background: ${(props) => props.checked? "rgba(222, 251, 230, 0.5)" : "#fff"};

  &:hover {
    background: rgba(222, 251, 230, 0.5);
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
  height: 48px;
  
  border: none;
  border-radius: 48px;
  background: ${(props) => props.color};
  
`

// 텍스트만 보이는 버튼
const TransparentButton = styled.button`
  box-sizing: border-box;

  width: fit-content;
  height: fit-content;
  
  border: none;
  background: transparent;
`

//toggledrawer 삭제 수정 버튼
const ToggleInnerButton = styled.button`
  width: 100%;
  height: fit-content;
  padding: ${(props) => props.padding};
  border: none;
  border-bottom: 1px solid #E0E0E0;
  background-color: transparent;
  text-align: ${(props) => props.textAlign};;
`

export default Button;