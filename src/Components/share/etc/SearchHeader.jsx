import React from "react";
import { Grid, Text } from "../../../Elements";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../../Redux/Modules/post";


const SearchHeader = (props) => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = React.useState("");
    const [barOpen, setBarOpen] = React.useState(false);

    const openBar = () => {
      {barOpen?
        setTimeout(setBarOpen(false) , 1000)  :
        setBarOpen(true)
      }
    }

    const onKeyUp = (e) => {
        if(e.key === "Enter"){
            if(keyword!==""){
                dispatch(postActions.postSearchingDB(props.category, keyword));
            }
        }
    }
    return (
        <React.Fragment>
            <Grid width="100%" position="relative" >
                <Text size="h5">초록톡</Text>
                {/* <SearchIcon  onClick={()=>openBar()} style={{position:"absolute", top:"5px", right:"0px", width:"20px", height:"20px", color:"#393939"}}/>
                {barOpen && 
                  <Div>
                    <Input onChange={(e)=>setKeyword(e.target.value)} onKeyUp={onKeyUp}/>
                  </Div>} */}
            </Grid>
        </React.Fragment>
    )
}

const animation = keyframes`
  0% {
    opacity: 0%;
    transform: translateY(-20px);
  }
  100% {
    opacity: 100%;
    transform: none;
  }
`;
const Div = styled.div`
    width: 100%;
    margin: 10px 0px 0px 0px;
    animation: ${animation} 1s;
`
const slideOut = keyframes `
  from {
    opacity: 100%;
    transform: none;
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`

const Input = styled.input`
  font-family: 'SUIT-Regular';
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #262626;

  box-sizing: border-box;
  padding: 0 16px 0 32px;
  
  width: 100%;
  height: 40px;
  
  border: none;
  border-radius: 30px;
  background: #F7F8FA;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #6F6F6F;
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`
export default SearchHeader;