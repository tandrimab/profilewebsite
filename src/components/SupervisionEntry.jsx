import React from "react";

function SupervisionEntry(props) {
  var projectTitle = [];
  var year = [];
  if (props.projectTitle) {
    projectTitle.push(
      <span key={0} >&nbsp;&middot;&nbsp;{props.projectTitle}</span>
    );
  }
  if (props.year) {
    year.push(
      <span key={1}>&nbsp;&middot;&nbsp;{props.year}</span>
    );
  }

  return (
    <div className="supervision-div">
      <div>
        <span>{props.thesis}&nbsp;&middot;&nbsp;{props.supervisee}</span>
        {projectTitle}
      </div>
      <div>
        <span>{props.place}</span>
        {year}
      </div>
    </div>
  );
}

export default SupervisionEntry;