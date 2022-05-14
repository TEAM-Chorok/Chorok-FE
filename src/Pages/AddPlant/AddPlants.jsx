import React from "react";
import { AddDone, ProgressBar, SelectPlace, WritePlantProfile } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";
import { useParams, useHistory } from 'react-router-dom'


const AddPlants = () => {
    const history = useHistory();

    // 컴포넌트 넘버 관리
    const [compNum, setCompNum] = React.useState(0);
    const [place, setPlace] = React.useState(null);

    // 보여줄 컴포넌트 
    const comp = {
        0: <SelectPlace setPlace={setPlace} setCompNum={setCompNum}/>,
        1: <WritePlantProfile place={place} setCompNum={setCompNum}/>,
        2: <AddDone />,
    }

    // Object.keys(객체).length : 객체에 들어있는 프로퍼티의 갯수를 구함 (comp의 프로퍼티 갯수 3)
    const max = Object.keys(comp).length;


    return (
        <React.Fragment>
            <Container>
                <ProgressBar count={compNum + 1} max={max} />
                {comp[compNum]}
                <Grid margin="auto">
                    {compNum !== max - 1 ?
                        "" :
                        <Grid>
                            <Button type="tran" _onClick={() => {history.push("/home")}}>
                                <Text size="base">괜찮아요 :)</Text>
                            </Button>
                            <Button type="tran" _onClick={() => {history.push("/home");}}>
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