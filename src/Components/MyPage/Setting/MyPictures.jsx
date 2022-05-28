import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Text, Grid, Image, Button } from '../../../Elements';
import { actionCreators as MyActions } from '../../../Redux/Modules/MyPage';

import { ReactComponent as AddPlus } from '../../../Assets/img/nonImageIcons/AddPlus.svg'

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

    if (!myPhotoList && !scrapPhotoList) {
        return (
            <div></div>
        )
    }
    return (
        <React.Fragment>
            <Grid padding="0px 16px" width="100%">
                {/* 내 사진 */}
                <TitleWrap1>
                    <Text bold size="large" weight="700">내 식물공간 <span style={{ color: "#0AAF42" }}>{myPlanteriorCount}</span></Text>
                    {myPhotoList?.length ?
                        <AbsoluteBox>
                            <Button type="tran" _onClick={() => history.push('/mypictures')}>
                                <Text size="small" color="#525252">더보기</Text>
                            </Button>
                        </AbsoluteBox>
                        :
                        null}
                </TitleWrap1>
                {myPhotoList?.length ?
                    <ContentWrap>
                        {myPhotoList && myPhotoList?.map((p, idx) => {
                            return (
                                <Contents key={idx} onClick={() => history.push('/mypictures')}>
                                    <Grid is_flex align="center" height="100%">
                                        <Image  type="square" borderRadius="4px" size="104px" imgUrl={p.postImgUrl} />
                                    </Grid>
                                    <Grid is_flex align="center" borderRadius="20px" padding="2px 8px" bg="rgb(0,0,0,0.5)" position="absolute" bottom="6px" >
                                        <Text color="#fff" size="xxsmall" weight="500">{p.plantPlace}</Text>
                                    </Grid>
                                </Contents>
                            )
                        })}
                    </ContentWrap>
                    :
                    <>
                        <Contents>
                            <Grid is_flex
                                align="center"
                                margin="12px 0"
                                width="100%"
                                height="100%"
                                borderRadius="8px"
                                bg="#F4F4F4"
                                _onClick={() => history.push('/planterior/write')}
                            >
                                <AddPlus />
                            </Grid>
                        </Contents>
                        <Grid margin="28px 0 24px 0" width="100%">
                            <Button type="square" _onClick={() => history.push('/planterior/write')}>
                                <Text weight="500" color="#fff" height="48px" width="100%">식물 공간 올리기</Text>
                            </Button>
                        </Grid>
                    </>
                }
                {/* 스크랩한 사진  */}
                <TitleWrap>
                    <Text size="large" weight="700">스크랩한 식물공간 <span style={{ color: "#0AAF42" }}>{myPlanteriorBookMarkCount}</span></Text>
                    {scrapPhotoList?.length ?
                        <AbsoluteBox>
                            <Button type="tran" _onClick={() => history.push('/scrap-picture')}>
                                <Text size="small" color="#525252">더보기</Text>
                            </Button>
                        </AbsoluteBox>
                        : null}
                </TitleWrap>
                <ContentWrap>
                    {scrapPhotoList && scrapPhotoList.map((p, idx) => {

                        return (
                            <Contents key={idx} onClick={() => history.push('/scrap-picture')}>
                                <Image type="square" borderRadius="4px" size="104px" imgUrl={p.postImgUrl} />
                            </Contents>
                        )
                    })}

                </ContentWrap>
            </Grid>
            <Grid height="70px" />
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
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    width: 100%;
    place-items: center;
    margin-top: 12px;
    margin-bottom: 40px;
`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    width: 104px;
    height: 104px;
    border-radius: 5px;
    position: relative;
`

const AbsoluteBox = styled.div`
    position: absolute;
    right: 9px;
`


export default MyPictures;
