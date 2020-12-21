import React from "react";

function WhatsnewEntry(props) {
    if (props.organizer === '') {
        return (
            <div className="whatsnew-div">
                <h4>{props.activity}&nbsp;
                {
                    props.links.map((data, key) => {
                        console.log(data.text);
                        return  <a key={key} href={data.link} target='_blank' rel="noopener noreferrer">{data.text}</a>
                    })
                }
                </h4>
                <p><span><b>{props.category}</b></span>&nbsp;&middot;&nbsp;{props.month}</p>
            </div>
        )
    }
    return (
        <div className="whatsnew-div">
            <h4>{props.activity}&nbsp;
            {
                props.links.map((data, key) => {
                    console.log(data.text);
                    return  <a key={key} href={data.link} target='_blank' rel="noopener noreferrer">{data.text}</a>
                })
            }&nbsp;
            </h4>
            <p><span><b>{props.organizer}</b></span>&nbsp;&middot;&nbsp;{props.month}</p>
        </div>
    )
}

export default WhatsnewEntry;