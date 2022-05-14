import React from "react";
import styled from "styled-components";

const Container = (props) => {

    const {children, type, app, nav, rt} = props;

    if(app) {
        return(
            <React.Fragment>
                <AppContainer>
                    {children}
                </AppContainer>
            </React.Fragment>
        )
    }
    
    if(nav) {
        return (
            <React.Fragment>
                <NavContainer>
                    {children}
                </NavContainer>
            </React.Fragment>
        )
    }

    if(rt) {
        return (
            <React.Fragment>
                <RouteContainer>
                    {children}
                </RouteContainer>
            </React.Fragment>
        )
    }

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

const AppContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    ${'' /* margin: 200px auto; */}
    margin: auto;
    
    width: 360px;
    height: 720px;

    ${'' /* border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.36); */}
`
const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    ${'' /* border: 1px solid #000; */}
`
const RouteContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    margin:none;

    width: 360px;
    height: 640px;
    overflow-y: scroll;

    ${'' /* border: 1px solid #000; */}
`
const NonPaddingContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    margin: auto;
    
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