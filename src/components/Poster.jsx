import React from "react";

function Poster(props) {
    
    return (
        <div className='poster-div'>
            <h4>{props.title}</h4>
            <p className="authors">{props.authors}</p>
            <div className="event">
                <p>{props.event['text']}
                    <a href={props.event['link']} target='_blank' rel="noopener noreferrer">PDF</a>
                </p>
            </div>
        </div>
    );
}

export default Poster;