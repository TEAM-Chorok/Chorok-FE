import React from "react";
import { GeneralHeader } from "../../Components";
import { Container } from "../../Elements";
import { BiDotsVerticalRounded } from 'react-icons/bi';

const PostDetail = () => {
    return (
        <React.Fragment>
            <Container>
                <GeneralHeader title="{category}" size="base" />
                <BiDotsVerticalRounded style={{position:"absolute", right:"20px", top:"32px"}}/>
                
            </Container>
        </React.Fragment>
    )
}

export default PostDetail;