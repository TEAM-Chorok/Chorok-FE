import React from "react";
import styled from "styled-components";


const Text = (props) => {

  const { size, fontSize, children, bold, align, color, display } = props

  const styles = {
    size: size,
    bold: bold,
    align: align,
    color: color,
    display: display,
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
  fontSize: "1em",
}

const P_L = styled.p`
  margin: 0;
  font-size: 2em;
  font-weight: ${(props) => props.bold ? 800 : 600};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`

const P_M = styled.p`
  margin: 0;
  font-size: 1.5em;
  font-weight: ${(props) => props.bold ? 800 : 600};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`

const P = styled.p`
  margin: 0;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.bold ? 800 : 500};
  ${(props) => props.align ? `text-align: ${props.align};` : ""};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`

export default Text;