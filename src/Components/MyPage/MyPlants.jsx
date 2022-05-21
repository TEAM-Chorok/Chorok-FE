import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Text, Grid, Image } from '../../Elements';
import { useHistory } from 'react-router-dom';
import { actionCreators as MyActions } from '../../Redux/Modules/MyPage';


const MyPlants = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const myPlantList = useSelector(state => state.mypage?.plantList);
    const myPlantCount = useSelector(state => state.mypage?.myPlantCount);
    // const scrapPlantList = useSelector(state => state.main?.scrapPlantList);


    useEffect(() => {
        dispatch(MyActions.getMySixPlantsDB());
        // dispatch(MainActions.getScrapPlantListDB());
    }, [])
    
    // if( !myPlantList || !scrapPlantList ) {
    if( !myPlantList ) {    
        return (
            <div></div>
        )
    }
    return (
        <React.Fragment>
            <Grid padding="0px 16px" width="100%">
                {/* 내 식물 */}
            <TitleWrap>
                <Text bold size="large">내 식물</Text><Text size="large" color="#0AAF42" bold>{myPlantCount}</Text>
                <Button variant='text' style={{color:"grey", justifyContent:"end"}}
                onClick={()=>history.push('/myplants')}>더 보기</Button>
            </TitleWrap>
            <ContentWrap>
                {myPlantList?.map((p, index) => {
                    return (
                        <Contents key={index}>
                            <Image margin="4px auto" type="circle" size="96px" 
                                imgUrl={p.myPlantImgUrl? p.myPlantImgUrl : '/img/plantProfile.svg'}/>
                            <Text display="block">
                                {p?.myPlantName.length<6? p.myPlantName : p.myPlantName.slice(0,4)+'...'}</Text>
                            <Text size="small" color="#6F6F6F" display="block">
                                {p.plantName.length < 6? p.plantName : p.plantName.slice(0, 5)+'...'}</Text>
                        </Contents>
                    )
                })}
            </ContentWrap>
            {/* 스크랩한 식물 */}
            <TitleWrap style={{height: "36.5px" , gridTemplateColumns:"1fr 2.5fr"}}>
                <Text bold size="large">스크랩한 식물 </Text><Text size="large" color="#0AAF42" bold>n</Text>
            </TitleWrap>
            <ScrapContentWrap>
                <Contents key="plantname/plantId" onClick={()=>history.push(`/plant/plantname`)}>
                    <Image margin="8px auto" type="circle" size="96px" imgUrl="https://ar.haenselblatt.com/img/images_1/how-to-grow-rosemary-indoors.jpg"/>
                    {/* <Text size="small" color="#6F6F6F" display="block">
                                {p.plantName.length < 6? p.plantName : p.plantName.slice(0, 5)+'...'}</Text> */}
                    <Text size="small" color="#6F6F6F" display="block">장미</Text>
                </Contents>
                
            </ScrapContentWrap>
            </Grid>

        </React.Fragment>
    )
}

const TitleWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    width: 100%;
    align-items: center;
`
const ContentWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    place-items: center;
    margin-bottom: 40px;
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
    height: 146px;
    margin: 4px;
    border-radius: 5px;
    text-align: center;
`
export default MyPlants;
