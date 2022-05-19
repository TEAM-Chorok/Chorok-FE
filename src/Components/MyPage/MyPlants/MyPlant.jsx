import React from "react";
import styled from 'styled-components';
import { Text, Grid, Image} from '../../../Elements/index';
import { useHistory } from "react-router-dom";

const MyPlant = (props) => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Grid padding="0px 0px 0px 0px" width="100%">
                <PostList>
                    {/* map돌려서 장소별 list print */}
                    <Grid width="100%" align="center" _onClick={()=>history.push(`/myplant/${props.myPlantNo}`)}>
                        {/* 이미지 안보임 */}
                        <Image margin="10px 5px 10px 5px" type="circle" size="104px" imgUrl={props.imgUrl}/>
                        <Text display="block">{props.name}</Text><Text size="small" color="#6F6F6F" margin="0px 0px 0px 5px">{props.plant}</Text>
                    </Grid>
                </PostList>
            </Grid>
        </React.Fragment>
    )
}
const PostList = styled.div`
width: 100%;
height: fit-content;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Detail = styled.div`
    margin-top: 5px;
`
export default MyPlant;