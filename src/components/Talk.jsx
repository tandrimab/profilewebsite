import React from "react";

function Talk(props) {

  function getEvents(data, key) {
    return <span key={key}>{data}&nbsp;&middot;&nbsp;</span>
  }

  if (props.link !== '') {
    return (
      <div className='talk-div'>
        <p>
        {
          <a href={props.link} target='_blank' rel="noopener noreferrer">{props.title}</a>
        }
        </p>
        <div>
          { props.events.map(getEvents) }
        </div>
      </div>
    );
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