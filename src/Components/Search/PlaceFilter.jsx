import React from "react";
import styled from "styled-components";
import { Button, Grid, Text } from "../../Elements";



const PlaceFilter = (props) => {


  const [checked, setChecked] = React.useState({
    all: true,
    pp01: false,
    pp02: false,
    pp03: false,
    pp04: false,
    pp05: false,
    pp06: false,
  });

  return (
    <React.Fragment>
      <FilterWrapper>

        <Button type="filter" checked={checked.all} _onClick={() => {
            props.setPlace("all");
            setChecked({
              all: true,
              pp01: false,
              pp02: false,
              pp03: false,
              pp04: false,
              pp05: false,
              pp06: false,
            });
          }}>전체</Button>

        <Button type="filter" checked={checked.pp01} _onClick={() => {
            props.setPlace("pp01");
            setChecked({
              all: false,
              pp01: true,
              pp02: false,
              pp03: false,
              pp04: false,
              pp05: false,
              pp06: false,
            });
          }}>거실</Button>

        <Button type="filter" checked={checked.pp02} _onClick={() => {
            props.setPlace("pp02");
            setChecked({
              all: false,
              pp01: false,
              pp02: true,
              pp03: false,
              pp04: false,
              pp05: false,
              pp06: false,
            });
          }}>창가</Button>
        
        <Button type="filter" checked={checked.pp03} _onClick={() => {
            props.setPlace("pp03");
            setChecked({
              all: false,
              pp01: false,
              pp02: false,
              pp03: true,
              pp04: false,
              pp05: false,
              pp06: false,
            });
          }}>방 안</Button>

        <Button type="filter" checked={checked.pp04} _onClick={() => {
            props.setPlace("pp04");
            setChecked({
              all: false,
              pp01: false,
              pp02: false,
              pp03: false,
              pp04: true,
              pp05: false,
              pp06: false,
            });
          }}>화장실</Button>

        <Button type="filter" checked={checked.pp05} _onClick={() => {
            props.setPlace("pp05");
            setChecked({
              all: false,
              pp01: false,
              pp02: false,
              pp03: false,
              pp04: false,
              pp05: true,
              pp06: false,
            });
          }}>통로</Button>

        <Button type="filter" checked={checked.pp06} _onClick={() => {
            props.setPlace("pp06");
            setChecked({
              all: false,
              pp01: false,
              pp02: false,
              pp03: false,
              pp04: false,
              pp05: false,
              pp06: true,
            });
          }}>베란다</Button>

      </FilterWrapper>
    </React.Fragment>
  )
}

PlaceFilter.defaultProps = {

}

const FilterWrapper = styled.div`
  display: flex;

  margin: 16px 0;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

&::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}
`

export default PlaceFilter;