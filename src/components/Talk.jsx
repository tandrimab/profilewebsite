import React from "react";

function Talk(props) {
  var events = [];
  props.events.map((event, index) => {
    events.push(
      <span key={index} >{event}&nbsp;&middot;&nbsp;</span>
    )
    return true;
  })
  return (
    <div className='talk-div'>
      <p>{props.title}</p>
      <div>
        {events}
      </div>
    </div>
  );
}

export default Talk;