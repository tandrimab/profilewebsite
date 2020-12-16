import React from "react";

function Talk(props) {

  function getEvents(data, key) {
    return <span key={key}>{data}&nbsp;&middot;&nbsp;</span>
  }

  return (
    <div className='talk-div'>
      <p>{props.title}</p>
      <div>
        { props.events.map(getEvents) }
      </div>
    </div>
  );
}

export default Talk;