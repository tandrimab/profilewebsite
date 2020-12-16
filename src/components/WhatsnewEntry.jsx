import React from "react";

function WhatsnewEntry(props) {
    if (props.organizer === '') {
        return (
            <div className="whatsnew-div">
                <div>
                    <span><b>{props.activity}</b></span>
                </div>
                <div>
                    <p><span style={{color: 'blue'}}>{props.category}</span>&nbsp;&middot;&nbsp;{props.month}</p>
                </div>  
            </div>
        )
    }
    return (
        <div className="whatsnew-div">
            <div>
                <span><b>{props.activity}&nbsp;&middot;&nbsp;{props.organizer}</b></span>
            </div>
            <div>
                <p><span style={{color: 'blue'}}>{props.category}</span>&nbsp;&middot;&nbsp;{props.month}</p>
            </div>  
        </div>
    )
}

export default WhatsnewEntry;