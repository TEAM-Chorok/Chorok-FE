import React from "react";
import styled from "styled-components";


const Text = (props) => {

  const { size, children, bold, align } = props

  const styles = {
    size: size,
    bold: bold,
    align: align,
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
  type: "",
  children: "",
  bold: "",
  align: "",
}

const P_L = styled.p`
  margin: 0;
  font-size: 2.5em;
  font-weight: ${(props) => props.bold ? 800 : 600};
  
`

const P_M = styled.p`
  margin: 0;
  font-size: 2em;
  font-weight: ${(props) => props.bold ? 800 : 600};
`

const P = styled.p`
  margin: 0;
  font-size: 1em;
  font-weight: ${(props) => props.bold ? 800 : 500};
  ${(props) => props.align ? `text-align: ${props.align};` : ""};
`

export default Text;