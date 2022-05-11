import React from "react";
import styled from "styled-components";
import { Button, Grid } from "../../Elements";

const CommunityFilter = (props) => {

    return(
        <React.Fragment>

            <Grid margin="15px 0px 0px 0px">
                <Button type="filter" 
                        checked={props.category === "all"} 
                        _onClick={() => {props.setCategory("all")}}>전체</Button>
                <Button type="filter" 
                        checked={props.category === "postType02"} 
                        _onClick={() => {props.setCategory("postType02")}}>질문</Button>
                <Button type="filter" 
                        checked={props.category === "postType03"} 
                        _onClick={() => {props.setCategory("postType03")}}>식물성장일기</Button>
                <Button type="filter" 
                        checked={props.category === "postType04"} 
                        _onClick={() => {props.setCategory("postType04")}}>식물추천</Button>
            </Grid>

        </React.Fragment>
    )
}
export default CommunityFilter;