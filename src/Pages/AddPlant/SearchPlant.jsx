import React from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddPlantList, BottomSheet, PlantResult, PlantSearchHeader } from "../../Components";
import { Container, Grid, Input, Text } from "../../Elements";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";


const SearchPlant = () => {

  const dispatch = useDispatch();
  const pattern = /\s/g; 

  const [value, setValue] = React.useState("");


  const search = (e) => {
    const text = e.target.value;
    debouncing(text);
  }
  const debouncing = debounce((text) => {
    if(text.match(pattern) || text === ""){
      console.log("검색어가없당");
      return;
    } else {
      console.log("검색", text);
      setValue(text);
      dispatch(searchActions.keywordSearchingDB(text));
      dispatch(searchActions.keywordSearchingPhotoDB(text));
      dispatch(searchActions.keywordSearchingPlantDB(text));
    }
  }, 100)

  return (
    <React.Fragment>
      <Container>
        <PlantSearchHeader 
          title="원하는 식물을 찾아보세요" size="large"
          _onChange={(e) => { search(e) }}
        />

        { value ? <PlantResult value={value}/> : <AddPlantList />}
      
      </Container>
    </React.Fragment>
  );
}


export default SearchPlant;

