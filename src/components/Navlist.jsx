import React from "react";

import Navlink from "./Navlink";

function Navlist() {
  return (
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
            <Navlink link="#" text="Papers" />
            <Navlink link="#" text="Posters" />
            <Navlink link="#" text="Teaching" />
            <Navlink link="#" text="Supervision" />
            <Navlink link="#" text="Activities" />
            <Navlink link="#" text="Talks" />
            <Navlink link="#" text="Education" />
        </ul>
    </div>
  );
}

export default Navlist;
