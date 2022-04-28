import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from '../../Elements';

const MyCategoryBar = () => {
    return (
        <React.Fragment>
            <Grid>
                <CategoryGrid>
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
                </CategoryGrid>
                <hr style={{margin:"0px"}}/>
            </Grid>

        </React.Fragment>
    )
}
const CategoryGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-content: center;
`
const CategoryDiv = styled.div`
width: 87px;
height: 87px;
display: grid;
grid-template-rows: 3fr 2.7fr;
justify-content: center; 
align-items: center;
`
const TextDiv = styled.div`
text-align: center;
`
export default MyCategoryBar;