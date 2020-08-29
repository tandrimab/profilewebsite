import React from "react";

function Navlink(props) {
  return (
    <a href={props.link} className={props.cls}>{props.text}</a>
  );
}

export default Navlink;
