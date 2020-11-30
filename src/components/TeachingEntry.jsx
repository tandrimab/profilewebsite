import React from "react";

function TeachingEntry(props) {
    var link = [];
    var semesters = [];
    if (props.link) {
      link.push(
        <a key={0} href={props.link} target='_blank' rel="noopener noreferrer">Link</a>
      );
    }
    props.semesters.map((semester, index) => {
      semesters.push(
        <span key={index}>{semester}&nbsp;&nbsp;</span>
      )
      return true;
    })
    return (
      <div className='teaching-div'>
        <div>
          <span>{props.subject}</span>
          {link}
          <p>{props.institute}</p>
          <div className='teaching-details'>
            <span>{semesters}</span>
            <span>&middot;&nbsp;&nbsp;{props.place}</span>
          </div>
        </div>
        <img src={props.image} alt='reference-img' />
      </div>
    );
}

export default TeachingEntry;