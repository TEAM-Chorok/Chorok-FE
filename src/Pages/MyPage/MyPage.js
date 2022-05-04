import React from "react";
import { MyPageHeader,MyCategoryBar } from "../../Components";
import { Container } from "../../Elements";

const MyPage = () => {

    return (
        <React.Fragment>
            <Container>
                <MyPageHeader />
                <MyCategoryBar />
            </Container>
        </React.Fragment>
    )
}

export default MyPage;