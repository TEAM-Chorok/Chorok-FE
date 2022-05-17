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
        0: <SelectPlace place={place} setPlace={setPlace} setCompNum={setCompNum} />,
        1: <WritePlantProfile place={place} setCompNum={setCompNum} />,
        2: <AddDone />,
    }

    return (
        <React.Fragment>
            {comp[compNum]}
        </React.Fragment>
    )
}

export default AddPlants;