import React from "react";
import { AddPlantList } from "../../Components";
import { Container, Grid, Text } from "../../Elements";


const AddPlant = () => {

    return(
        <React.Fragment>
            <Container>
                <Grid height="50px"/>
                <Grid>
                    <Text size="M">허브</Text>
                </Grid>

                <AddPlantList />

            </Container>
        </React.Fragment>
    );
}


export default AddPlant;

