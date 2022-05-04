import React from "react";
import { useHistory } from "react-router-dom";
import { AddClassList } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";


const AddClass = () => {
    const history = useHistory();
    const Next = () => {
        history.push("/add/livingroom/list")
    }

    return (
        <React.Fragment>
            <Container>
                <Grid margin="50px 0">
                    <Text size="M">원하는 식물을 찾아보세요</Text>
                </Grid>

                <AddClassList />

                <Button _onClick={Next}>다음</Button>
            </Container>
        </React.Fragment>
    );
}


export default AddClass;

