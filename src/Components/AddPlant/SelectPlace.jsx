import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Grid, Text } from "../../Elements";
import { actionCreators as plantActions } from "../../Redux/Modules/Plant";
import GeneralHeader from "../share/etc/GeneralHeader";
import PlantProfile from "../share/etc/PlantProfile";

const SelectPlace = (props) => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.plant?.place);
  
  const submit = () => {
    if(!props.place) {
      props.setMessage("식물을 키울 공간을 선택해주세요");
      props.setOpen(true);
      return;
    }
    props.setCompNum(1)
  };
  
  React.useEffect(() => {
    dispatch(plantActions.getPlantPlaceDB());
  }, [dispatch])

  return (
    <React.Fragment>
      <GeneralHeader/>
      <Grid width="100%" padding="0 16px">
        <Grid margin="28px 4px">
          <Grid>
            <Text bold size="large">식물을 키울 공간을</Text>
          </Grid>
          <Grid margin="4px 0">
            <Text bold size="large">선택해주세요</Text>
          </Grid>
        </Grid>
        <GridWrapper>
          {place?.map((place) => {
            return (
              <PlantProfile square
                key={place.plantPlaceCode}
                checked={props.place === place.plantPlaceCode ? true : false}
                name={place.plantPlace.length > 3 ? place.plantPlace.slice(0, 3) : place.plantPlace}
                imgUrl={'/img/placeImg/' + place.plantPlaceCode + '.png'}
                _onClick={() => { props.setPlace(place.plantPlaceCode) }}
              />
            );
          })}
        </GridWrapper>
        <ButtonBox>
          <Button type="basic" width="168px" _onClick={() => { submit(); }}>
            <Text size="base" color="#fff">다음으로</Text>
          </Button>
        </ButtonBox>

      </Grid>
    </React.Fragment>
  )
}

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
`

const ButtonBox = styled.div`
    width: fit-content;
    margin: 56px auto 0 auto;
`

export default SelectPlace;