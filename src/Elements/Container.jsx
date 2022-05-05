import React from "react";
import styled from "styled-components";

const Container = (props) => {

    const {children} = props;

    return (
        <React.Fragment>
            <ContainerBox>
                {children}
            </ContainerBox>
        </React.Fragment>
    );
}

Container.defaultProps = {
    children: null,
}


const ContainerBox = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 20px;

    width: 360px;

    border: 1px solid #000;
    background: white;
`;

export default Container;