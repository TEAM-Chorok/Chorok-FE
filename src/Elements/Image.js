import React from "react";
import styled from "styled-components";

const Image = (props) => {

    const {type, size, imgUrl, margin} = props;

    const styles = {
        margin: margin,
        size: size,
        imgUrl: imgUrl,
    };


    if(type==="square") {
        return(
            <React.Fragment>
                <Square {...styles}/>
            </React.Fragment>
        );
    }

    if(type==="circle") {
        return( 
        <React.Fragment>
            <Circle {...styles}/>
        </React.Fragment>
        );
    };

    return(
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

const Square = styled.div`
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl? "none" : "1px solid #ccc"};
    border-radius: 4px;

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`


const Circle = styled.div`
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl? "none" : "1px solid #ccc"};
    border-radius: ${(props) => props.size};

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`

    export default Image;