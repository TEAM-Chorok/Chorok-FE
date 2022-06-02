import React from "react";
import { AddDone, Alert2, SelectPlace, WritePlantProfile } from "../../Components";
import { Text } from "../../Elements";


const AddPlants = () => {

    // 컴포넌트 넘버 관리
    const [compNum, setCompNum] = React.useState(0);
    const [place, setPlace] = React.useState(null);
    const [message, setMessage] = React.useState("");
    const [open, setOpen] = React.useState(false);

    // 보여줄 컴포넌트 
    const comp = {
        0: <SelectPlace 
            place={place} 
            setOpen={setOpen}
            setPlace={setPlace}
            setMessage={setMessage}
            setCompNum={setCompNum} />,
        1: <WritePlantProfile 
            place={place} 
            setOpen={setOpen}
            compNum={compNum}
            setMessage={setMessage}
            setCompNum={setCompNum} />,
        2: <AddDone 
            compNum={compNum}
            setCompNum={setCompNum}/>,
    }



    return (
        <React.Fragment>
            {comp[compNum]}
            <Alert2 btn1="확인" open={open} setOpen={setOpen}>
                <Text bold size="small">
                    {message}
                </Text>
            </Alert2>
        </React.Fragment>
    )
}

export default AddPlants;