import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Text, Grid, Image } from '../../Elements';
import { useHistory } from 'react-router-dom';
import { actionCreators as MainActions } from '../../Redux/Modules/Main';


const MyPlants = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const myPlantList = useSelector(state => state.main?.myplant);
    const scrapPlantList = useSelector(state => state.main?.scrapPlantList);
    // useEffect(() => {
        // dispatch(MainActions.getMyPlantDB());
        // dispatch(MainActions.getScrapPlantListDB());
    // }, [])
    
    // if( !myPlantList || !scrapPlantList ) {
    //     return (
    //         <div></div>
    //     )
    // }
    return (
        <React.Fragment>
            <Grid padding="0px 16px" width="100%">
                {/* 내 식물 */}
            <TitleWrap>
                <Text bold size="large">내 식물</Text><Text size="large" color="#0AAF42" bold>n</Text>
                <Button variant='text' style={{color:"grey", justifyContent:"end"}}
                onClick={()=>history.push('/myplants')}>더 보기</Button>
            </TitleWrap>
            <ContentWrap>
                <Contents>
                    <Image margin="4px 0px" type="circle" borderRadius="10px" size="104px" imgUrl="img/Rectangle2721.jpg"/>
                    <Text display="block">myPlantName</Text>
                    <Text size="small" color="#6F6F6F" display="block">plantName</Text>
                </Contents>
                <Contents>
                    <Image margin="4px 0px"  type="circle" borderRadius="10px" size="104px" imgUrl="img/bedroom.webp"/>
                    <Text display="block">myPlantName</Text>
                    <Text size="small" color="#6F6F6F" display="block">plantName</Text>
                </Contents>
            </ContentWrap>
            {/* 스크랩한 식물 */}
            <TitleWrap style={{height: "36.5px" , gridTemplateColumns:"1fr 2fr"}}>
                <Text bold size="large">스크랩한 식물 </Text><Text size="large" color="#0AAF42" bold>n</Text>
            </TitleWrap>
            <ScrapContentWrap>
                <Contents key="plantname/plantId" onClick={()=>history.push(`/plant/plantname`)}>
                    <Image type="circle" size="104px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"/>
                </Contents>
                
            </ScrapContentWrap>
            </Grid>

        </React.Fragment>
    )
}

const TitleWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 3.5fr 1fr;
    width: 100%;
    align-items: center;
`
const ContentWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    place-items: center;
    margin-bottom: 65px;
`
const ScrapContentWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    place-items: center;
    margin-bottom: 35px;
`
const Contents = styled.div`
    width: 95%;
    height: 110px;
    margin: 4px;
    border-radius: 5px;
    text-align: center;
`
export default MyPlants;
