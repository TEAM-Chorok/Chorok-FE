import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Image } from '../../Elements';
import { useHistory } from 'react-router-dom';


const MyPlants = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <Grid padding="10px 0px" width="100%">
                {/* 내 식물 */}
            <TitleWrap>
                <Text bold fontSize="0.9em">내 식물 </Text><Text line="0.8em" color="green" bold>n</Text>
                <Button variant='text' style={{color:"grey", justifyContent:"end"}}
                onClick={()=>history.push('/myplants')}>더 보기</Button>
            </TitleWrap>
            <ContentWrap>
                <Contents><Image type="square" borderRadius="10px" size="110px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"/></Contents>
                <Contents><Image type="square" borderRadius="10px" size="110px" imgUrl="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202201/19/e6fdcf26-7397-4053-9f84-904cabf7f279.jpg"/></Contents>
            </ContentWrap>
            {/* 스크랩한 식물 */}
            <TitleWrap style={{gridTemplateColumns:"1fr 3fr"}}>
                <Text bold fontSize="0.9em">스크랩한 식물 </Text><Text line="0.8em" color="green" bold>n</Text>
            </TitleWrap>
            <ContentWrap>
                <Contents><Image type="circle" size="110px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"/></Contents>
                
            </ContentWrap>
            </Grid>

        </React.Fragment>
    )
}

const TitleWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 4.5fr 1fr;
    width: 100%;
`
const ContentWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    place-items: center;
    margin-bottom: 35px;
`
const Contents = styled.div`
    width: 95%;
    height: 110px;
    margin: 3px;
    border-radius: 5px;
`
export default MyPlants;
