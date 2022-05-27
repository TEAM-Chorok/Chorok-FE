import React from 'react';
import styled from 'styled-components';
import { GeneralHeader, ScrapPostsList } from '../../Components';
import { Container, Grid } from '../../Elements';

const ScrapPostsPage = () => {
    return (
        <React.Fragment>
                <GeneralHeader title="스크랩한 초록톡" />
                <Grid height="1px" bg="#E0E0E0"/>
            <ScrapPostsList />
            <div style={{ height: "60px", width: "100%" }}></div>
        </React.Fragment>
    )
}


export default ScrapPostsPage;