import React from "react";
import { AddDone, SelectPlace, WritePlantProfile } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";


const AddPlants = () => {

    const comp = {
        0: <SelectPlace />,
        1: <WritePlantProfile />,
        2: <AddDone />,
    }
    const [compNum, setCompNum] = React.useState(0);
    const progressCount = () => {
        if(compNum===2) {
            return;
        }
        setCompNum(compNum+1);
    }
    console.log("컴포넌트 넘버", compNum);

    return (
        <React.Fragment>
            <Container>
                {comp[compNum]}
                <Grid margin="auto">
                {compNum!==2?
                    <Button type="basic" width="184px" _onClick={progressCount}>
                        <Text size="base" color="#fff">다음</Text>
                    </Button> :
                    <Text>완료링</Text>}
                    
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default AddPlants;