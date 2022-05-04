import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { EditPlantHeader, EditPlantBody } from '../../Components';
import { Container } from '../../Elements';

const EditPlant = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <Container>
                <EditPlantHeader />
                <EditPlantBody />
            </Container>
        </React.Fragment>
    )
}
export default EditPlant;
