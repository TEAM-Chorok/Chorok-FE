import React from "react";
import styled from "styled-components";
import { Button, Grid } from "../../Elements";

const CommunityFilter = () => {
    const [category, setCategory] = React.useState("");
    return(
        <React.Fragment>

            <Grid margin="15px 0">
                <Button type="filter" _onClick={() => {setCategory("")}}>전체</Button>
                <Button type="filter" _onClick={() => {setCategory("postType02")}}>질문</Button>
                <Button type="filter" _onClick={() => {setCategory("postType03")}}>식물성장일기</Button>
                <Button type="filter" _onClick={() => {setCategory("postType04")}}>식물추천</Button>
            </Grid>

        </React.Fragment>
    )
}
export default CommunityFilter;