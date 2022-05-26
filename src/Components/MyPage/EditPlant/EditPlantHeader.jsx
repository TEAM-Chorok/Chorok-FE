import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Input, Text, Grid} from '../../../Elements';
import { useHistory } from "react-router-dom";
import { Button } from '@mui/material';
import { ReactComponent as GoBackIcon } from "../../../Assets/img/Icons/goBackIcon.svg"

const EditPlantHeader = (props) => {
    const history = useHistory();
    const [disable, setDisable] = React.useState(true);

    React.useEffect(() => {
        if(props.plantImgUrl !== "" || props.myPlantName !== "" || props.place === props.previousPlantPlace) {
            setDisable(false);
        }else {
            setDisable(true);
        }
    }, [props.plantImgUrl, props.myPlantName, props.place])
    
    return (
        <React.Fragment>
            <Header>
                <GoBackIcon style={{ position: "absolute",  left: "20px", top:"24px"}} 
                    onClick={() => history.goBack()}/>
                <Text line="2.5em">내 식물 수정</Text>
                {disable? 
                    <Button 
                        disabled={disable}
                        style={{fontSize:"16px", position: "absolute", right: "0px", top:"12px"}}>완료</Button> : 
                    <Button
                        onClick={()=>{props.editMyPlant()}}
                        style={{color: "#24A148", fontSize:"16px", position: "absolute", right: "0px", top:"12px"}}>완료</Button>
                }
            </Header>
        </React.Fragment>
    )
}
const Header = styled.div`      
    position: relative; 
    padding: 12px 0px 8px 0px;
    width: 100%;
    text-align: center;
`
export default EditPlantHeader;
