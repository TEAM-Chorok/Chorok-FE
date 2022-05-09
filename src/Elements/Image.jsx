import { height } from "@mui/system";
import React from "react";
import styled, { keyframes } from "styled-components";

const Image = (props) => {

  const { type, width, height, size, imgUrl, margin, borderRadius, } = props;

  const styles = {
    margin: margin,
    size: size,
    width: width,
    height: height,
    imgUrl: imgUrl,
    borderRadius: borderRadius,
  };


  if (type === "square") {
    return (
      <React.Fragment>
        <Square {...styles} />
      </React.Fragment>
    )
  }


  if (type === "rectangle") {
    return (
      <React.Fragment>
        <Rectangle {...styles} />
      </React.Fragment>
    );
  }

  if (type === "planterior") {
    return (
      <React.Fragment>
        <Planterior {...styles} />
      </React.Fragment>
    );
  }

  if (type === "circle") {
    return (
      <React.Fragment>
        <Circle {...styles} />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
    </React.Fragment>
  );
}

Image.defaultProps = {
  type: null,
  size: "40px",
  imgUrl: "",
  margin: 0,
}


const ani = keyframes`
  0% {
    width: 0px;
    height: 0px;
  }
  50% {
  }
  100% {
    opacity: 1;
  }
`


const Square = styled.div`
    flex: none;

    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl ? "none" : "1px solid #ccc"};
    border-radius: ${(props) => props.borderRadius};

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`

const Planterior = styled.div`
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl ? "none" : "1px solid #ccc"};
    border-radius: 5px;

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`

const Rectangle = styled.div`
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: ${(props) => props.imgUrl ? "none" : "1px solid #ccc"};
    border-radius: 10px;

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`

const Circle = styled.div`
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl ? "none" : "1px solid #ccc"};
    border-radius: ${(props) => props.size};

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;

    ${'' /* transition: 0.5s; */}
    animation-duration: 3s;
    animation-name: ${ani};
`



export default Image;