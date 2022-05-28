import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Grid from "./Grid";
import Text from "./Text";


const Input = (props) => {
  const {
      defaultValue,
      borderRadius,
      placeholder,
      padding,
      display,
      border,
      margin,
      height,
      width,
      label,
      type,
      name,
      position,
      top,
      right,
      bottom,
      focusOutline,
      max,
      _value,
      _onChange,
      _onFocus,
      _onBlur,
      _ref,
  } = props;

  const styles = {
      borderRadius,
      display,
      padding,
      border,
      margin,
      height,
      width,
      position,
      top,
      right,
      bottom,
      focusOutline,
  }

  if (type === "basic") {
    return (
      <React.Fragment>
        <Grid margin="4px">
          <Text size="base">{label}</Text>
        </Grid>
        <BasicInput 
          {...styles}
          ref={_ref}
          placeholder={placeholder}
          onChange={_onChange}
          maxLength={max}
        />
      </React.Fragment>
    );
  }
  
  if (type === "square") {
    return (
      <React.Fragment>
        <Grid margin="4px">
          <Text bold size="small">{label}</Text>
        </Grid>
        <SquareInput 
          {...styles}
          ref={_ref}
          placeholder={placeholder}
          onChange={_onChange}
          defaultValue={defaultValue}
        />
      </React.Fragment>
    );
  }
  
  if (type === "squarenp") {
    return (
      <React.Fragment>
        {label?
        <Grid margin="1px">
          <Text size="base" weight="400">{label}</Text>
        </Grid>
        :
        null}
        <SquareInputNonePadding
          {...styles}
          ref={_ref}
          placeholder={placeholder}
          onChange={_onChange}
          defaultValue={defaultValue}
          maxLength={max}
        />
      </React.Fragment>
    );
  }
  
  if (type === "search") {
    return (
      <React.Fragment>
        <SearchInput 
          {...styles}
          placeholder={placeholder}
          onChange={_onChange}
          onFocus={_onFocus}
          onBlur={_onBlur}
        />
      </React.Fragment>
    );
  }

  if (type === "textarea") {
    return (
      <React.Fragment >
        <TextArea 
          {...styles}
          placeholder={placeholder}
          onChange={_onChange}
          ref={_ref}
          />
      </React.Fragment>
    );
  }

  if (type === "comment") {
    return (
      <React.Fragment >
        <CommentTextArea 
          {...styles}
          placeholder={placeholder}
          onChange={_onChange}
          defaultValue={defaultValue}
          ref={_ref}
          />
      </React.Fragment>
    );
  }
  if(type === "email") {
    return (
      <React.Fragment >
        <Grid width="100%">
          <PasswordInput type="email"
            {...styles}
            placeholder={placeholder}
            onChange={_onChange}
            ref={_ref}
            />
        </Grid>
      </React.Fragment>
    )
  }
  if(type === "password") { 
    return (
      <React.Fragment >
        <Grid width="100%">
          <PasswordInput type="password"
            {...styles}
            placeholder={placeholder}
            onChange={_onChange}
            ref={_ref}
            value={_value}
            />
        </Grid>
      </React.Fragment>
    )
  }
  if(type === "shownPassword") { 
    return (
      <React.Fragment >
        <Grid width="100%">
          <PasswordInput type="text"
            {...styles}
            placeholder={placeholder}
            onChange={_onChange}
            ref={_ref}
            value={_value}
            />
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
    {label && <Text margin="5px">{label}</Text>}
    <Inputs {...styles} 
    type={type}
    placeholder={placeholder}
    onChange={_onChange}
    name={name}
    defaultValue={defaultValue}>
</Inputs>
</React.Fragment>
  );
}
Input.defaultProps = {
  label: "",
  type: "text",
  _onChange: () => {},
  display: "block",
  margin: "10px auto",
  padding: "5px 0px 5px 5px",
  width: "320px",
  height: "40px",
  border: "1px solid darkgrey",
  borderRadius: "50px",
  name: "",
  focusOutline: "1px solid #0AAF42",
  defaultValue: null,
}


const Inputs = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderRadius};
    display: ${(props) => props.display};
    margin: ${(props) => props.margin};
    padding:${(props) => props.padding};
    &:focus {
        outline: ${(props) => props.focusOutline};
    }
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    defaultValue: ${(props) => props.defaultValue};
    &::placeholder {
      color: #C6C6C6;
      font-size: 16px;
      letter-spacing: 0.25px;
    }
    font-size: 16px;
`

const BasicInput = styled.input`
  font-family: 'SUIT';
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #262626;

  box-sizing: border-box;
  padding: 0 16px;
  
  width: ${(props) => props.width};
  height: 40px;
  
  border: none;
  border-radius: 30px;
  background: #F7F8FA;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #6F6F6F;
    font-size: 16px;
    letter-spacing: 0.25px;
  }
`

const SquareInput = styled.input`
  font-family: 'SUIT';
  font-size: 16px;
  letter-spacing: 0.25px;
  color: #262626;

  box-sizing: border-box;
  padding: 0 60px 0 16px;
  
  width: ${(props) => props.width};
  height: 40px;
  
  border: 1px solid #C6C6C6;
  border-radius: 6px;
  background: #fff;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #A8A8A8;
    font-size: 16px;
    letter-spacing: 0.25px;
  }
`

const SquareInputNonePadding = styled.input`
  font-family: 'SUIT';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.25px;
  color: #262626;

  box-sizing: border-box;
  padding: 0 16px;
  
  width: ${(props) => props.width};
  height: 48px;
  width: 100%;
  
  border: 1px solid #C6C6C6;
  border-radius: 6px;
  background: #fff;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #A8A8A8;
    font-size: 16px;
    letter-spacing: 0.25px;
  }
`


const SearchInput = styled.input`
  font-family: 'SUIT';
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #262626;

  box-sizing: border-box;
  padding: 0 16px 0 44px;
  
  width: ${(props) => props.width};
  height: 40px;
  
  border: none;
  border-radius: 30px;
  background: #F7F8FA;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #A8A8A8;
    font-size: 14px;
    letter-spacing: 0.25px;
  }
`

const TextArea = styled.textarea`
  font-family: 'SUIT';
  box-sizing: border-box;
  width: 100%;
  height: 48vh;

  resize: none;
  
  ${'' /* border: 1px solid red; */}
  border: none;
  outline: none;

  font-size: 14px;
  font-weight: 500;
  color: #262626;
  &::placeholder {
    color: #A8A8A8;
  }
  @media screen and (max-height: 400px) {
    height: 364px;
  }
`

const CommentTextArea = styled.textarea`
  font-family: 'SUIT';
  box-sizing: border-box;
  padding: 10px 44px 0 12px;

  width: 100%;
  height: 40px;

  resize: none;
  
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  outline: none;

  font-size: 14px;
  font-weight: 500;
  color: #262626;

  &::placeholder {
    color: #A8A8A8;
  }

  @media screen and (max-height: 400px) {
    height: 364px;
  }
`
const PasswordInput = styled.input`
  box-sizing: border-box;
  font-family: 'SUIT';
  font-size: 16px;
  letter-spacing: 0.25px;
  color: #262626;

  width: 100%;
  height: 52px;
  padding: 0px 40px 0px 16px; 
  border: ${(props) => props.border};
  border-radius: 6px;
  margin: ${(props) => props.margin};

  &::placeholder {
    color: #6F6F6F;
    font-size: 14px;
    letter-spacing: 0.25px;
  }
 &:focus {
    outline: none;
  }
  
`

    export default Input;