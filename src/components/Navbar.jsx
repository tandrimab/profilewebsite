import React from "react";

import Hamburger from "./Hamburger";
import Navlist from "./Navlist";
import NavBrand from "./NavBrand";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md fixed-top" id="nav-section">
        <Hamburger />
        <NavBrand profileName={props.profileName} />
        <Navlist />
    </nav>
  );
}

export default Navbar;
