import React from "react";
import { Container } from "../../Elements";
import{ CommPostList, SearchHeader } from "../../Components";

const Community = () => {

    return (
        <React.Fragment>
            <Container>
                <SearchHeader />
                <CommPostList />
            </Container>
        </React.Fragment>
    )
}

export default Community;