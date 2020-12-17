import React from "react";

function WhatsnewEntry(props) {
    if (props.organizer === '') {
        return (
            <div className="whatsnew-div">
                <h4>{props.activity}</h4>
                <p><span style={{color: 'blue'}}>{props.category}</span>&nbsp;&middot;&nbsp;{props.month}</p>
            </div>
        )
    }
    return (
        <div className="whatsnew-div">
            <h4>{props.activity}&nbsp;&middot;&nbsp;{props.organizer}</h4>
            <p><span style={{color: 'blue'}}>{props.category}</span>&nbsp;&middot;&nbsp;{props.month}</p>
        </div>
    )
}

export default WhatsnewEntry;