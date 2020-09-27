import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p style={props.style}>Hello! {props.username}</p>
            <p>Welcome to my world!</p>
        </div>
    )
}

export default userOutput;