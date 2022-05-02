import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Input, Text, Grid} from '../../../Elements';
import { useHistory } from "react-router-dom";

const EditPlantHeader = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Header>
                <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "0px", top:"10px" }} 
                onClick={()=> history.goBack()}></ArrowBackIosNewOutlinedIcon>
                <Text line="2.5em">내 식물 편집</Text>
                <MoreVertOutlinedIcon style={{position: "absolute", right: "0px", top:"10px" }} 
                onClick={()=> history.goBack()}></MoreVertOutlinedIcon>
            </Header>
        </React.Fragment>
    )
}
const Header = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  position: relative; 
`
export default EditPlantHeader;
