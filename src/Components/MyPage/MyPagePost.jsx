import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Container, Image } from '../../Elements';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const MyPagePost = () => {

    return (
        <React.Fragment>
            <Grid width="100%" >
                <PostHeader>
                    <Grid><Image imgUrl="sample.jpeg" type="circle" /></Grid>
                    <PostHeaderInfo>
                        <Text size="M" bold margin="2px 0px">nickname</Text>
                        <Text color="darkgrey" margin="0px">n 그루</Text>
                    </PostHeaderInfo>
                </PostHeader>
                <Grid margin="10px 0px">
                    <Text fontSize="1.1em" margin="20px 0px">post body</Text>
                    <PostImage style={{backgroundImage:"url(sample.jpeg)"}}/>
                </Grid>
                <PostFooter>
                    <Grid><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></Grid>
                    <Text fontSize="20px" margin="0px">n</Text>
                    <Grid><ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon></Grid>
                    <Text fontSize="20px" margin="1px">n</Text>
                </PostFooter>
            </Grid>
        </React.Fragment>
    )
}
const PostHeader = styled.div`
    width: 100%;
    height: fit-content;
    display: grid; 
    grid-template-columns: 1fr 6fr;
    align-items:center;
`
const PostHeaderInfo = styled.div`
    width: 100%;
    height: fit-content;
    display:grid;
    grid-template-rows: 1fr 1fr;
    margin-left: 5px;
`
const PostFooter = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 7fr;
`
const PostImage = styled.div`
    width: 348px;
    height: 200px;
    margin: 15px 0px 10px 0px;
    border-radius: 10px;

`
export default MyPagePost;
