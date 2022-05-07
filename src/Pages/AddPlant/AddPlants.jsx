import React from "react";
import { AddDone, ProgressBar, SelectPlace, WritePlantProfile } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";


const AddPlants = () => {

    // 보여줄 컴포넌트 
    const comp = {
        0: <SelectPlace />,
        1: <WritePlantProfile />,
        2: <AddDone />,
    }

    // 컴포넌트 넘버 관리
    const [compNum, setCompNum] = React.useState(0);
    
    // Object.keys(객체).length : 객체에 들어있는 프로퍼티의 갯수를 구함 (comp의 프로퍼티 갯수 3)
    const max = Object.keys(comp).length;

    // 다음 컴포넌트로 전환될 때마다 compNum 1씩 증가
    const progressCount = () => {
        if(compNum===max-1) {
            return;
        }
        setCompNum(compNum+1);
    }

    return (
        <React.Fragment>
            <Container>
                <ProgressBar count={compNum+1} max={max}/>
                {comp[compNum]}
                <Grid margin="auto">
                {compNum!==max-1?
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