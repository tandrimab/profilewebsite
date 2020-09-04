import React from "react";

// Project library
import Navbar from "./Navbar";

function Header(props) {
  return (
    <div>
      <Navbar profileName={props.profileName} />
    </div>
  );
}

export default Header;