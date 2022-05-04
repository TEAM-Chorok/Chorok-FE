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

  if (size === "h5") {
    return (
      <React.Fragment>
        <H5 {...styles}>{children}</H5>
      </React.Fragment>
    );
  }
  
  if (size === "h6") {
    return (
      <React.Fragment>
        <H6 {...styles}>{children}</H6>
      </React.Fragment>
    );
  }
  
  if (size === "large") {
    return (
      <React.Fragment>
        <LARGE {...styles}>{children}</LARGE>
      </React.Fragment>
    );
  }
  
  if (size === "base") {
    return (
      <React.Fragment>
        <BASE {...styles}>{children}</BASE>
      </React.Fragment>
    );
  }

  if (size === "small") {
    return (
      <React.Fragment>
        <SMALL {...styles}>{children}</SMALL>
      </React.Fragment>
    );
  }

  if (size === "xsmall") {
    return (
      <React.Fragment>
        <XSMALL {...styles}>{children}</XSMALL>
      </React.Fragment>
    );
  }

  if (size === "xxsmall") {
    return (
      <React.Fragment>
        <XXSMALL {...styles}>{children}</XXSMALL>
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

const H5 = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 23px;
  font-weight: 600;
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
`

const H6 = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 20px;
  font-weight: ${(props) => props.bold ? 600 : 400};
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
`

const LARGE = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 18px;
  font-weight: ${(props) => props.bold ? 700 : 400};
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
`

const BASE = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 16px;
  font-weight: ${(props) => props.bold ? 700 : 400};
  line-height: ${(props) => props.line};
  letter-spacing: 0.15px;
  color: ${(props) => props.color};
`

const SMALL = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 14px;
  font-weight: ${(props) => props.bold ? 700 : 400};
  line-height: ${(props) => props.line};
  color: ${(props) => props.color};
  letter-spacing: 0.25px;
`

const XSMALL = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 13px;
  font-weight: ${(props) => props.bold ? 600 : 400};
  line-height: ${(props) => props.line};
  letter-spacing: 0.25px;
  color: ${(props) => props.color};
`

const XXSMALL = styled.p`
  display: ${(props) => props.display};

  margin: ${(props) => props.margin};
  padding: none;
  box-sizing: border-box;

  font-size: 11px;
  font-weight: ${(props) => props.bold ? 600 : 400};
  line-height: ${(props) => props.line};
  letter-spacing: 0.4px;
  color: ${(props) => props.color};
`



export default Text;