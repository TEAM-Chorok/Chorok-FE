import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Text, Grid, Image } from '../../Elements';
import { actionCreators as MyActions } from '../../Redux/Modules/MyPage';

const MyPictures = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const myPhotoList = useSelector(state => state.mypage?.myPlanteriorList);
    const myPlanteriorBookMarkCount = useSelector(state => state.mypage?.myPlanteriorBookMarkCount)
    const myPlanteriorCount = useSelector(state => state.mypage?.myPlanteriorCount)
    const scrapPhotoList = useSelector(state => state.mypage?.myPlanteriorBookMarKList);


    console.log(myPhotoList);

    useEffect(() => {
        dispatch(MyActions.getMyPhotoScrapedPhotoListDB());
    }, [])

    if( !myPhotoList && !scrapPhotoList ) {
        return (
            <div></div>
        )
    }
    return (
        <React.Fragment>
            <Grid padding="0px 16px" width="100%">
                {/* 내 사진 */}
            <TitleWrap1>
                <Text bold size="large">내 식물공간 <span style={{color:"#0AAF42"}}>{myPlanteriorCount}</span></Text>
                <Button variant='text' style={{color:"grey", justifyContent:"end"}}
                onClick={()=>history.push('/mypictures')}>더 보기</Button>
            </TitleWrap1>
            <ContentWrap>
                {myPhotoList && myPhotoList?.map((p, idx) => {
                    return (
                    <Contents key={idx}>
                        <Image margin="4px auto" type="square" borderRadius="10px" size="104px" imgUrl={p.postImgUrl}/>
                        <Grid borderRadius="20px" padding="2px 8px" bg="rgb(0,0,0,0.5)" position="absolute" bottom="6px" >
                            <Text color="#ffffff" size="xxsmall">{p.plantPlace}</Text>
                        </Grid>
                    </Contents>
                    ) 
                })}
                
            </ContentWrap>
            {/* 스크랩한 사진  */}
            <TitleWrap>
                <Text bold size="large">스크랩한 식물공간 <span style={{color:"#0AAF42"}}>{myPlanteriorBookMarkCount}</span></Text>
                <Button variant='text' style={{color:"grey", justifyContent:"end"}}
                onClick={()=>history.push('/scrap-picture')}>더 보기</Button>
            </TitleWrap>
            <ContentWrap>
                {scrapPhotoList && scrapPhotoList.map((p, idx) => {
                    
                    return (
                    <Contents key={idx}>
                        <Image margin="4px auto" type="square" borderRadius="10px" size="104px" imgUrl={p.postImgUrl}/>
                    </Contents>
                    )
                })}
                
            </ContentWrap>
            </Grid>

        </React.Fragment>
    )
}
const TitleWrap1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    align-items: center;
`
const TitleWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    align-items: center;
`
const ContentWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    place-items: center;
    margin-bottom: 35px;
`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 110px;
    margin: 3px;
    border-radius: 5px;
    position: relative;
`
export default MyPictures;
