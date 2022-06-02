import React from "react";
import styled from "styled-components";
import { Button, Container, Text, Grid } from "../../Elements";
import { CommPostList, CommunityFilter, Dimmer, SearchHeader } from "../../Components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as LeafIcon } from "../../Assets/img/sidebuttonIcons/leaf.svg"
import { ReactComponent as HouseIcon } from "../../Assets/img/sidebuttonIcons/house.svg"
import { ReactComponent as BubbleIcon } from "../../Assets/img/sidebuttonIcons/bubble.svg"
import { ReactComponent as PlusIcon } from "../../Assets/img/sidebuttonIcons/plus.svg"


const Community = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem('token') ? true : false;

  //infinite scroll 페이지네이션
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
        <Grid width="100%" position={open ? 'fixed' : 'nonset'}>
          <Grid padding="16px 0 0 16px" width="100%">
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
                <InnerWrap onClick={() => history.push('/plant')}>
                  <LeafIcon style={{ width: '24px', height: '24px' }} />
                  <PlusIcon className="plus" />
                  <Grid margin="0 8px">
                    <Text size="small" >식물 추가하기</Text>
                  </Grid>
                </InnerWrap>

                <InnerWrap>
                  <Grid width="100%">
                    <InnerBox1 onClick={() => history.push(`/planterior/write`)}>
                      <HouseIcon style={{ width: '24px', height: '24px' }} />
                      <Grid margin="0 8px">
                        <Text size="small">식물 공간 올리기</Text>
                      </Grid>
                    </InnerBox1>
                    <InnerBox2 onClick={() => history.push(`/addpost`)}>
                      <BubbleIcon style={{ width: '24px', height: '24px' }} />
                      <Grid margin="0 8px">
                        <Text size="small">초록톡 글쓰기</Text>
                      </Grid>
                    </InnerBox2>
                  </Grid>
                </InnerWrap>
              </Modal>
            </>
            :
            null
          }

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
right: 16px;
bottom: 136px; 
`
const InnerWrap = styled.div`
position: relative;
display: flex;
align-items: center;

margin: 12px 0;
padding: 12px 16px;

width: 136px;
height: fit-content;
border-radius: 16px;

background-color: white;
  .plus{
    position: absolute;
    bottom: 12px;
    left: 30px;
  }
`

const InnerBox1 = styled.div`
display: flex;
align-items: center;

padding-bottom: 10px;
`
const InnerBox2 = styled.div`
display: flex;
align-items: center;

padding-top: 10px;
`
export default Community;