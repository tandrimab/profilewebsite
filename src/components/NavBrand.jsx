import React from "react";

function NavBrand(props) {
  return (
    <div id="brand">
      <a href="/" className="navbar-brand">{props.profileName}</a>
    </div>
  );
}

export default NavBrand;