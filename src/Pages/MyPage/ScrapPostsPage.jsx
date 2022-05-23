import React from 'react';
import { GeneralHeader, ScrapPostsList } from '../../Components';
import {  Container } from '../../Elements';

const ScrapPostsPage = () => {
    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="스크랩한 초록톡"/>
            </Container>
            <Container type="np">
                <hr style={{border: "1px solid #E0E0E0", margin:"0px"}} />
            </Container>
            <ScrapPostsList />
                <div style={{height:"60px", width:"100%"}}></div>
        </React.Fragment>
    )
}

export default ScrapPostsPage;