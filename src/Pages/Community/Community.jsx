import React from "react";
import styled from "styled-components";
import { Button, Container, Text, Grid } from "../../Elements";
import { CommPostList, CommunityFilter, SearchHeader } from "../../Components";
import Dimmer from "../../Components/Dimmer";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Community = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLogin = sessionStorage.getItem('token') ? true : false;
    
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
                <Grid width="100%">
                    <Grid padding="20px 20px 0px 20px" width="100%">
                        <SearchHeader category={category} />
                        <CommunityFilter setCategory={setCategory} category={category} />
                    </Grid>
                    <CommPostList category={category} isLogin={isLogin} />
                    <Button type="plus" _onClick={() => openModal()} />
                    {open ?
                        <>
                            <Dimmer setOpenModal={setOpenModal} onClick={() => closeModal()} />
                            <Modal onClick={e => e.stopPropagation()}>
                                <InnerWrap onClick={() => history.push('/search')}>
                                    <Text size="small" >식물 추가하기</Text>
                                </InnerWrap>

                                <InnerWrap>
                                    <InnerBox1 onClick={() => history.push(`/planterior/write`)}>
                                        <Text size="small">공간 자랑하기</Text>
                                    </InnerBox1>
                                    <InnerBox2 onClick={() => history.push(`/addpost`)}>
                                        <Text size="small">초록톡 글쓰기</Text>
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
width: 167px;
height: fit-content;
text-align: center;
background-color: white;
margin: 8px 0px;
padding: 12px;
border-radius: 16px;
`
const InnerBox1 = styled.div`
padding: 0px 0px 6px 0px;
`
const InnerBox2 = styled.div`
padding: 6px 0px 0px 0px;
`
export default Community;