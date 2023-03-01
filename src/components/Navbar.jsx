import React, { Fragment } from "react";

import { ReactComponent as MenuLogo } from "../media/icons/logo-menu.svg";

function Navbar(props) {

  function showMenu() {
    if (document.getElementById("check").checked) {
      document.getElementById('navbar').classList.add('menu-clicked');
    } else {
      document.getElementById("navbar").classList.remove('menu-clicked');
    }
  }

  function menuSelect() {
    var activeLinks = document
      .getElementById("navmenu")
      .getElementsByClassName("active");
    
    if (activeLinks != null && activeLinks.length > 0) {
      activeLinks[0].classList.remove("active");
    }
    document.activeElement.classList.add("active");
    document.getElementById("check").checked = false;
    document.getElementById("navbar").classList.remove('menu-clicked');
  }

  return (
    <Fragment>
      <label htmlFor="check" className="checkbtn">MENU 
          <MenuLogo />
        </label>
      <input type="checkbox" id="check" onClick={showMenu} />
      <nav id="navbar">
        <label id="brand" className="navbar-brand">
          {props.profileName}
        </label>
        <ul id="navmenu">
          <li>
            <a id="a-home" href="#home" onClick={menuSelect}>
              Home
            </a>
          </li>
          <li>
            <a id="a-papers" href="#papers" onClick={menuSelect}>
              Papers
            </a>
          </li>
          <li>
            <a id="a-activities" href="#activities" onClick={menuSelect}>
              Activities
            </a>
          </li>
          <li>
            <a id="a-talks" href="#talks" onClick={menuSelect}>
              Talks
            </a>
          </li>
          {/* <li>
            <a id="a-posters" href="#posters" onClick={menuSelect}>
              Posters
            </a>
          </li> */}
          {/* <li>
            <a id="a-whatsnew" href="#whatsnew" onClick={menuSelect}>
              What's New
            </a>
          </li> */}
          <li>
            <a id="a-supervision" href="#supervision" onClick={menuSelect}>
              Supervision
            </a>
          </li>
          <li>
            <a id="a-teaching" href="#teaching" onClick={menuSelect}>
              Teaching
            </a>
          </li>
          <li>
            <a id="a-education" href="#education" onClick={menuSelect}>
              Education
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;
