import React from "react";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddPlantList, BottomSheet, GeneralHeader, PlantResult, PlantSearchHeader } from "../../Components";
import { Container, Grid, Input, Text } from "../../Elements";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";


const SearchPlant = () => {

  const dispatch = useDispatch();
  const pattern = /\s/g;
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  const value = useSelector((state) => state.search?.value);

  const search = (e) => {
    const text = e.target.value;
    let newText;
    if (regExp.test(text)){
      // 특수문자 입력 CORS 방지
      newText = text.replace(regExp, "");
      debouncing(text);
      return;
    }
    debouncing(text);
  }

  const debouncing = debounce((text) => {
    if (!text.replace(pattern, '').length) {
      return;
    } 
    // 검색 실행
    dispatch(searchActions.keywordSearchingDB(text));
    dispatch(searchActions.keywordSearchingPhotoDB(text));
    dispatch(searchActions.keywordSearchingPlantDB(text));
  }, 100)

  return (
    <React.Fragment>
      <GeneralHeader title="식물 추가하기"/>
      <Grid width="100%" height="1px" bg="#E0E0E0" /> 
      <Container>
        <PlantSearchHeader 
          title="원하는 식물을 찾아보세요" size="large"
          placeholder="어떤 식물을 찾고 있나요?"
          _onChange={(e) => { search(e) }}
        />
        { value ? <PlantResult value={value}/> : <AddPlantList />}
      </Container>
    </React.Fragment>
  );
}


export default SearchPlant;

