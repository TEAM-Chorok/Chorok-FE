import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from '../../Elements';
import MyPlants from './MyPlants';
import MyPictures from './MyPictures';

const MyCategoryBar = () => {
    const [otherView, setOtherView] = React.useState(true);
    const changeViewtoPictures = () => {
        setOtherView(true);
    }
    const changeViewtoPlants = () => {
        setOtherView(false);
    }
    return (
        <React.Fragment>
            <Grid padding="30px 0px 10px 0px" width="100%">
                <CategoryGrid>
                    <CategoryDiv onClick={() => changeViewtoPictures()}>사진</CategoryDiv>
                    <CategoryDiv onClick={() => changeViewtoPlants()}>식물</CategoryDiv>
                </CategoryGrid>
                {otherView ? <MyPictures /> : <MyPlants />}
            </Grid>

        </React.Fragment>
    )
}
const CategoryGrid = styled.div`
width: 100%;
padding: 0px 0px 10px 0px;
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
text-align: center;
border-bottom: 1px solid darkgrey;
`
const CategoryDiv = styled.div`
margin: 10px 0px;
`
const TextDiv = styled.div`
text-align: center;
`
export default MyCategoryBar;

{/* <CategoryGrid>
                    <CategoryDiv>
                        <TextDiv>
                            <Text bold>n</Text>
                        </TextDiv>
                        <TextDiv>
                            <Text>내 사진</Text>
                        </TextDiv>
                    </CategoryDiv>
                    <CategoryDiv>
                        <TextDiv>
                            <Text bold>n</Text>
                        </TextDiv>
                        <TextDiv>
                            <Text>관심 사진</Text>
                        </TextDiv>
                    </CategoryDiv>
                    <CategoryDiv>
                        <TextDiv>
                            <Text bold>n</Text>
                        </TextDiv>
                        <TextDiv>
                            <Text>내 식물</Text>
                        </TextDiv>
                    </CategoryDiv>
                    <CategoryDiv>
                        <TextDiv>
                            <Text bold>n</Text>
                        </TextDiv>
                        <TextDiv>
                            <Text>관심 식물</Text>
                        </TextDiv>
                    </CategoryDiv>
                </CategoryGrid> */}