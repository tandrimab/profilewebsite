import React from "react";

function Supervision(props) {

  return (
    <div className="supervision-div">
      <div>
        <span>{props.thesis}&nbsp;&middot;&nbsp;{props.supervisee}</span>
        {
          props.projectTitle &&
          <span>&nbsp;&middot;&nbsp;{props.projectTitle}</span>
        }
      </div>
      <div>
        <span>{props.place}</span>
        {
          props.year &&
          <span>&nbsp;&middot;&nbsp;{props.year}</span>
        }
      </div>
    </div>
  );
}

export default Supervision;