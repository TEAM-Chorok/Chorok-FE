import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actionCreators as userActions } from "../Redux/Modules/User";

const Permit = (props) => {
    const dispatch = useDispatch();
    const is_session = sessionStorage.getItem('token') ? true : false;
    useEffect(() => {
        dispatch(userActions.isLoginDB())
    },[]);
    const is_login = useSelector((state) => state.user.isLogin);

    console.log(is_login);
    if (is_login && is_session) {
    return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }
    return null;
}

export default Permit;