import React from "react";
import styled from 'styled-components';
import { Input, Text, Grid, Image} from '../../../Elements/index';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useHistory } from "react-router-dom";

const MyPlant = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Grid padding="8px 0px 20px 0px" width="100%">
                <Text bold size="large">거실</Text>
                <PostList>
                    {/* map돌려서 장소별 list print */}
                    <Grid width="100%" align="center" _onClick={()=>history.push('/myplant/1')}>
                        <div style={{margin:"20px 5px 10px 5px", borderRadius:"96px", backgroundImage:"url(sample.jpeg)", width:"96px", height:"96px"}}>
                        </div>
                        <Text display="block">동동이</Text><Text size="small" color="#6F6F6F" margin="0px 0px 0px 5px">로즈마리</Text>
                    </Grid>
                    <Grid width="100%" align="center" _onClick={()=>history.push('/myplant/1')}>
                        <div style={{margin:"20px 5px 10px 5px", borderRadius:"96px", backgroundImage:"url(sample.jpeg)", width:"96px", height:"96px"}}>
                        </div>
                        <Text display="block">동동이</Text><Text size="small" color="#6F6F6F" margin="0px 0px 0px 5px">로즈마리</Text>
                    </Grid>
                    <Grid width="100%" align="center" _onClick={()=>history.push('/myplant/1')}>
                        <div style={{margin:"20px 5px 10px 5px", borderRadius:"96px", backgroundImage:"url(sample.jpeg)", width:"96px", height:"96px"}}>
                        </div>
                        <Text display="block">동동이</Text><Text size="small" color="#6F6F6F" margin="0px 0px 0px 5px">로즈마리</Text>
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