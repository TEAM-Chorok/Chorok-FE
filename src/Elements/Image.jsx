import React from "react";
import styled from "styled-components";

const Image = (props) => {

    const {type, size, imgUrl, margin, borderRadius} = props;

    const styles = {
        margin: margin,
        size: size,
        imgUrl: imgUrl,
        borderRadius: borderRadius,
    };


    if(type==="square") {
        return(
            <React.Fragment>
                <Square {...styles}/>
            </React.Fragment>
        );
    }
    
    if(type==="planterior") {
        return(
            <React.Fragment>
                <Planterior {...styles}/>
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
    flex: none;

    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl? "none" : "1px solid #ccc"};
    border-radius: ${(props) => props.borderRadius};

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`

const Planterior = styled.div`
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl? "none" : "1px solid #ccc"};
    border-radius: 5px;

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`


const Circle = styled.div`
    flex: none;
    
    margin: ${(props) => props.margin};

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    border: ${(props) => props.imgUrl? "none" : "1px solid #ccc"};
    border-radius: 100px;

    background-image: url("${(props) => props.imgUrl}");
    background-size: cover;
`

    export default Image;