import React from "react";
import styled from "styled-components";

const Grid = (props) => {

  const { is_flex, width, margin, padding, bg, children, align, height, _onClick, position, left, right, top, bottom, key, border, borderRadius, display, } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    align: align,
    position: position,
    left: left, 
    right: right, 
    top: top, 
    bottom: bottom,
    border: border,
    borderRadius: borderRadius,
    display: display,
  }

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick} key={key}>
        {children}
      </GridBox>
    </React.Fragment>
  )
}

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "fit-content",
  height: "fit-content",
  padding: false,
  margin: false,
  bg: false,
  align: "left",
  justifyContent: false,
  key: false,
  border: "none",
  borderRadius: false,
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    ${(props) => props.padding ? `padding: ${props.padding};` : ""};
    ${(props) => props.margin ? `margin: ${props.margin};` : ""};
    ${(props) => props.bg ? `background: ${props.bg};` : ""};
    ${(props) => props.is_flex ? `display: flex; justify-content: center;` : ""};
    text-align: ${(props) => props.align};
    align-items: ${(props) => props.align};
    position: ${(props) => props.position};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    display: ${(props) => props.display};
`;


export default Grid;