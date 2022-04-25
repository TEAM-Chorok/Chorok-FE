import React from "react";


const Permit = (props) => {
    const is_session = sessionStorage.getItem('token') ? true : false;

    if (is_session) {
    return (
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }
    return null;
}

export default Permit;