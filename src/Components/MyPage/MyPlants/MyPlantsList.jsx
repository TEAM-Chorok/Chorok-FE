import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Grid, Image, Text } from '../../../Elements';
import { useHistory } from "react-router-dom";
import { actionCreators as mainActions } from '../../../Redux/Modules/Main'; 
import MyPlant from './MyPlant';


const MyPlantsList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const myPlant = useSelector((state) => state.main?.myplantlist);

    React.useEffect(() => {
        dispatch(mainActions.getMyPlantPageDB());
    }, [])

    return (
        <React.Fragment>
          <Grid padding="0px" width="100%">
    
            {myPlant?.pp04?.length ?
              <Grid margin="0 0 40px 0" width="100%">
                <Text bold size="large">거실 </Text>
                <Text size="large" color="#0AAF42" bold>{myPlant?.pp04?.length}</Text>
                <GridBox>
                  {myPlant?.pp04?.map((plant, idx) => {
                    return (
                      <MyPlant key={idx}
                        myPlantNo={plant.myPlantNo}
                        count={myPlant?.pp04?.length}
                        name={plant.myPlantName}
                        plant={plant.plantName}
                        imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : '/img/plantProfile.svg'} />
                    )
                  })}
                </GridBox>
              </Grid>
              :
              <div></div>
            }
    
            {myPlant?.pp05?.length ?
              <Grid margin="0 0 40px 0" width="100%">
                <Text bold size="large">창가 </Text>
                <Text size="large" color="#0AAF42" bold>{myPlant?.pp05?.length}</Text>
                <GridBox>
                  {myPlant?.pp05?.map((plant, idx) => {
                    return (
                      <MyPlant key={idx}
                        myPlantNo={plant.myPlantNo}
                        count={myPlant?.pp05?.length}
                        name={plant.myPlantName}
                        plant={plant.plantName}
                        imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : '/img/plantProfile.svg'} />
                    )
                  })}
                </GridBox>
              </Grid>
              :
              <div></div>
            }
    
            {myPlant?.pp02?.length ?
              <Grid margin="0 0 40px 0" width="100%">
                <Text bold size="large">방 안 </Text>
                <Text size="large" color="#0AAF42" bold>{myPlant?.pp02?.length}</Text>
               <GridBox>
                  {myPlant?.pp02.map((plant, idx) => {
                    return (
                      <MyPlant key={idx}
                        myPlantNo={plant.myPlantNo}
                        count={myPlant?.pp02?.length}
                        name={plant.myPlantName}
                        plant={plant.plantName}
                        imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : '/img/plantProfile.svg'} />
                    )
                  })}
                </GridBox>
              </Grid>
              :
              <div></div>
            }
    
            {myPlant?.pp03?.length ?
              <Grid margin="0 0 40px 0" width="100%">
                <Text bold size="large">화장실 </Text>
                <Text size="large" color="#0AAF42" bold>{myPlant?.pp03?.length}</Text>
                <GridBox>
                  {myPlant?.pp03?.map((plant, idx) => {
                    return (
                      <MyPlant key={idx}
                        myPlantNo={plant.myPlantNo}
                        place="화장실"
                        count={myPlant?.pp03?.length}
                        name={plant.myPlantName}
                        plant={plant.plantName}
                        imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : '/img/plantProfile.svg'} />
                    )
                  })}
                </GridBox>
              </Grid>
              :
              <div></div>
            }
    
            {myPlant?.pp01?.length ?
              <Grid margin="0 0 40px 0" width="100%">
                <Text bold size="large">통로 </Text>
                <Text size="large" color="#0AAF42" bold>{myPlant?.pp01?.length}</Text>
                <GridBox>
                  {myPlant?.pp01?.map((plant, idx) => {
                    return (
                      <MyPlant key={idx}
                        myPlantNo={plant.myPlantNo}
                        place="통로"
                        count={myPlant?.pp01?.length}
                        name={plant.myPlantName}
                        plant={plant.plantName}
                        imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : '/img/plantProfile.svg'} />
                    )
                  })}
                </GridBox>
              </Grid>
              :
              <div></div>
            }
    
            {myPlant?.pp06?.length ?
              <Grid margin="0 0 40px 0" width="100%">
                <Text bold size="large">베란다/발코니 </Text>
                <Text size="large" color="#0AAF42" bold>{myPlant?.pp06?.length}</Text>
                <GridBox>
                  {myPlant?.pp06?.map((plant, idx) => {
                    return (
                      <MyPlant key={idx}
                        myPlantNo={plant.myPlantNo}
                        place="베란다/발코니"
                        count={myPlant?.pp06?.length}
                        name={plant.myPlantName}
                        plant={plant.plantName}
                        imgUrl={plant.myPlantImgUrl? plant.myPlantImgUrl : '/img/plantProfile.svg'} />
                    )
                  })}
                </GridBox>
              </Grid>
              :
              <div></div>
            }
    
            </Grid>
        </React.Fragment>
    );
}
    
    
    const GridBox = styled.div`
      display: grid;
      margin-top: 8px;
      grid-template-columns: 1fr 1fr 1fr;
    
      width: 100%;
    `
    

export default MyPlantsList;
