import React from "react";

import Navlink from "./Navlink";
function Navbar(props) {
  return (
      <nav>
        <Navlink link="" text={props.profileName} />
        <Navlink link="" text="Papers" cls="nav" />
        <Navlink link="" text="Posters" cls="nav" />
        <Navlink link="" text="Teaching" cls="nav" />
        <Navlink link="" text="Supervision" cls="nav" />
        <Navlink link="" text="Activities" cls="nav" />
        <Navlink link="" text="Talks" cls="nav" />
        <Navlink link="" text="Education" cls="nav" />
      </nav>
  );
}

export default Navbar;
