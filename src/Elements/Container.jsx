import React from "react";
import styled from "styled-components";

const Container = (props) => {

    const {children, type} = props;

    if(type==="np") {
        return(
            <React.Fragment>
                <NonPaddingContainer>
                    {children}
                </NonPaddingContainer>
            </React.Fragment>
        );
    }

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
    type: null,
}

const NonPaddingContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    width: 360px;

    ${'' /* border: 1px solid #000; */}
`

const ContainerBox = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 16px;

    width: 360px;

    ${'' /* border: 1px solid #000; */}
`;

export default Container;