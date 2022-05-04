import React from "react";
import { Grid, Input } from "../Elements";
import SearchIcon from '@mui/icons-material/Search';

const SearchHeader = () => {
    return (
        <React.Fragment>
            <Grid position="relative" width="100%" >
                <Input name="searchCommunity" padding="0px 0px 0px 60px" borderRadius="30px" width="340px"/>
                <SearchIcon style={{position: "absolute", left: "25px", top: "9px"}}/>
            </Grid>
        </React.Fragment>
    )
}

export default SearchHeader;