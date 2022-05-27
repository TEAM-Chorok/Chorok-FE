import React from "react";
import styled from "styled-components";
import { Button, Container, Text, Grid } from "../../Elements";
import { CommPostList, CommunityFilter, Dimmer, SearchHeader } from "../../Components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Community = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLogin = localStorage.getItem('token') ? true : false;
    
    const [page, setPage] = React.useState(0);

    //+버튼 모달창
    const [open, setOpenModal] = React.useState(false);
    const openModal = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false);
    }

    const [category, setCategory] = React.useState("all");

    return (
        <React.Fragment>
            <Container type="np">
                <Grid width="100%" position={open? 'fixed': 'nonset'}>
                    <Grid padding="16px 16px 0 16px" width="100%">
                        <SearchHeader category={category} />
                        <CommunityFilter page={page} setPage={setPage} setCategory={setCategory} category={category} />
                    </Grid>
                    <CommPostList page={page} setPage={setPage} category={category} isLogin={isLogin} />
                    <Grid height="70px" />

                    <Button type="plus" _onClick={() => openModal()} />
                    {open ?
                        <>
                            <Dimmer setOpenModal={setOpenModal} onClick={() => closeModal()} />
                            <Modal onClick={e => e.stopPropagation()}>
                                <InnerWrap onClick={() => history.push('/search')}>
                                    <Text size="small" >🌱 식물 추가하기</Text>
                                </InnerWrap>

                                <InnerWrap>
                                    <InnerBox1 onClick={() => history.push(`/planterior/write`)}>
                                        <Text size="small">🏡 공간 자랑하기</Text>
                                    </InnerBox1>
                                    <InnerBox2 onClick={() => history.push(`/addpost`)}>
                                        <Text size="small">💬 초록톡 글쓰기</Text>
                                    </InnerBox2>
                                </InnerWrap>
                            </Modal>
                        </>
                        :
                        null}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

const Modal = styled.div`
width: fit-content;
height: fit-content;
z-index: 200;
position: fixed;
right: 20px;
bottom: 140px; 
margin: auto;
`
const InnerWrap = styled.div`
margin: 12px 0;
padding: 12px 16px;

width: 136px;
height: fit-content;
border-radius: 16px;

background-color: white;
`
const InnerBox1 = styled.div`
padding-bottom: 10px;
`
const InnerBox2 = styled.div`
padding-top: 10px;
`
export default Community;