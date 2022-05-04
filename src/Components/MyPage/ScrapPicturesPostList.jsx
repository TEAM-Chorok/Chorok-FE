import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { Input, Text, Grid} from '../../Elements/index';
import { useHistory } from "react-router-dom";
import MyPagePost from './MyPagePost';

const ScrapPicturesPostList = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            {/* map으로 postlist 돌림 */}
            <MyPagePost />
            <MyPagePost />
            <MyPagePost />
        </React.Fragment>
    )
}
const Header = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  position: relative; 
`
export default ScrapPicturesPostList;
