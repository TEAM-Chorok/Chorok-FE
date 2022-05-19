import React from "react";
import { useEffect } from "react";
import { MyPageHeader,MyCategoryBar } from "../../Components";
import { Container, Permit } from "../../Elements";

const MyPage = () => {

    return (
        <React.Fragment>
            <Permit>
                <Container>
                    <MyPageHeader />
                </Container>
                <Container type="np" >
                    <MyCategoryBar />
                </Container>
            </Permit>
        </React.Fragment>
    )
}

export default MyPage;