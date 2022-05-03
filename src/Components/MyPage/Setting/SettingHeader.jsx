import React from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Input, Text, Grid} from '../../../Elements/index';
import { useHistory } from "react-router-dom";

const SettingHeader = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Header>
              <ArrowBackIosNewOutlinedIcon style={{position: "absolute", left: "10px", top:"58px" }} 
              onClick={()=> history.goBack()}></ArrowBackIosNewOutlinedIcon>
              <Text >설정</Text>
          </Header>
        </React.Fragment>
    )
}
const Header = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  margin: 10px auto;
`
export default SettingHeader; 