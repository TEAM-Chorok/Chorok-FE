import React from "react";
import styled from "styled-components";


const Text = (props) => {

  const { size, children, bold, align, color, display, line, margin, fontSize, } = props

  const styles = {
    size: size,
    margin: margin,
    bold: bold,
    align: align,
    color: color,
    display: display,
    line: line,
    fontSize: fontSize,
  }

  if (size === "L") {
    return (
      <React.Fragment>
        <P_L {...styles}>{children}</P_L>
      </React.Fragment>
    );
  }

  if (size === "M") {
    return (
      <React.Fragment>
        <P_M {...styles}>{children}</P_M>
      </React.Fragment>
    );
  }

  if (size === "XS") {
    return (
      <React.Fragment>
        <P_XS {...styles}>{children}</P_XS>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  );
}

Text.defaultProps = {
  children: "",
  bold: false,
  align: "",
  color: "black",
  display: "unset",
  line: "",
  margin: "none",
}

const P_L = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 2rem;
  font-weight: ${(props) => props.bold ? 800 : 600};
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
`

const P_M = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 1.2rem;
  font-weight: ${(props) => props.bold ? 800 : 600};
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
`

const P = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  word-break: keep-all;

  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.line};
  font-weight: ${(props) => props.bold ? 800 : 500};
  ${(props) => props.align ? `text-align: ${props.align};` : ""};
  color: ${(props) => props.color};
`

const P_XS = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 0.8rem;
  font-weight: ${(props) => props.bold ? 800 : 400};
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
`

export default Text;