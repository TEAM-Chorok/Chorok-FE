import React from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Input, Text, Grid} from '../../Elements/index';
import { useHistory } from "react-router-dom";

const SettingHeader = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "0px", top:"10px" }} 
              onClick={()=> history.goBack()}></ArrowBackIosNewOutlinedIcon>
          </Header>
        </React.Fragment>
    )
}
const Header = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  position: relative; 
`
export default SettingHeader; 