import React from "react";

// Project library
import Navbar from "./Navbar";

function App(props) {
  return (
    <div>
      <Navbar profileName={props.profileName} />
    </div>
  );
}

export default App;
