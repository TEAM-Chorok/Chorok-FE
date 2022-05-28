import { height } from "@mui/system";
import React from "react";
import styled, { css, keyframes } from "styled-components";

const Image = (props) => {

  const { type, width, height, size, imgUrl, margin, borderRadius, checked, unChecked, src, filter } = props;

  const styles = {
    margin: margin,
    size: size,
    width: width,
    height: height,
    imgUrl: imgUrl,
    borderRadius: borderRadius,
    checked: checked,
    unChecked: unChecked,
    filter: filter,
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
        <Planterior {...styles}>
          <Img {...styles} src={imgUrl}/>
        </Planterior>
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
  
  if (type === "checkedcircle") {
    return (
      <React.Fragment>
        <CheckedCircle {...styles} />
      </React.Fragment>
    );
  };

  if ( type === "icon" ) {
    return (
      <React.Fragment>
        <Icon {...styles} src={src} />
      </React.Fragment>
    )
  }

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
  checked: false,
}



const ani = keyframes`
  0% {
    transform: scale(0);
  }
  10% {
    transform: scale(0);
  }
  20% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1);
  }
`
const ani2 = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  20% {
    transform: scale(0);
  }
  to {
    transform: scale(0);
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
    background-position: center;
`

const Planterior = styled.div`
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.width};

    border: ${(props) => props.imgUrl ? "none" : "1px solid #ccc"};
`

const Img = styled.img`
  width: ${(props) => props.width};
  border-radius: 8px;
`


const Circle = styled.div`
    box-sizing: border-box;
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl ? "none" : "1px solid #ccc"};
    border-radius: ${(props) => props.size};

    filter: ${(props) => props.filter ? props.filter : ""};

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
    background-position: center;
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

const Icon = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: none;
    src: ${(props) => props.src};
`


const CheckedCircle = styled.div`
    box-sizing: border-box;
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl ? "none" : "1px solid #ccc"};
    border-radius: ${(props) => props.size};

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;

    ${'' /* ${(props) => props.checked? css`display: block; animation: 1s ${ani};` : css`display: block; animation: 1s ${ani2}; animation-fill-mode: forwards;` }; */}
    ${(props) => props.checked? css`display: block; animation: 1s ${ani};` : "display: none" };
    ${(props) => props.unChecked? css`display: block; animation: 1s ${ani2}; animation-fill-mode: forwards;` : "" };
`


export default Image;