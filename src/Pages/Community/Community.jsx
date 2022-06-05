import React from "react";
import styled from "styled-components";
import { Button, Container, Text, Grid } from "../../Elements";
import { CommPostList, CommunityFilter, Dimmer, SearchHeader, SideButton } from "../../Components";
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

  
  const [category, setCategory] = React.useState("all");

  const [open, setOpen] = React.useState(false);

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
          
          <SideButton open={open} setOpen={setOpen} />
          

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