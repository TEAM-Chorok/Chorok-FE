import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Grid, Text } from "../../../Elements";
import PlantProfile from "../../PlantProfile";



const PlantResult = () => {
  const history = useHistory();
  const plantList = useSelector((state) => state.search?.resultPlant);
  const count = useSelector((state) => state.search?.result?.plantDictionaryCount);


  return (
    <React.Fragment>
      <Grid width="100%" padding="16px 0">
        <Grid width="100%" margin="0 2px">
          <Text bold size="small">전체</Text>
          <Text bold margin="0 8px" size="small" color="#0AAF42">{count}</Text>
        </Grid>
        <Grid width="100%">
          {plantList?.map((plant) => {
            return (
              <PlantProfile list 
                key={plant.plantNo}
                plant={plant.plantName} 
                imgUrl={plant.plantImgUrl}
                _onClick={()=>{history.push(`plant/${plant.plantNo}`)}}
              />
            )
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}


export default PlantResult;