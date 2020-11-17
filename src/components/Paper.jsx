import React from "react";

// Project library

function Paper(props) {

  function expandPaper(event) {
    event.preventDefault();
    var papers = document.getElementsByClassName("expanded-paper");
    if (papers.length !== 0) {
      papers[0].classList.remove("expanded-paper");
    }
    document.activeElement.classList.add("expanded-paper");
    // let i;
    // for (i = 0; i < papers.length; i++) {
    //   papers[i].style.maxHeight = "200px";
    // }
    // if (document.activeElement.classList.contains("paper-div")) {
    //   document.activeElement.classList.add("expanded-paper");
    // } else {
    //   document.activeElement
    //     .closest(".paper-div")
    //     .classList.add("expanded-paper");
      // var closestElement = getClosestElement(
      //   document.activeElement,
      //   ".paper-div"
      // );
      // if (closestElement != null) {
      //   closestElement.classList.add("expanded-paper");
      // }
    // }
    return false;
  }

  const link = props.link;
  var linkText;
  if (link === "#") {
    linkText = "(To appear)";
  } else {
    linkText = "Paper";
  }
  return (
    <div className="paper-div" onClick={expandPaper}>
      <a href="#">
        <h4>{props.title}</h4>
        <p className="paper-author">{props.authors}</p>
      </a>
      <div className="event-paper">
        <p className="event">
          {props.event}
          <a href={link}>{linkText}</a>
          {/* <a href={slide}>{slideLink}</a> */}
        </p>
      </div>
    </div>
  );
}

export default Paper;
