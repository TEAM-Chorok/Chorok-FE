import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import MyPlant from './MyPlant';

const MyPlantsList = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            {/* map돌려서 장소별로 print */}
            <MyPlant />
            <MyPlant />
        </React.Fragment>
    )
}
export default MyPlantsList;
