import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
    const is_session = sessionStorage.getItem('token') ? true : false;
    const is_login = useSelector((state) => state.user.is_login);

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