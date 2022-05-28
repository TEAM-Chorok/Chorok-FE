import { style } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { Button, Container, Grid, Text } from "../../Elements";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";


const SearchOnFocus = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const search = (value) => {

  }

  return (
    <React.Fragment>
      <Wrapper>
        <Grid width="100%" margin="4px 0">
          <Button type="filter" _onClick={() => { history.push('/plant/16449') }}>몬스테라</Button>
          <Button type="filter" _onClick={() => { history.push('/plant/16449') }}>꽃베고니아</Button>
        </Grid>
        <Grid width="100%" margin="4px 0">
          <Button type="filter" _onClick={() => { history.push('/plant/12957') }}>공작야자</Button>
          <Button type="filter" _onClick={() => { history.push('/plant/13210') }}>녹영</Button>
        </Grid>
        <Grid width="100%" margin="4px 0">
        </Grid>

      </Wrapper>
    </React.Fragment>
  )
}


const Wrapper = styled.div`
  width: 250px;
  height: 100px; 
  margin: 0 16px;



`

export default SearchOnFocus;