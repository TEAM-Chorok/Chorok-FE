import React, { useState } from "react";
import CommPost from "./CommPost";
import { Grid } from "../../Elements";

const CommPostList = () => {

    return (
        <React.Fragment>
            <CommPost key={1} />
            <Grid width="100%" height="12px" bg="#F7F8FA" />
            <CommPost key={2} />
        </React.Fragment>
    )

}

export default CommPostList;