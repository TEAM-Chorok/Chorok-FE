import React from "react";
import styled from "styled-components";
import { Button, Grid, Text } from "../../Elements";
import XdragScroll from "../share/etc/XdragScroll";



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
      <XdragScroll>
        {props.none ?
          <div>
          </div>
          :
          <Button type="filter" checked={checked.all} _onClick={() => {
            props.setPlace("all");
            props.setPage(0);
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
        }

        <Button type="filter" checked={checked.pp04} _onClick={() => {
          props.setPlace("pp04");
          props.setPage(0);
          setChecked({
            all: false,
            pp01: false,
            pp02: false,
            pp03: false,
            pp04: true,
            pp05: false,
            pp06: false,
          });
        }}>거실</Button>

        <Button type="filter" checked={checked.pp05} _onClick={() => {
          props.setPlace("pp05");
          props.setPage(0);
          setChecked({
            all: false,
            pp01: false,
            pp02: false,
            pp03: false,
            pp04: false,
            pp05: true,
            pp06: false,
          });
        }}>창가</Button>

        <Button type="filter" checked={checked.pp02} _onClick={() => {
          props.setPlace("pp02");
          props.setPage(0);
          setChecked({
            all: false,
            pp01: false,
            pp02: true,
            pp03: false,
            pp04: false,
            pp05: false,
            pp06: false,
          });
        }}>방 안</Button>

        <Button type="filter" checked={checked.pp03} _onClick={() => {
          props.setPlace("pp03");
          props.setPage(0);
          setChecked({
            all: false,
            pp01: false,
            pp02: false,
            pp03: true,
            pp04: false,
            pp05: false,
            pp06: false,
          });
        }}>화장실</Button>

        <Button type="filter" checked={checked.pp01} _onClick={() => {
          props.setPlace("pp01");
          props.setPage(0);
          setChecked({
            all: false,
            pp01: true,
            pp02: false,
            pp03: false,
            pp04: false,
            pp05: false,
            pp06: false,
          });
        }}>통로</Button>

        <Button type="filter" checked={checked.pp06} _onClick={() => {
          props.setPlace("pp06");
          props.setPage(0);
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

      </XdragScroll>
    </React.Fragment>
  )
}


export default PlaceFilter;