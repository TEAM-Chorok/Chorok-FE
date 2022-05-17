import React from "react";
import styled from "styled-components";

const Container = (props) => {

    const {children, type, app, nav, rt, bg} = props;

    const styles = {
        bg: bg,
    }

    if(app) {
        return(
            <React.Fragment>
                <AppContainer {...styles}>
                    {children}
                </AppContainer>
            </React.Fragment>
        )
    }
    
    if(nav) {
        return (
            <React.Fragment>
                <NavContainer {...styles}>
                    {children}
                </NavContainer>
            </React.Fragment>
        )
    }

    if(rt) {
        return (
            <React.Fragment>
                <RouteContainer {...styles}>
                    {children}
                </RouteContainer>
            </React.Fragment>
        )
    }

    if(type==="np") {
        return(
            <React.Fragment>
                <NonPaddingContainer {...styles}>
                    {children}
                </NonPaddingContainer>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <ContainerBox {...styles}>
                {children}
            </ContainerBox>
        </React.Fragment>
    );
}

Container.defaultProps = {
    children: null,
    type: null,
    bg: 'transparent',
}

const AppContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    margin: auto;
    
    width: 360px;
    height: 720px;
    background: ${(props) => props.bg};
`
const NavContainer = styled.div`
    width: 100%;
    height: 80px;
    background: ${(props) => props.bg};
`
const RouteContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    margin:none;

    width: 360px;
    height: 640px;
    overflow-y: scroll;
    background: ${(props) => props.bg};
`
const NonPaddingContainer = styled.div`
    position: relative;
    box-sizing: border-box;

    margin: auto;
    
    width: 360px;
    background: ${(props) => props.bg};
`

const ContainerBox = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 16px;

    width: 360px;
    background: ${(props) => props.bg};
`;

export default Container;