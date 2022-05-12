import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Text, Grid, Image } from '../../Elements';
import { actionCreators as postActions} from '../../Redux/Modules/post';

const MyPictures = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const myPhotoList = useSelector(state => state.post?.photoList);
    const scrapPhotoList = useSelector(state => state.post?.scrapPhotoList);

    useEffect(() => {
        dispatch(postActions.getMyPhotoListDB());
        dispatch(postActions.getScrapPhotoListDB());
    }, [])
    
    const _myPhotoList=myPhotoList.slice(0, 6);
    const _scrapPhotoList=scrapPhotoList.slice(0, 6);
    


    if( !myPhotoList && !scrapPhotoList ) {
        return (
            <div></div>
        )
    }
    return (
        <React.Fragment>
            <Grid padding="10px 16px" width="100%">
                {/* 내 사진 */}
            <TitleWrap1>
                <Text bold size="large">내 사진</Text><Text size="large" color="#0AAF42" bold>n</Text>
                <Button variant='text' style={{color:"grey", justifyContent:"end"}}
                onClick={()=>history.push('/mypictures')}>더 보기</Button>
            </TitleWrap1>
            <ContentWrap>
                {_myPhotoList && _myPhotoList.map((p) => {
                    return (
                    <Contents key={p.myPhotoList.planteriorNo}>
                        <Image margin="4px 0px" type="square" borderRadius="10px" size="104px" imgUrl="p.planteriorImgUrl"/>
                    </Contents>
                    )
                })}
                
            </ContentWrap>
            {/* 스크랩한 사진  */}
            <TitleWrap>
                <Text bold size="large">스크랩한 사진 </Text><Text size="large" color="#0AAF42" bold>n</Text>
                <Button variant='text' style={{color:"grey", justifyContent:"end"}}
                onClick={()=>history.push('/scrap-picture')}>더 보기</Button>
            </TitleWrap>
            <ContentWrap>
                {_scrapPhotoList && _scrapPhotoList.map((p) => {
                    return (
                    <Contents key={p.planteriorNo}>
                        <Image margin="4px 0px" type="square" borderRadius="10px" size="104px" imgUrl="p.planteriorImgUrl"/>
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
    grid-template-columns: 1fr 3.5fr 1fr;
    width: 100%;
    align-items: center;
`
const TitleWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
    width: 95%;
    height: 110px;
    margin: 3px;
    border-radius: 5px;
`
export default MyPictures;
