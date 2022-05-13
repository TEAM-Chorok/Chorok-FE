import { debounce } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AddPlantList, AllResult, Planterior, PlantSearchHeader, SearchOnFocus, Tabbar } from "../../Components";
import { Button, Container, Grid, Text } from "../../Elements";
import { actionCreators as searchActions } from "../../Redux/Modules/Search";
import Result from "./Result";

// 탐색페이지
const Search = () => {
  const dispatch = useDispatch();
  const pattern = /\s/g; 
  // 탭 선택에 따라 보여줄 컴포넌트 목록
  // 보여줄 컴포넌트 넘버
  const [compNum, setCompNum] = React.useState(0);
  const [value, setValue] = React.useState("");

  const comp = {
    0: <Planterior />,
    1: <AddPlantList />,
    2: <SearchOnFocus />,
    3: <Result value={value}/>,
  };


  const search = (e) => {
    const text = e.target.value;
    if (text) {
      setCompNum(3);
    }
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
      <Container type="np">
        <Container>
          <Grid width="100%">
            <PlantSearchHeader title="탐색" size="h5"
              _onChange={(e) => { search(e) }}
              _onFocus={() => { compNum === 3 ? setCompNum(3) : setCompNum(2) }}
              _onBlur={() => { compNum < 3 ? setCompNum(0) : setCompNum(3) }}
            />
          </Grid>
          {compNum > 1 ?
            <div></div> :
            <Tabbar tab1="사진" tab2="식물도감" setCompNum={setCompNum} compNum={compNum} />
          }
        </Container>
        {compNum > 1 ?
          <Grid margin="-16px 0 0 0" width="100%">
            {comp[compNum]}
          </Grid>
          :
          <Grid width="100%" padding={compNum === 1 ? "0 16px" : ""}>
            {comp[compNum]}
          </Grid>
        }
        <Button type="plus"/>
      </Container>
    </React.Fragment>
  )
}

const ResultBox = styled.div`
  padding: 0 16px;
  width: 100%;
  
`


export default Search;