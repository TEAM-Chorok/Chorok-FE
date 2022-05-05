import React, { useState } from "react";
import CommPost from "./CommPost";

const CommPostList = () => {

    return (
        <React.Fragment>
            <CommPost key={1} />
            <CommPost key={2} />
        </React.Fragment>
    )

}

export default CommPostList;