import React from "react";

function Navlink(props) {
  return (
    <li className="nav-item active">
      <a href={props.link} className="nav-link">{props.text}
        {/* <span className="sr-only">{current}</span> */}
      </a>
    </li>
  );
}

export default Navlink;
