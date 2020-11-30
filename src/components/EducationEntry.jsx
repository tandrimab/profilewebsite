import React from "react";

function EducationEntry(props) {
    return (
      <div className='education-div'>
        <p>{props.degree}&nbsp;&middot;&nbsp;{props.year}</p>
        <p>{props.program}</p>
        <p>{props.institutes}</p>
      </div>
    );
}

export default EducationEntry;