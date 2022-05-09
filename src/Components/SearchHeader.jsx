import React from "react";
import { Grid, Input, Text } from "../Elements";
import SearchIcon from '@mui/icons-material/Search';

const SearchHeader = () => {
    return (
        <React.Fragment>
            <Grid width="100%" position="relative" >
                <Text size="h5">초록톡</Text>
                <SearchIcon style={{position:"absolute", top:"5px", right:"0px", width:"20px", height:"20px", color:"#393939"}}/>
            </Grid>
        </React.Fragment>
    )
}

export default SearchHeader;