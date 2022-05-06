import React from "react";
import { AddDone, ProgressBar, SelectPlace, WritePlantProfile } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";


const AddPlants = () => {

    const comp = {
        0: <SelectPlace />,
        1: <WritePlantProfile />,
        2: <AddDone />,
    }

    const [compNum, setCompNum] = React.useState(0);
    const progressCount = () => {
        if(compNum===Object.keys(comp).length-1) {
            return;
        }
        setCompNum(compNum+1);
    }
    // console.log("컴포넌트 넘버", compNum);

    return (
        <React.Fragment>
            <Container>
                <ProgressBar count={compNum+1} max={Object.keys(comp).length}/>
                {comp[compNum]}
                <Grid margin="auto">
                {compNum!==2?
                    <Button type="basic" width="184px" _onClick={progressCount}>
                        <Text size="base" color="#fff">다음</Text>
                    </Button> :
                    <Grid>
                        <Button type="tran">
                            <Text size="base">괜찮아요 :)</Text>
                        </Button>
                        <Button type="tran">
                            <Text size="base">지금 확인할게요!</Text>
                        </Button>
                    </Grid>
                    }
                    
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default AddPlants;