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
    padding: 20px;
    box-sizing: border-box;

    width: 390px;
    min-height: 844px;

    border: 1px solid #000;
    background: #ddd;
`;

export default Container;