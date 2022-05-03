import React from "react";
import styled from 'styled-components';
import { Input, Text, Grid, Image} from '../../../Elements/index';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useHistory } from "react-router-dom";

const MyPlant = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Grid padding="20px 0px">
                <Text bold fontSize="23px">거실</Text>
                <PostList>
                    {/* map돌려서 장소별 list print */}
                    <Grid _onClick={()=>history.push('/myplant/1')}>
                        <div style={{margin:"20px 20px 10px 0px", borderRadius:"10px", backgroundImage:"url(sample.jpeg)", width:"160px", height:"160px", position:"relative"}}>
                            <EditOutlinedIcon style={{position: "absolute", bottom:"10px", right:"10px", color:"white"}}></EditOutlinedIcon>
                        </div>
                        <Text fontSize="20px">동동이</Text><Text color="darkgrey" margin="0px 0px 0px 5px">로즈마리</Text>
                        <Detail>
                            <Text>Please add your </Text>
                        </Detail>
                    </Grid>
                    <Grid  _onClick={()=>history.push('/myplant/1')}>
                        <div style={{margin:"20px 20px 10px 0px", borderRadius:"10px", backgroundImage:"url(sample.jpeg)", width:"160px", height:"160px", position:"relative"}}>
                            <EditOutlinedIcon style={{position: "absolute", bottom:"10px", right:"10px", color:"white"}}></EditOutlinedIcon>
                        </div>
                        <Text fontSize="20px">동동이</Text><Text color="darkgrey" margin="0px 0px 0px 5px">로즈마리</Text>
                        <Detail>
                            <Text>Please add your </Text>
                        </Detail>
                    </Grid>
                    <Grid  _onClick={()=>history.push('/myplant/1')}>
                        <div style={{margin:"20px 20px 10px 0px", borderRadius:"10px", backgroundImage:"url(sample.jpeg)", width:"160px", height:"160px", position:"relative"}}>
                            <EditOutlinedIcon style={{position: "absolute", bottom:"10px", right:"10px", color:"white"}}></EditOutlinedIcon>
                        </div>
                        <Text fontSize="20px">동동이</Text><Text color="darkgrey" margin="0px 0px 0px 5px">로즈마리</Text>
                        <Detail>
                            <Text>Please add your </Text>
                        </Detail>
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
grid-template-columns: 1fr 1fr;
`
const Detail = styled.div`
    margin-top: 5px;
`
export default MyPlant;